import {
  ConnectButton,
  useCurrentAccount,
  useDisconnectWallet,
  useSignPersonalMessage,
} from "@mysten/dapp-kit";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import { useMutation } from "@tanstack/react-query";
import { InternalContext } from "../globalContextProvider";
import { DEFAULT_API_URL } from "../const";
import { Dropdown, MenuProps, Tooltip } from "antd";
import clsx from "clsx";

type ConnectWalletButtonProps = {
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

const ConnectWalletButton = React.forwardRef<
  HTMLDivElement,
  ConnectWalletButtonProps
>(({ className, connectText, icon, copyIcon, userIcon, logoutIcon, onMyProfileClick, ...props }, ref) => {
  const [copied, setCopied] = useState(false);
  const { mutate: disconnect } = useDisconnectWallet();
  const {
    login: loginContext,
    user,
    logout: logoutContext,
    accessToken,
    apiUrl = DEFAULT_API_URL,
  } = useContext(InternalContext);
  const currentAccount = useCurrentAccount();
  const { mutateAsync: signPersonalMessage, isPending: isPendingSign } =
    useSignPersonalMessage({});

  const loginProcessingRef = useRef(false);
  const { mutateAsync: loginMutate, isPending: isPendingLogin } = useMutation<
    unknown,
    unknown,
    { signature: string; nonce: number }
  >({
    mutationFn: async ({ signature, nonce }) => {
      const res = await fetch(`${apiUrl}/auth/wallet/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: currentAccount?.address,
          signature: signature,
          nonce: nonce,
        }),
      });
      return res.json();
    },
  });
  const { mutateAsync: logoutMutate } = useMutation<unknown, unknown>({
    mutationFn: async () => {
      await fetch(`${apiUrl}/v1/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  });

  const isPendingConnect = useMemo(
    () => isPendingSign || isPendingLogin,
    [isPendingSign, isPendingLogin]
  );

  useEffect(() => {
    if (!user && currentAccount) {
      login();
    }
    if (user && !currentAccount) {
      logout();
    }
  }, [currentAccount, user]);

  useEffect(() => {}, [currentAccount, user]);

  const logout = () => {
    try {
      logoutContext();
      logoutMutate();
    } catch (error) {
      console.log("🚀 ~ logout ~ error:", error);
    }
  };

  const login = async () => {
    try {
      if (loginProcessingRef.current) {
        return;
      }
      loginProcessingRef.current = true;
      const nonce = Date.now();
      const message = `Welcome to SuiNova! By signing this message, you'll securely authenticate your wallet. Timestamp: ${nonce}`;
      const signature = await signPersonalMessage({
        message: new TextEncoder().encode(message),
      });

      const loginRes = await loginMutate({
        signature: signature.signature,
        nonce,
      });

      loginContext(loginRes);
    } catch (error) {
      console.log("🚀 ~ login ~ error:", error);
    } finally {
      loginProcessingRef.current = false;
    }
  };

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
      label: <div className={CSSClasses.dropdownItem} onClick={onMyProfileClick}>My Profile</div>,
      key: "1",
      icon: userIcon,
    },
    {
      label: <div className={CSSClasses.dropdownItem} onClick={() => disconnect()}>Disconnect Wallet</div>,
      key: "2",
      icon: logoutIcon,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      disabled={!currentAccount?.address}
    >
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
            disabled={isPendingConnect}
            connectText={
              <div ref={ref} className={CSSClasses.connectWalletText}>
                {icon}
                {isPendingConnect ? "Connecting..." : connectText}
              </div>
            }
            {...props}
          />
        )}
      </a>
    </Dropdown>
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
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-wallet-icon",
          },
        ],
      },
      copyIcon: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "nft-builder-copy-icon",
        },
      },
      userIcon: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "nft-builder-user-icon",
        },
      },
      logoutIcon: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "nft-builder-logout-icon",
        },
      },
      onMyProfileClick: {
        type: "eventHandler",
        argTypes: []
      }
    },
  });
}

export default ConnectWalletButton;
