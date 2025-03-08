import { ChevronRight } from "@/wab/gen/svg-icons";
import * as React from "react";
import "@/wab/client/components/pages/ConnectWallet.sass";
import SuiWalletIcon from "@/wab/client/assets/sui-icon.svg";
import MartianIcon from "@/wab/client/assets/martian-icon.svg";
import SuftIcon from "@/wab/client/assets/suft-icon.svg";
import OKXIcon from "@/wab/client/assets/okx-icon.svg";
import SuietIcon from "@/wab/client/assets/suiet-icon.svg";
import AppLogo from "@/wab/client/assets/logo.png";
import { useNonAuthCtx } from "@/wab/client/app-ctx";
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import { useState } from "react";
import { ApiUser } from "@/wab/shared/ApiSchema";
import { U, UU, isPlasmicPath } from "@/wab/client/cli-routes";
import {
  useWallets,
  useConnectWallet as useConnectWalletSui,
  useSignPersonalMessage,
} from "@mysten/dapp-kit";
import { notification } from "antd";

type SupportedWallet = {
  name: string;
  originalName: string;
  icon: string;
  installURl: string;
};

const SUPPORTED_WALLETS: SupportedWallet[] = [
  {
    name: "Sui Wallet",
    originalName: "Sui Wallet",
    icon: SuiWalletIcon,
    installURl:
      "https://chromewebstore.google.com/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil",
  },
  {
    name: "Martian",
    originalName: "Martian Sui Wallet",
    icon: MartianIcon,
    installURl:
      "https://chromewebstore.google.com/detail/martian-aptos-sui-wallet/efbglgofoippbgcjepnhiblaibcnclgk",
  },
  {
    name: "Suft Wallet",
    originalName: "Surf Wallet",
    icon: SuftIcon,
    installURl:
      "https://chromewebstore.google.com/detail/surf-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen?hl=en",
  },
  {
    name: "OKX Wallet",
    originalName: "OKX Wallet",
    icon: OKXIcon,
    installURl:
      "https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
  },
  {
    name: "Suiet Wallet",
    originalName: "",
    icon: SuietIcon,
    installURl:
      "https://chromewebstore.google.com/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd",
  },
];

interface ConnectWalletProps {
  onLoggedIn: () => void;
}

const useConnectWallet = ({
  onLoggedIn,
  appInfo,
}: {
  onLoggedIn: (login: boolean) => void;
  appInfo?: {
    appName: string;
    authorizationPath: string;
  };
}) => {
  const nonAuthCtx = useNonAuthCtx();
  const appCtx = useAppCtx();
  const wallets = useWallets();

  const { mutateAsync: connectWallet, isPending: isPendingConnectWallet } =
    useConnectWalletSui();
  const { mutateAsync: signMessage, isPending: isPendingSignMessage } =
    useSignPersonalMessage();

  const [currentPassword, setCurrentPassword] = useState("");
  const [oauthFeedback, setOauthFeedback] = useState<undefined | Feedback>(
    undefined
  );
  const [formFeedback, setFormFeedback] = useState<undefined | Feedback>(
    undefined
  );
  const nextPath = getNextPath();

  function setSelfInfo(user: ApiUser, login = true) {
    setTimeout(() => {
      appCtx.selfInfo = user;
      onLoggedIn(login);
    });
  }

  function clearError() {
    setFormFeedback(undefined);
    setOauthFeedback(undefined);
  }

  async function connect(wallet: SupportedWallet) {
    const selectedWallet = wallets.find(
      (item) => item.name === wallet.originalName
    );

    if (!selectedWallet) {
      window.open(wallet.installURl, "_blank");
      return;
    }

    try {
      await nonAuthCtx.api.refreshCsrfToken();

      await connectWallet({
        wallet: selectedWallet,
      });

      const nonce = Date.now();
      const message = `Welcome to SuiNova! By signing this message, you'll securely authenticate your wallet. Timestamp: ${nonce}`;
      const signMessageResult = await signMessage({
        message: new TextEncoder().encode(message),
      });

      const res = await nonAuthCtx.api.loginWithWallet({
        signature: signMessageResult.signature,
        address: selectedWallet.accounts[0].address,
        nonce: nonce.toString(),
        appInfo,
      });
      if (res.status) {
        setSelfInfo(res.user);
        notification.success({
          message: "Connected wallet successfully",
        });
      } else {
        setFormFeedback({
          type: "error",
          content: "Unexpected error occurred logging in.",
        });
      }
    } catch (err) {
      setFormFeedback({
        type: "error",
        content: "Unexpected error occurred logging in.",
      });
      throw err;
    }
  }

  return {
    nonAuthCtx,
    appCtx,
    currentPassword,
    setCurrentPassword,
    oauthFeedback,
    setOauthFeedback,
    formFeedback,
    setFormFeedback,
    nextPath,
    setSelfInfo,
    clearError,
    connect,
    isPendingConnect: isPendingConnectWallet || isPendingSignMessage,
  };
};

function ConnectWallet({ onLoggedIn }: ConnectWalletProps) {
  const { connect, appCtx, nextPath } = useConnectWallet({
    onLoggedIn: () => {
      onLoggedIn();
      appCtx.router.routeTo(UU.allProjects.fill({}));
    },
  });

  return (
    <div className="ConnectWallet__Container">
      <div className="ConnectWallet__Card">
        <div className="ConnectWallet__CardHeader">
          <img
            width={64}
            height={60}
            className="ConnectWallet__Logo"
            src={AppLogo}
          ></img>
          <div className="ConnectWallet__Title">Connect Wallet</div>
          <div className="ConnectWallet__Subtitle">
            Choose your wallet to sign in{" "}
            <span className="ConnectWallet__SubtitleHighlight">SuiNova</span>
          </div>
        </div>
        <div className="ConnectWallet__Wallets">
          {SUPPORTED_WALLETS.map((item) => (
            <div
              key={item.originalName}
              className="ConnectWallet__WalletItem"
              onClick={() => connect(item)}
            >
              <img width={30} height={30} src={item.icon} />
              <div className="ConnectWallet__WalletItemLabel">{item.name}</div>
              {<ChevronRight />}
            </div>
          ))}
        </div>
        <div className="ConnectWallet__MoreWallet">More wallet options</div>
      </div>
    </div>
  );
}

export default ConnectWallet;

function getNextPath() {
  const continueToPath = new URLSearchParams(location.search).get("continueTo");
  return continueToPath && isPlasmicPath(continueToPath)
    ? continueToPath
    : U.dashboard({});
}

export type Feedback = { type: "error" | "success"; content: React.ReactNode };
