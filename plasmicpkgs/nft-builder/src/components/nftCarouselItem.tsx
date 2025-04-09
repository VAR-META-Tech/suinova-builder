import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

interface INFTCarouselItem {
  id: number;
  name: string;
  image: string;
  floorPrice: string;
  className?: string;
}

const CSSClasses = {
  carouselItem: "nft-carousel-item",
  collectionCard: "nft-carousel-collection-card",
  cardImageWrapper: "nft-carousel-card-image-wrapper",
  cardImage: "nft-carousel-card-image",
  cardContent: "nft-carousel-card-content",
  cardTitle: "nft-carousel-card-title",
  statsContainer: "nft-carousel-stats-container",
  statLabel: "nft-carousel-stat-label",
  statValue: "nft-carousel-stat-value",
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

export default function NFTCarouselItem({
  floorPrice,
  id,
  image,
  name,
  className
}: INFTCarouselItem) {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
              .${CSSClasses.carouselItem} {
                padding: 0 10px;
                max-width: unset !important;
             
              }
        
              .${CSSClasses.collectionCard} {
                border: 1px solid darkblue;
                border-radius: 20px;
                overflow: hidden;
                padding: 8px;
              }
        
              .${CSSClasses.cardImageWrapper} {
                border-top-right-radius: 24px;
                border-top-left-radius: 24px;
                overflow: hidden;
                height: 240px;
              }
        
              .${CSSClasses.cardImage} {
                width: 100%;
                height: 240px;
                object-fit: cover;
              }
        
              .${CSSClasses.cardContent} {
                background-color: white;
                border-bottom-right-radius: 24px;
                border-bottom-left-radius: 24px;
                padding: 12px 20px;
              }
        
              .${CSSClasses.cardTitle} {
                color: #27273A;
                text-align: start;
                margin: 0 0 8px 0;
                font-size: 16px;
                font-weight: 500;
                line-height: 140%;
              }
        
              .${CSSClasses.statsContainer} {
                display: flex;
                justify-content: space-between;
              }
        
              .${CSSClasses.statValue} {
                color: #27273A;
                font-weight: bold;
                font-size: 20px;
                font-weight: 600;
                line-height: 140%;
              }
            `),
    []
  );

  return (
    <div key={id} className={clsx(className, CSSClasses.carouselItem)}>
        <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
        <div className={CSSClasses.collectionCard}>
          <div className={CSSClasses.cardImageWrapper}>
            <img alt={name} src={image} className={CSSClasses.cardImage} />
          </div>
          <div className={CSSClasses.cardContent}>
            <div className={CSSClasses.cardTitle}>{name}</div>
            <div className={CSSClasses.statsContainer}>
              <div className={CSSClasses.statValue}>{floorPrice}</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export function registerNFTCarouselItem(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarouselItem, {
    name: "nft-builder-carousel-item",
    displayName: "NFT Carousel Item",
    props: {
      floorPrice: {
        type: "string",
        defaultValue: "30 SUI",
      },
      id: {
        type: "number",
        defaultValue: Math.floor(Math.random() * 10000),
      },
      image: {
        type: "string",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/d125/0dcf/43d2a28cf3971315cbc5d8f588f7d3da?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtI7~AQ5TVPsaCPRDkCKbZKu0u-M-tXIzqoA3hNt0-wQmSBT8L9g5Hvi3IRzreKALm5OkeOHHL1J1~ftQNGp4wrbjH5iaOJUmwFv9aKDzn1uT37qCZttZMqM7oc1~TQb3nTrkAc-x1fJD3R4WI0HkZWEY-C2nbzHpoJaVmL1K-7xgDau-i02Kydj-bzzX0h0wzbWVUDu9vRhUT-AnmEuUJgBvHTTEH-woFBOx402wnb~5I3~FdE59E6RaP4YO6rC-BTtaK4~-k7QfEkWMJ3sgXbuzdeoRB0KJYJvquGTIcwdYAgN9~3Ch4Dk8U4~egxbiX1auvMPt2dVuSycVQPjQ__",
      },
      name: {
        type: "string",
        defaultValue: "NFT Astronaut",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTCarouselItem",
  });
}
