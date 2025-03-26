import React, { useEffect, useState } from "react";
import { Card, Image } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";
import { CardProps } from "antd/es/card";

interface ICollectionCard extends CardProps {
  className?: string;
  image?: string;
  cardTitle: string;
  cardPrice: string;
  cardText: string;
  priceText: string;
  priceValue: string;
  totalVolumeText: string;
  totalVolumeValue: string;
}

const CSSClasses = {
  collectionCardContainer: "collection-card-container",
  collectionCardBody: "collection-card-body",
  collectionCardCover: "collection-card-cover",
  collectionCardImage: "collection-card-image",
  collectionCardTitle: "collection-card-title",
  collectionPriceContainer: "collection-price-container",
  collectionInfoBlock: "collection-info-block",
  collectionInfoTitle: "collection-info-title",
  collectionInfoValue: "collection-info-value",
};

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

export default function CollectionCard({
  className,
  image,
  cardTitle,
  priceText,
  priceValue,
  totalVolumeText,
  totalVolumeValue,
  ...props
}: ICollectionCard) {
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

  // Responsive card sizing
  const cardWidth =
    windowWidth < 640 ? "280px" : windowWidth < 1024 ? "320px" : "360px";

  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.collectionCardContainer} {
            width: ${cardWidth};
            background-color: #1e293b;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          }
    
          .${CSSClasses.collectionCardBody} {
            padding: 16px;
          }
    
          .${CSSClasses.collectionCardCover} {
            position: relative;
            width: 100%;
            height: ${cardWidth};
          }
    
          .${CSSClasses.collectionCardImage} {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
    
          .${CSSClasses.collectionCardTitle} {
            color: white;
            font-size: ${windowWidth < 640 ? "18px" : "20px"};
            margin-bottom: 8px;
            font-weight: 600;
          }
    
          .${CSSClasses.collectionPriceContainer} {
            display: flex;
            justify-content: space-between;
          }
    
          .${CSSClasses.collectionInfoBlock} {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: start;
            margin-bottom: 8px;
          }
    
          .${CSSClasses.collectionInfoTitle} {
            margin: 0;
            color: white;
            font-size: ${windowWidth < 640 ? "10px" : "12px"};
            margin-bottom: 8px;
            font-weight: 400;
          }
    
          .${CSSClasses.collectionInfoValue} {
            font-size: ${windowWidth < 640 ? "14px" : "16px"};
            font-weight: 600;
            color: white;
          }
        `),
    [cardWidth, windowWidth]
  );

  return (
    <Card
      className={`${CSSClasses.collectionCardContainer} ${className}`}
      hoverable
      bodyStyle={{}} // Remove inline style as it's now in CSSClasses.collectionCardBody
      cover={
        <div className={CSSClasses.collectionCardCover}>
          <Image
            src={image}
            alt="Magic Astronaut - Person walking towards a glowing portal"
            className={CSSClasses.collectionCardImage}
            width={"100%"}
            height={"100%"}
          />
        </div>
      }
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <div className={CSSClasses.collectionCardBody}>
        <div className={CSSClasses.collectionCardTitle}>
          {cardTitle}
        </div>
        <div className={CSSClasses.collectionPriceContainer}>
          <div className={CSSClasses.collectionInfoBlock}>
            <div className={CSSClasses.collectionInfoTitle}>
              {priceText}
            </div>
            <div className={CSSClasses.collectionInfoValue}>{priceValue}</div>
          </div>

          <div className={CSSClasses.collectionInfoBlock}>
            <div className={CSSClasses.collectionInfoTitle}>
              {totalVolumeText}
            </div>
            <div className={CSSClasses.collectionInfoValue}>
              {totalVolumeValue}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function registerCollectionCard(loader?: Registerable) {
  registerComponentHelper(loader, CollectionCard, {
    name: "hostless-collection-card",
    displayName: "Collection Card",
    props: {
      image: {
        type: "imageUrl",
        description: "Letters to show",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/52fb/d817/a84e35fda4ce13b9b5b0d9f0bd4af8ee?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q2c3Sdf8l7gI7wDrfc1BHfrYCFh8SJqDtB~z5dQ-z6-MMdP8RA7o-jbMzYFvfDbmhN2qv-2Z6Z1lUONbA6QxR1K4kcHI3bUY1fKtkEiMEicm9NprLgzTDGQggX7HmqgcpqeC8W1nKqARnvIeRNGnbAUXP6fvGdt7VyGuS9~Lc-sdCfYBNR8bbnGrymrYEdG7ndu4hrx3dXysz9ddkBLpvHRhZSATwjGeUCoTQwX0mwncBZF~J~kd6YCezc5VfrMC4TpkO8umUqPir0oa~csyEh9Hfdtz9F0PzQ5ZW14~AvN4LKFR7J5RW53P1I7znU54NkVYtYZuCdKhhHnTuv65ug__",
      },
      cardTitle: {
        type: "string",
        description: "Title to show",
        defaultValue: "Magic Astronaut",
      },
      priceText: {
        type: "string",
        description: "Price Text to show",
        defaultValue: "Floor Price",
      },
      priceValue: {
        type: "string",
        description: "Price Value to show",
        defaultValue: "50 SUI",
      },
      totalVolumeText: {
        type: "string",
        description: "Valume Text to show",
        defaultValue: "Total Volume",
      },
      totalVolumeValue: {
        type: "string",
        description: "Valume Value to show",
        defaultValue: "765K SUI",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "CollectionCard",
  });
}
