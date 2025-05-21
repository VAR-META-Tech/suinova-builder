import {
  ConnectButton,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";
import React, { ReactNode, useState } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import { Dropdown, MenuProps, Tooltip } from "antd";
import clsx from "clsx";

type NFTBuilderConnectWalletButtonProps = {
  className?: string;
  connectText?: ReactNode;
  icon?: ReactNode;
  copyIcon?: ReactNode;
  userIcon?: ReactNode;
  logoutIcon?: ReactNode;
  onMyProfileClick?: () => void;
};

const CSSClasses = {
  connectWalletButton: "nft-builder-connect-wallet-button",
  connectWalletText: "nft-builder-connect-wallet-text",
  container: "nft-builder-wallet-text-container",
  walletAddress: "nft-builder-wallet-text",
  dropdownItem: "nft-builder-drop-down-item",
};

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

const formatAddress = (address: string) => {
  return address.length > 15
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;
};

const NFTBuilderConnectWalletButton = React.forwardRef<
  HTMLDivElement,
  NFTBuilderConnectWalletButtonProps
>(
  (
    {
      className,
      connectText,
      icon,
      copyIcon,
      userIcon,
      logoutIcon,
      onMyProfileClick,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);
    const { mutate: disconnect } = useDisconnectWallet();
    const currentAccount = useCurrentAccount();

    const handleCopy = (address: string) => {
      if (address) {
        navigator.clipboard.writeText(address as string);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    const cssStyles = React.useMemo(
      () =>
        minifyCss(`
        .${CSSClasses.connectWalletButton} {
          background-color: #48B7FF !important;
          width: 200px;
          height: 50px;
          border-radius: 12px !important;
        }
  
        .${CSSClasses.connectWalletText} {
          color: white;
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .${CSSClasses.container} {
          background-color: #48B7FF; 
          padding: 6px 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 200px;
          height: 38px;
        }

        .${CSSClasses.walletAddress} {
          color: white;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
        }

        .${CSSClasses.dropdownItem} {
          padding: 8px 4px;
        }
      `),
      []
    );

    const items: MenuProps["items"] = [
      {
        label: (
          <div className={CSSClasses.dropdownItem} onClick={onMyProfileClick}>
            My Profile
          </div>
        ),
        key: "1",
        icon: userIcon,
      },
      {
        label: (
          <div className={CSSClasses.dropdownItem} onClick={() => disconnect()}>
            Disconnect Wallet
          </div>
        ),
        key: "2",
        icon: logoutIcon,
      },
    ];

    return (
      <Dropdown menu={{ items }} disabled={!currentAccount?.address}>
        <a onClick={(e) => e.preventDefault()}>
          <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
          {currentAccount?.address ? (
            <div className={clsx(CSSClasses.container, className)}>
              <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                <span
                  onClick={() => handleCopy(currentAccount?.address || "")}
                  style={{ cursor: "pointer" }}
                >
                  {copyIcon}
                </span>
              </Tooltip>
              <span className={CSSClasses.walletAddress}>
                {formatAddress(currentAccount?.address || "")}
              </span>
            </div>
          ) : (
            <ConnectButton
              className={clsx(CSSClasses.connectWalletButton, className)}
              connectText={
                <div ref={ref} className={CSSClasses.connectWalletText}>
                  {icon}
                  {connectText}
                </div>
              }
              {...props}
            />
          )}
        </a>
      </Dropdown>
    );
  }
);

export const ConnectWalletButton = NFTBuilderConnectWalletButton;
export const ConnectWalletButtonMeta = {
  name: "NFTBuilderConnectWalletButton",
  displayName: "Connect Wallet Button",
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "ConnectWalletButton",
  props: {
    className: {
      type: "string" as const,
    },
    connectText: {
      type: "string" as const,
      description: "Button text to show",
      defaultValue: "Connect Wallet",
    },
    icon: {
      type: "slot" as const,
      hidePlaceholder: true,
      defaultValue: [
        {
          type: "component" as const,
          name: "NFTBuilderWalletIcon",
        },
      ],
    },
    copyIcon: {
      type: "slot" as const,
      defaultValue: {
        type: "component" as const,
        name: "NFTBuilderCopyIcon",
      },
    },
    userIcon: {
      type: "slot" as const,
      defaultValue: {
        type: "component" as const,
        name: "NFTBuilderUserIcon",
      },
    },
    logoutIcon: {
      type: "slot" as const,
      defaultValue: {
        type: "component" as const,
        name: "NFTBuilderLogoutIcon",
      },
    },
    onMyProfileClick: {
      type: "eventHandler" as const,
      argTypes: [],
    },
  },
};

export function registerConnectWalletButton(PLASMIC?: Registerable) {
  registerComponentHelper(
    PLASMIC,
    ConnectWalletButton,
    ConnectWalletButtonMeta
  );
}
