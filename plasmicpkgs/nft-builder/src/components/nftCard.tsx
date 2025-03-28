import React, { useEffect, useState } from "react";
import { Card, Image } from "antd";
import { CardProps } from "antd/es/card";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTCard extends CardProps {
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

export default function NFTCard({
  className,
  image,
  cardTitle,
  cardPrice,
  cardText,
  ...props
}: INFTCard) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function minifyCss(input: string) {
    return input
      .replace(/\s{2,}|\n/g, "") //  Remove spaces
      .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
  }

  // Responsive card sizing
  const cardWidth =
    windowWidth < 640 ? "280px" : windowWidth < 1024 ? "320px" : "360px";

  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.nftCardContainer} {
            width: ${cardWidth};
            background-color: #1e293b;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          }
    
          .${CSSClasses.nftCardBody} {
            padding: 16px;
          }
    
          .${CSSClasses.nftCardCover} {
            position: relative;
            width: 100%;
            height: ${cardWidth};
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
            color: white;
            font-size: ${windowWidth < 640 ? "18px" : "20px"};
            margin-bottom: 8px;
            font-weight: 600;
          }
    
          .${CSSClasses.nftCardPrice} {
            font-size: ${windowWidth < 640 ? "18px" : "20px"};
            font-weight: 600;
            color: white;
          }
    
          .${CSSClasses.nftCardText} {
            font-size: ${windowWidth < 640 ? "12px" : "14px"};
            color: #94a3b8;
          }
        `),
    [cardWidth, windowWidth]
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

export function registerNFTCard(loader?: Registerable) {
  registerComponentHelper(loader, NFTCard, {
    name: "nft-builder-card",
    displayName: "NFT Card",
    props: {
      image: {
        type: "imageUrl",
        description: "Letters to show",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U6XriTwWBNV5uMRIm8I0~MS2feeqhJQPUdnEG~mwakELPIHCLP~XKuvXYVDOttJU0IV3SUvnPiHF9g8fztlLAZv2H~favptM1g7SYAVs~yUQo9VVx2yYLQD6II9FFBLyZEyzVrHHaNGofcINa2D3AfJfnw5LIQsjzNoXKxhzkbTL04QZxbr2RMiJ9D8Kxvy0cnVf07EjHhtP0v09fY8Ej9vB0f75r1QKZd7~HBSECf25EuWqlDGFzURmrBKIP3SGkW36iW~bge5C0wv~XeKVMlApnDz4pcBq8LVkAadiAw0LzEOIBUaxoGp291JXIGon9XTBr-rzc66mYStb4YYoDg__",
      },
      cardTitle: {
        type: "string",
        description: "Title to show",
        defaultValue: "Magic Astronaut",
      },
      cardPrice: {
        type: "string",
        description: "Price to show",
        defaultValue: "5.67 SUI",
      },
      cardText: {
        type: "string",
        description: "Text to show",
        defaultValue: "Last sale: 5.63 SUI",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTCard",
  });
}
