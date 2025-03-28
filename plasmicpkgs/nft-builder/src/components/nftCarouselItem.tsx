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
                max-width: 240px;
                width: 100%;
              }
        
              .${CSSClasses.collectionCard} {
                background-color: transparent;
                border: none;
                border-radius: 16px;
                overflow: hidden;
              }
        
              .${CSSClasses.cardImageWrapper} {
                border-top-right-radius: 24px;
                border-top-left-radius: 24px;
                overflow: hidden;
                height: 240px;
              }
        
              .${CSSClasses.cardImage} {
                max-width: 240px;
                width: 100%;
                height: 240px;
                object-fit: cover;
              }
        
              .${CSSClasses.cardContent} {
                background-color: #1A2938;
                border-bottom-right-radius: 24px;
                border-bottom-left-radius: 24px;
                padding: 12px 20px;
              }
        
              .${CSSClasses.cardTitle} {
                color: white;
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
                color: white;
                font-weight: bold;
                font-size: 20px;
                font-weight: 600;
                line-height: 140%;
              }
            `),
    []
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div key={id} className={clsx(className, CSSClasses.carouselItem)}>
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
    </>
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
          "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZiU6y5iJZ03xClz-XxUUhvYiaBn9RBcEKqhGU6RG4AgmxFvrlxOLrn4Kgg3KHh~x0A7iyQcZa55Lz~mKxJ4jBiMf3sGQGgENAP7-Gom3GNgCr7GFPkYnpc3VSTDVIgdCxq3LqxDXo5qlxDS7UafhIrGK8eZEHpupbJYCqRB2gShQSuawYBOjz-a5rl1Aac3zzMHgpUud7t1AHwhAB21f0QZNdiUiulyZRk0bZnmcuD4XjsI3Og07YLlg2Fj3s3dBGgqe8o9wurToR9RHDKL4sCKhkXNS2qvNX2T04uZgxPXlMq82H8rQKvY~MVamkQEBHeWWFhHq~xoKsK~VDba1w__",
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
