import React, { useEffect, useState } from "react";
import { Card, Image } from "antd";
import { Registerable, registerComponentHelper } from "./reg-util";
import Title from "antd/es/typography/Title";
import { CardProps } from "antd/es/card";

interface INFTCard extends CardProps {
  className?: string;
  image?: string;
  cardTitle: string;
  cardPrice: string;
  cardText: string;
}

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
            height: cardWidth,
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
            fontSize: windowWidth < 640 ? "18px" : "20px",
            marginBottom: "8px"
          }}
        >
          {cardTitle}
        </Title>
        <div
          style={{
            fontSize: windowWidth < 640 ? "18px" : "20px",
            fontWeight: 600,
            color: "white",
          }}
        >
          {cardPrice}
        </div>
      </div>

      <div
        style={{
          fontSize: windowWidth < 640 ? "12px" : "14px",
          color: "#94a3b8",
        }}
      >
        {cardText}
      </div>
    </Card>
  );
}

export function registerNFTCard(loader?: Registerable) {
  registerComponentHelper(loader, NFTCard, {
    name: "hostless-nft-card",
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
