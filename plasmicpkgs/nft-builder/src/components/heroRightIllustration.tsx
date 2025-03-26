import React, { ReactNode } from "react";
import { Card } from "antd";
import clsx from "clsx";
import { Registerable, registerComponentHelper } from "../reg-util";

// CSS class names
const CSSClasses = {
  rightContent: "nft-hero-right-content",
  featuredCard: "nft-hero-featured-card",
  cardContent: "nft-hero-card-content",
  cardTitle: "nft-hero-card-title",

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

interface IHeroRightIllustration {
  className?: string;
  heroIllusImage?: ReactNode;
  heroAuthor?:  ReactNode;
  cardTitle?: string
}

const HeroRightIllustration = ({
  className,
  heroIllusImage,
  heroAuthor,
  cardTitle
}: IHeroRightIllustration) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.featuredCard} {
            background-color: rgba(30, 41, 59, 0.7);
            border-radius: 16px;
            overflow: hidden;
            border: none;
            width: 400px;
          }

          .${CSSClasses.cardContent} {
            padding: 16px;
            color: white;
          }
    
          .${CSSClasses.cardTitle} {
            color: white;
            font-weight: 600;
            line-height: 140%;
            font-size: 20px;
            margin: 0 0 8px 0;
          }

           /* Mobile Styles */
          @media (max-width: 930px) {
            .${CSSClasses.rightContent} {
              margin: 0px auto;
            }
          }
        `),
    []
  );

  return (
    <Card className={clsx(className, CSSClasses.featuredCard)} bodyStyle={{ padding: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div style={{ position: "relative" }}>
        {heroIllusImage}

        <div className={CSSClasses.cardContent}>
          <div className={CSSClasses.cardTitle}>{cardTitle}</div>

          {heroAuthor}
        </div>
      </div>
    </Card>
  );
};

export default HeroRightIllustration;

export function registerHeroRightIllustration(loader?: Registerable) {
  registerComponentHelper(loader, HeroRightIllustration, {
    name: "hostless-hero-right-illustration",
    displayName: "Hero Right Illustration",
    props: {
      authorAvatar: {
        type: "imageUrl",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xp6yKpimoicAZfFpVAD4Qk39aTBJ7by6QxcoD2eWyeqM9uyNi378e6OwcunC3keLpAR4Vez-3mjSuld7MJB280pEFweZCtN4K9GHWrmv2XmzK2WQCKJ3Hfv2FRBQpbj5MfolIoSb6L2peMlF-9CsiU2XthN11A4fCT5PINwAPW~S5vCY8PyD2gwhb39fh870a-tLm-j8vcX6S~Ihb8a1Q9Q-cuXpQ0vbgtMaWYT2JmxOMoPLp1vUhIgT-3AJ4tHQVDy-ZZxxIQ-2NliJnJBYiiijTYiYXLNeKDcQOqpOWjkDdiiYbjYZf4Bp0HqWNGV3ddB6iBCVEibB0s4KzvgI3g__",
      },
      heroIllusImage: {
        type: "slot",
        defaultValue: [{
          type: "component",
          name: "hostless-hero-illus-image"
        }]
      },
      cardTitle: {
        type: "slot",
        defaultValue: [{
          type: "text",
          value: "Space Walking"
        }]
      },
      heroAuthor: {
        type: "slot",
        defaultValue: [{
          type: "component",
          name: "hostless-hero-author"
        }]
      }
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "HeroRightIllustration",
  });
}
