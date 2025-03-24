import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  pageContainer: "nft-hero-page-container",
  contentWrapper: "nft-hero-content-wrapper",
  leftContent: "nft-hero-left-content",
  mainTitle: "nft-hero-main-title",
  description: "nft-hero-description",
  getStartedButton: "nft-hero-get-started-button",
  rightContent: "nft-hero-right-content",
  featuredCard: "nft-hero-featured-card",
  cardContent: "nft-hero-card-content",
  cardTitle: "nft-hero-card-title",
  cardAuthor: "nft-hero-card-author",
  authorName: "nft-hero-author-name",
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

interface IHero {
  className?: string;
  heroIllustration?: string;
  startButton?: ReactNode;
  heroMainTitle?: string;
  heroDescription?: string;
}

const Hero = ({
  className,
  heroIllustration,
  heroMainTitle,
  heroDescription,
  startButton,
}: IHero) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.pageContainer} {
            background-color: #0a0e17;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
    
          .${CSSClasses.contentWrapper} {
            max-width: 1050px;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
            align-items: center;
          }
    
          .${CSSClasses.leftContent} {
            color: white;
            padding: 20px;
            max-width: 50%;
          }
    
          .${CSSClasses.mainTitle} {
            color: white;
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 16px;
            line-height: 150%;
          }
    
          .${CSSClasses.description} {
            color: #adb5bd;
            font-size: 20px;
            margin-bottom: 32px;
            line-height: 160%;
          }
    
          .${CSSClasses.getStartedButton} {
            background-color: #1677ff;
            border-radius: 4px;
            height: 44px;
            font-weight: 500;
            width: fit-content;
          }
    
          .${CSSClasses.rightContent} {
            flex: none;
          }
    
          .${CSSClasses.featuredCard} {
            background-color: rgba(30, 41, 59, 0.7);
            border-radius: 16px;
            overflow: hidden;
            border: none;
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
    
          .${CSSClasses.cardAuthor} {
            display: flex;
            align-items: center;
            gap: 8px;
          }
    
          .${CSSClasses.authorName} {
            color: #adb5bd;
            font-weight: 400;
            line-height: 140%;
            font-size: 16px;
          }

           /* Mobile Styles */
                
          @media (max-width: 930px) {
            .${CSSClasses.contentWrapper} {
              flex-direction: column;
            }

            .${CSSClasses.mainTitle}, .${CSSClasses.description} {
              text-align: center;
            }
            
            .${CSSClasses.getStartedButton} {
              margin: 0px auto;
            }

            .${CSSClasses.leftContent} {
              max-width: 100%;
            }

            .${CSSClasses.rightContent} {
              margin: 0px auto;
              max-width: 100%;
            }
          }
        `),
    []
  );

  return (
    <div className={clsx(className, CSSClasses.pageContainer)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div className={CSSClasses.contentWrapper}>
        {/* Left Content */}
        <div className={CSSClasses.leftContent}>
          <div className={CSSClasses.mainTitle}>{heroMainTitle}</div>
          <div className={CSSClasses.description}>{heroDescription}</div>

          {startButton}
        </div>

        {/* Right Content */}
        <div className={CSSClasses.rightContent}>{heroIllustration}</div>
      </div>
    </div>
  );
};

export default Hero;

export function registerHero(loader?: Registerable) {
  registerComponentHelper(loader, Hero, {
    name: "hostless-hero",
    displayName: "Hero",
    props: {
      heroMainTitle: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "The Leading Marketplace On SUI Blockchain",
          },
        ],
      },
      heroDescription: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value:
              "Discover The Most Outstanding NFTs Collections Across Various Categories, Buy And Sell To Earn Rewards",
          },
        ],
      },
      startButton: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-get-started-button",
          },
        ],
      },
      heroIllustration: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-hero-right-illustration",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "Hero",
  });
}
