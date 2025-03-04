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
import { ApiUser, UserId } from "@/wab/shared/ApiSchema";
import { mkUuid } from "@/wab/shared/common";
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

      const signMessageResult = await signMessage({
        message: new TextEncoder().encode(
          "Please sign this to login to this App"
        ),
      });

      // const res = await nonAuthCtx.api.loginWithWallet({
      //   signature: signMessageResult.signature,
      //   appInfo,
      // });
      // console.log("🚀 ~ connect ~ res:", res);

      notification.success({
        message: "Connected wallet successfully",
      });

      // if (res.status) {
      //   setSelfInfo(res.user);
      // } else {
      //   if (res.reason === "IncorrectLoginError") {
      //     setFormFeedback({
      //       type: "error",
      //       content: "That email and password combination is incorrect.",
      //     });
      //   } else if (res.reason === "WeakPasswordError") {
      //     setFormFeedback({
      //       type: "error",
      //       content: "Please try a stronger password.",
      //     });
      //   } else if (res.reason === "PwnedPasswordError") {
      //     setFormFeedback({
      //       type: "error",
      //       content:
      //         "Password is a known leaked password. Please try another password.",
      //     });
      //   } else if (res.reason === "BadEmailError") {
      //     setFormFeedback({
      //       type: "error",
      //       content: "Please use a valid email address.",
      //     });
      //   } else if (res.reason === "MissingFieldsError") {
      //     setFormFeedback({
      //       type: "error",
      //       content: "Please fill in all fields.",
      //     });
      //   } else if (res.reason === "EmailSent") {
      //     setSelfInfo(
      //       createFakeUser(
      //         userCreate.email,
      //         userCreate.firstName,
      //         userCreate.lastName
      //       ),
      //       false
      //     );
      //   } else {
      //     setFormFeedback({
      //       type: "error",
      //       content: "Unexpected error occurred logging in.",
      //     });
      //   }
      // }
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
    onLoggedIn: (login) => {
      onLoggedIn();
      if (login) {
        appCtx.router.routeTo(nextPath);
      } else {
        appCtx.router.routeTo(
          UU.survey.fill(
            {},
            {
              continueTo: U.emailVerification({}),
            }
          )
        );
      }
    },
  });

  return (
    <div className="ConnectWallet__Container">
      <div className="ConnectWallet__Card">
        <div className="ConnectWallet__CardHeader">
          <img className="ConnectWallet__Logo" src={AppLogo}></img>
          <div className="ConnectWallet__Title">Connect Wallet</div>
          <div className="ConnectWallet__Subtitle">
            Choose your wallet to sign in{" "}
            <span className="ConnectWallet__SubtitleHighlight">SuiNova</span>
          </div>
        </div>
        <div className="ConnectWallet__Wallets">
          {SUPPORTED_WALLETS.map((item) => (
            <div
              className="ConnectWallet__WalletItem"
              onClick={() => connect(item)}
            >
              <img src={item.icon} />
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

function createFakeUser(
  email: string,
  firstName: string,
  lastName: string
): ApiUser {
  return {
    id: mkUuid() as UserId,
    email: email,
    firstName: firstName,
    lastName: lastName,
    avatarUrl: null,
    needsIntroSplash: false,
    extraData: null,
    needsSurvey: true,
    waitingEmailVerification: true,
    createdAt: Date.now().toLocaleString(),
    updatedAt: Date.now().toLocaleString(),
    deletedAt: null,
    createdById: null,
    updatedById: null,
    deletedById: null,
    isFake: true,
  };
}

export type Feedback = { type: "error" | "success"; content: React.ReactNode };
