import { superDbMgr, userDbMgr } from "@/wab/server/routes/util";
import { BadRequestError } from "@/wab/shared/ApiErrors/errors";
import { Request, Response } from "express";

export interface ApiNftCollection {
  id: string;
  projectId: string;
  packageId: string;
  collectionId: string;
  creatorAddress: string;
  collectionType: string;
  royaltyFee: number;
  createdAt: string;
  updatedAt: string;
}

export async function importNftCollection(req: Request, res: Response) {
  const { 
    packageId,
    collectionId,
    marketplaceId,
    creatorAddress,
    collectionType,
    royaltyFee
  } = req.body;

  const projectId = req.params.projectId;

  // Validate required fields
  if (!projectId || !packageId || !collectionId || !creatorAddress || !collectionType || !royaltyFee) {
    throw new BadRequestError("Missing required fields");
  }

  // Validate royalty fee is between 0 and 100
  if (royaltyFee < 0) {
    throw new BadRequestError("Royalty fee must be greater than 0");
  }

  // Get database manager
  const dbMgr = superDbMgr(req);

  // Check if project exists
  const project = await dbMgr.getProjectById(projectId);
  if (!project) {
    throw new BadRequestError("Project not found");
  }

  // Create NFT collection
  const collection = await dbMgr.upsertCollectionByProjectId(projectId, {
    packageId,
    marketplaceId,
    collectionId,
    creatorAddress,
    collectionType,
    royaltyFee,
  });

  res.json({ collection });
} 