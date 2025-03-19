import React, { useEffect, useState } from "react";
import { Card, Image } from "antd";
import { Registerable, registerComponentHelper } from "./reg-util";
import Title from "antd/es/typography/Title";
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

  return (
    <Card
      className={className}
      hoverable
      style={{
        width: cardWidth,
        backgroundColor: "#1e293b",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
      }}
      bodyStyle={{
        padding: "16px",
      }}
      cover={
        <div
          style={{
            position: "relative",
            width: "100%",
            height: cardWidth, // Square aspect ratio
          }}
        >
          <Image
            src={image}
            alt="Magic Astronaut - Person walking towards a glowing portal"
            style={{
              objectFit: "cover",
            }}
            width={"100%"}
            height={"100%"}
          />
        </div>
      }
      {...props}
    >
      <Title
        level={4}
        style={{
          margin: 0,
          color: "white",
          fontSize: windowWidth < 640 ? "18px" : "20px",
          marginBottom: "8px",
        }}
      >
        {cardTitle}
      </Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "8px",
          }}
        >
          <Title
            level={4}
            style={{
              margin: 0,
              color: "white",
              fontSize: windowWidth < 640 ? "10px" : "12px",
              marginBottom: "8px",
              fontWeight: 400,
            }}
          >
            {priceText}
          </Title>
          <div
            style={{
              fontSize: windowWidth < 640 ? "14px" : "16px",
              fontWeight: 600,
              color: "white",
            }}
          >
            {priceValue}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "start",
            marginBottom: "8px",
          }}
        >
          <Title
            level={4}
            style={{
              margin: 0,
              color: "white",
              fontSize: windowWidth < 640 ? "10px" : "12px",
              marginBottom: "8px",
              fontWeight: 400,
            }}
          >
            {totalVolumeText}
          </Title>
          <div
            style={{
              fontSize: windowWidth < 640 ? "14px" : "16px",
              fontWeight: 600,
              color: "white",
            }}
          >
            {totalVolumeValue}
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
