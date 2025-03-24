import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import { Image } from "antd";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  cardImageContainer: "nft-hero-card-image-container",
  cardImage: "nft-hero-card-image",
};

// Minify CSS helper function
const minifyCss = (css: string) => {
  return css
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .trim();
};

interface IHeroIllusImage {
  className?: string;
  heroIllustration?: string;
}

const HeroIllusImage = ({ heroIllustration, className }: IHeroIllusImage) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.cardImageContainer} {
            width: 400px;
            height: 400px;
          }

          .${CSSClasses.cardImage} {
            width: 100%;
            height: 400px !important;
            object-fit: cover;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
          }
        `),
    []
  );

  return (
    <div className={clsx(className, CSSClasses.cardImageContainer)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <Image
        src={heroIllustration}
        alt="Rocket Launch"
        className={CSSClasses.cardImage}
      />
    </div>
  );
};

export default HeroIllusImage;

export function registerHeroIllusImage(loader?: Registerable) {
  registerComponentHelper(loader, HeroIllusImage, {
    name: "hostless-hero-illus-image",
    displayName: "Hero Illus image",
    props: {
      heroIllustration: {
        type: "imageUrl",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/a414/8b72/571df01c2802553b6506c15e0db400a1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PAVjBxh8ZNHa88643Qlj0f-3bRs16~L9n~h8~XtslmpSkZFR88iP65Q1VOtcZiUr5AZHoSpPFm1pFwEBPJ8d8FxWD1t8Y2UudEIsdB3S3Yymo1joFt52sLdpbiL1~VGrGOsz2tekiK3h1YVJJVaVXTOlJai62chGTW9jalfZNf6RLr630djHQ6exw6kLt8ha9A5E647QxZDsFFcRegILDMorZ2kdNMYYvz-zRYesFI8pXU8ub5vnRQTTKhhpF-dY91gFv311wc~nGMB0KA~OV6FN0gmlnQBYGKlbt4URw8~rDsPAsegTnPhbq-iGnfFbUcuWKj8Ak-QMzv~9LB~orA__",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "HeroIllusImage",
  });
}
