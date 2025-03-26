import React from "react";
import { Avatar, Col, Row, Typography } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";
import ConnectWalletButton from "./connectWalletButton";

const { Title, Text } = Typography;

interface IUserInfoCard {
  className?: string;
}

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

const CSSClasses = {
  userInfoProfileContainer: "user-info-profile-container",
  userInfoBackgroundStreak: "user-info-background-streak",
  userInfoContentRow: "user-info-content-row",
  userInfoAvatar: "user-info-profile-avatar",
  userInfoUsername: "user-info-profile-username",
  userInfoStatLabel: "user-info-stat-label",
  userInfoStatValue: "user-info-stat-value",
  userInfoWalletColumn: "user-info-wallet-column",
};

export default function UserInfoCard({ className }: IUserInfoCard) {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.userInfoProfileContainer} {
          background-image: linear-gradient(to right, #1e3c72, #2a5298);
          padding: 20px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
  
        .${CSSClasses.userInfoBackgroundStreak} {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(45deg);
          opacity: 0.5;
        }
  
        .${CSSClasses.userInfoContentRow} {
          position: relative;
          z-index: 1;
        }
  
        .${CSSClasses.userInfoAvatar} {
          border: 2px solid #fff;
        }
  
        .${CSSClasses.userInfoUsername} {
          color: #fff;
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
  
        .${CSSClasses.userInfoStatLabel} {
          color: #fff;
          font-size: 14px;
          display: block;
          opacity: 0.7;
        }
  
        .${CSSClasses.userInfoStatValue} {
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
  
        .${CSSClasses.userInfoWalletColumn} {
          text-align: right;
        }
      `),
    []
  );
  return (
    <div className={`${CSSClasses.userInfoProfileContainer} ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div className={CSSClasses.userInfoBackgroundStreak} />

      <Row
        align="middle"
        gutter={[16, 16]}
        className={CSSClasses.userInfoContentRow}
      >
        {/* Profile Picture */}
        <Col xs={24} sm={4} md={3} lg={2}>
          <Avatar
            size={64}
            src="https://via.placeholder.com/64"
            className={CSSClasses.userInfoAvatar}
          />
        </Col>

        {/* Username and Stats */}
        <Col xs={24} sm={20} md={15} lg={16}>
          <Row align="middle" gutter={[16, 8]}>
            {/* Username */}
            <Col xs={24} sm={24} md={8}>
              <Title level={3} className={CSSClasses.userInfoUsername}>
                Animakid
              </Title>
            </Col>

            {/* Stats */}
            <Col xs={24} sm={24} md={16}>
              <Row gutter={[16, 8]}>
                <Col xs={8} sm={8} md={8}>
                  <Text className={CSSClasses.userInfoStatLabel}>
                    TOTAL NFTs
                  </Text>
                  <Text className={CSSClasses.userInfoStatValue}>100</Text>
                </Col>
                <Col xs={8} sm={8} md={8}>
                  <Text className={CSSClasses.userInfoStatLabel}>
                    TOTAL COLLECTIONS
                  </Text>
                  <Text className={CSSClasses.userInfoStatValue}>20</Text>
                </Col>
                <Col xs={8} sm={8} md={8}>
                  <Text className={CSSClasses.userInfoStatLabel}>
                    JOINED AT
                  </Text>
                  <Text className={CSSClasses.userInfoStatValue}>
                    27 February 2025
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Wallet Address Button */}
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          className={CSSClasses.userInfoWalletColumn}
        >
          <ConnectWalletButton />
        </Col>
      </Row>
    </div>
  );
}

export function registerUserInfoCard(loader?: Registerable) {
  registerComponentHelper(loader, UserInfoCard, {
    name: "hostless-user-info-card",
    displayName: "User Info Card",
    props: {
      //   image: {
      //     type: "imageUrl",
      //     description: "Letters to show",
      //     defaultValue:
      //       "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U6XriTwWBNV5uMRIm8I0~MS2feeqhJQPUdnEG~mwakELPIHCLP~XKuvXYVDOttJU0IV3SUvnPiHF9g8fztlLAZv2H~favptM1g7SYAVs~yUQo9VVx2yYLQD6II9FFBLyZEyzVrHHaNGofcINa2D3AfJfnw5LIQsjzNoXKxhzkbTL04QZxbr2RMiJ9D8Kxvy0cnVf07EjHhtP0v09fY8Ej9vB0f75r1QKZd7~HBSECf25EuWqlDGFzURmrBKIP3SGkW36iW~bge5C0wv~XeKVMlApnDz4pcBq8LVkAadiAw0LzEOIBUaxoGp291JXIGon9XTBr-rzc66mYStb4YYoDg__",
      //   },
      //   cardTitle: {
      //     type: "string",
      //     description: "Title to show",
      //     defaultValue: "Magic Astronaut",
      //   },
      //   cardPrice: {
      //     type: "string",
      //     description: "Price to show",
      //     defaultValue: "5.67 SUI",
      //   },
      //   cardText: {
      //     type: "string",
      //     description: "Text to show",
      //     defaultValue: "Last sale: 5.63 SUI",
      //   },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "UserInfoCard",
  });
}
