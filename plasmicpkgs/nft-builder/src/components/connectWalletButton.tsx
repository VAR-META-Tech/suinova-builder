import { ConnectButton } from "@mysten/dapp-kit";
import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

type ConnectWalletButtonProps = {
  className?: string;
  connectText?: ReactNode;
  icon?: ReactNode;
};

const CSSClasses = {
  connectWalletButton: "connect-wallet-button",
  connectWalletText: "connect-wallet-text",
};

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

const WalletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="15" y="12" width="6" height="4" fill="black" fill-opacity="0.25" />
    <path
      d="M14.25 4H9.75C6.56802 4 4.97703 4 3.98851 5.00421C3 6.00841 3 7.62465 3 10.8571V13.1429C3 16.3753 3 17.9916 3.98851 18.9958C4.97703 20 6.56802 20 9.75 20H14.25C17.432 20 19.023 20 20.0115 18.9958C21 17.9916 21 16.3753 21 13.1429V10.8571C21 7.62465 21 6.00841 20.0115 5.00421C19.023 4 17.432 4 14.25 4Z"
      stroke="white"
      stroke-width="1.2"
    />
    <path
      d="M7 8H10"
      stroke="white"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M19 16H17C16.0572 16 15.5858 16 15.2929 15.7071C15 15.4142 15 14.9428 15 14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H19C19.9428 12 20.4142 12 20.7071 12.2929C21 12.5858 21 13.0572 21 14C21 14.9428 21 15.4142 20.7071 15.7071C20.4142 16 19.9428 16 19 16Z"
      stroke="white"
      stroke-width="1.2"
    />
  </svg>
);

const ConnectWalletButton = React.forwardRef<
  HTMLDivElement,
  ConnectWalletButtonProps
>(({ className, connectText, icon, ...props }, ref) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.connectWalletButton} {
          background-color: #2978D1 !important;
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
      `),
    []
  );

  return (
    <ConnectButton
      className={`${CSSClasses.connectWalletButton} ${className}`}
      connectText={
        <div ref={ref} className={CSSClasses.connectWalletText}>
          <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
          {icon || <WalletIcon />}
          {connectText}
        </div>
      }
      {...props}
    />
  );
});

export function registerConnectWalletButton(PLASMIC?: Registerable) {
  registerComponentHelper(PLASMIC, ConnectWalletButton, {
    name: "nft-builder-connect-wallet-btn",
    displayName: "Connect Wallet Button",
    importPath: "@plasmicpkgs/nft-builder",
    importName: "ConnectWalletButton",
    props: {
      connectText: {
        type: "string",
        description: "Button text to show",
        defaultValue: "Connect Wallet",
      },
      icon: {
        type: "imageUrl",
      },
    },
  });
}

export default ConnectWalletButton;
