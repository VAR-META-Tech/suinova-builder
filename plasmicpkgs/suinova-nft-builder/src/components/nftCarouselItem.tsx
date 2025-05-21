import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

interface INFTBuilderCarouselItem {
  id: number;
  name: string;
  image: string;
  price: string;
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

function NFTBuilderCarouselItem({
  price,
  id,
  image,
  name,
  className,
}: INFTBuilderCarouselItem) {
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
            <div className={CSSClasses.statValue}>{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const NFTCarouselItem = NFTBuilderCarouselItem;
export const NFTCarouselItemMeta = {
  name: "NFTBuilderCarouselItem",
  displayName: "NFT Carousel Item",
  props: {
    className: {
      type: "string" as const,
    },
    price: {
      type: "string" as const,
      defaultValue: "30 SUI",
    },
    id: {
      type: "number" as const,
      defaultValue: Math.floor(Math.random() * 10000),
    },
    image: {
      type: "imageUrl" as const,
      defaultValue: "https://suinova.var-meta.com/static/img/astronaut.jpeg",
    },
    name: {
      type: "string" as const,
      defaultValue: "NFT Astronaut",
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "NFTCarouselItem",
};

export function registerNFTCarouselItem(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarouselItem, NFTCarouselItemMeta);
}
