import { md5 } from "@/wab/server/util/hash";
import { parseDataUrl } from "@/wab/shared/data-urls";
import { isSVG } from "@/wab/shared/svg-utils";
import * as Sentry from "@sentry/node";
import S3 from "aws-sdk/clients/s3";
import FileType from "file-type";
import { extension } from "mime-types";
import sharp from "sharp";
import { failableAsync } from "ts-failable";

// Get environment variables for AWS configuration
const siteAssetsBucket = process.env.SITE_ASSETS_BUCKET as string;
const siteAssetsBaseUrl = process.env.SITE_ASSETS_BASE_URL as string;
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsRegion = process.env.AWS_REGION;

// Configure AWS SDK with credentials
const s3Client = new S3({
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  region: awsRegion,
});

// Log configuration status (but don't expose secrets)
console.log(`S3 Configuration:
  Bucket: ${siteAssetsBucket}
  Base URL: ${siteAssetsBaseUrl}
  Region: ${awsRegion}
  Access Key configured: ${awsAccessKeyId ? "Yes" : "No"}
  Secret Key configured: ${awsSecretAccessKey ? "Yes" : "No"}
`);

async function getFileType(buffer: Buffer | ArrayBuffer) {
  let fileType = await FileType.fromBuffer(buffer);
  if ((!fileType || fileType.mime === "application/xml") && isSVG(buffer)) {
    fileType = {
      mime: "image/svg+xml" as FileType.MimeType,
      ext: "svg" as FileType.FileExtension,
    };
  }
  return fileType;
}

export async function uploadDataUriToS3(
  dataUri: string,
  opts?: { imageOnly?: boolean }
) {
  return failableAsync<string, Error>(async ({ success }) => {
    if (!dataUri.startsWith("data:")) {
      // Already on S3
      return success(dataUri);
    }
    const parsed = parseDataUrl(dataUri);
    const contentType = parsed.contentType;
    const fileBuffer = parsed.toBuffer();

    return (await uploadFileToS3(fileBuffer, { ...opts, contentType })).map(
      (res) => res.url
    );
  });
}

export async function uploadFileToS3(
  fileBuffer: Buffer,
  opts?: { imageOnly?: boolean; contentType?: string }
) {
  return failableAsync<{ url: string; mimeType: string | undefined }, Error>(
    async ({ success, failure }) => {
      // Check if AWS is properly configured
      if (!awsAccessKeyId || !awsSecretAccessKey || !siteAssetsBucket) {
        console.error("AWS S3 credentials or bucket not configured properly");
        return failure(new Error("AWS S3 configuration missing"));
      }

      const imageOnly = opts?.imageOnly ?? true;

      const fileType = await getFileType(fileBuffer);
      const mime = fileType?.mime ?? opts?.contentType;
      const ext = fileType?.ext ?? (mime && extension(mime));

      const optimizedBuffer =
        fileType?.mime === "image/jpeg" || fileType?.mime === "image/png"
          ? await sharp(fileBuffer)
              .jpeg({ progressive: true, force: false, mozjpeg: true })
              .png({ progressive: true, force: false })
              .toBuffer()
          : fileBuffer;

      if (!fileType && (imageOnly || !mime || !ext)) {
        return failure(new Error("Invalid file type"));
      }

      const fileHash = md5(fileBuffer);
      const storagePath = `${fileHash}.${ext}`;

      try {
        const { Location } = await s3Client
          .upload({
            Bucket: siteAssetsBucket,
            Key: storagePath,
            Body: optimizedBuffer,
            ContentType: mime,
            CacheControl: `max-age=3600, s-maxage=31536000`,
          })
          .promise();

        // Replace dataUri by the URL of the just uploaded asset.
        // The value of siteAssetBaseUrl is expected to be the CDN base URL,
        // but if it's not available, we simply use the plain S3 URL.
        return success({
          url: siteAssetsBaseUrl
            ? `${siteAssetsBaseUrl}/${storagePath}`
            : Location,
          mimeType: mime,
        });
      } catch (err) {
        console.error("Could not upload asset to S3:", err);
        Sentry.captureMessage(`Could not upload asset to S3 (${err.message}).`);
        return failure(err);
      }
    }
  );
}
