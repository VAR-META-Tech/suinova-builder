import React from "react";
import { Card, Image } from "antd";
import { CardProps } from "antd/es/card";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTBuilderCard extends CardProps {
  className?: string;
  image?: string;
  cardTitle: string;
  cardPrice: string;
  cardText: string;
}

const CSSClasses = {
  nftCardContainer: "nft-card-Container",
  nftCardBody: "nft-card-Body",
  nftCardCover: "nft-card-Cover",
  nftCardImage: "nft-card-Image",
  nftCardContent: "nft-card-Content",
  nftCardTitle: "nft-card-Title",
  nftCardPrice: "nft-card-Price",
  nftCardText: "nft-card-Text",
};

function NFTBuilderCard({
  className,
  image,
  cardTitle,
  cardPrice,
  cardText,
  ...props
}: INFTBuilderCard) {
  function minifyCss(input: string) {
    return input
      .replace(/\s{2,}|\n/g, "") //  Remove spaces
      .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
  }

  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.nftCardContainer} {
            width: 300px;
            background-color:rgb(255, 255, 255);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #27273A;
          }
    
          .${CSSClasses.nftCardCover} {
            position: relative;
            width: 100%;
            height: 300px;
          }
    
          .${CSSClasses.nftCardImage} {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
    
          .${CSSClasses.nftCardContent} {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: start;
            margin-bottom: 8px;
          }
    
          .${CSSClasses.nftCardTitle} {
            color: #27273A;
            font-size: 20px;
            margin-bottom: 8px;
            font-weight: 600;
          }
    
          .${CSSClasses.nftCardPrice} {
            font-size: 20px;
            font-weight: 600;
            color: #27273A;
          }
    
          .${CSSClasses.nftCardText} {
            font-size: 14px;
            color: #27273A;
          }
        `),
    []
  );

  return (
    <Card
      className={`${CSSClasses.nftCardContainer} ${className}`}
      hoverable
      bodyStyle={{}} // Remove inline style as it's now in CSSClasses.nftCardBody
      cover={
        <div className={CSSClasses.nftCardCover}>
          <Image
            src={image}
            alt="Magic Astronaut - Person walking towards a glowing portal"
            className={CSSClasses.nftCardImage}
          />
        </div>
      }
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div className={CSSClasses.nftCardBody}>
        <div className={CSSClasses.nftCardContent}>
          <div className={CSSClasses.nftCardTitle}>
            {cardTitle}
          </div>
          <div className={CSSClasses.nftCardPrice}>{cardPrice}</div>
        </div>

        <div className={CSSClasses.nftCardText}>{cardText}</div>
      </div>
    </Card>
  );
}

export const NFTCard = NFTBuilderCard
export const NFTCardMeta = {
  name: "NFTBuilderCard",
  displayName: "NFT Card",
  props: {
    className: {
      type: "string" as const,
    },
    image: {
      type: "imageUrl" as const,
      description: "Letters to show",
      defaultValue:
        "https://suinova.var-meta.com/static/img/nft-illustration.jpeg",
    },
    cardTitle: {
      type: "string" as const,
      description: "Title to show",
      defaultValue: "Magic Astronaut",
    },
    cardPrice: {
      type: "string" as const,
      description: "Price to show",
      defaultValue: "5.67 SUI",
    },
    cardText: {
      type: "string" as const,
      description: "Text to show",
      defaultValue: "Last sale: 5.63 SUI",
    },
  },
  importPath: "@plasmicpkgs/nft-builder/dist/index.js",
  importName: "NFTCard",
}

export function registerNFTCard(loader?: Registerable) {
  registerComponentHelper(loader, NFTCard, NFTCardMeta);
}
