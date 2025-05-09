import * as React from "react";
import "@/wab/client/components/pages/ConnectWallet.sass";
import AppLogo from "@/wab/client/assets/suinova-logo.svg";
import { useNonAuthCtx } from "@/wab/client/app-ctx";
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import { useEffect, useState } from "react";
import { ApiUser, UserProfileResponse } from "@/wab/shared/ApiSchema";
import { U, UU, isPlasmicPath } from "@/wab/client/cli-routes";
import {
  useSignPersonalMessage,
  ConnectButton,
  useCurrentAccount,
  useCurrentWallet,
} from "@mysten/dapp-kit";
import { notification } from "antd";
import "@mysten/dapp-kit/dist/index.css";
import { Redirect } from "react-router";

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
  const { isConnected, isConnecting } = useCurrentWallet();
  const account = useCurrentAccount();

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

  function setSelfInfo(
    user: ApiUser,
    profile: UserProfileResponse,
    login = true
  ) {
    setTimeout(() => {
      appCtx.selfInfo = user;
      appCtx.profileInfo = profile;
      onLoggedIn(login);
    });
  }

  function clearError() {
    setFormFeedback(undefined);
    setOauthFeedback(undefined);
  }

  useEffect(() => {
    if (isConnected && account?.address) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      connect();
    }
  }, [isConnected, account?.address]);

  async function connect() {
    try {
      await nonAuthCtx.api.refreshCsrfToken();

      const nonce = Date.now();
      const message = `Welcome to SuiNova! By signing this message, you'll securely authenticate your wallet. Timestamp: ${nonce}`;
      const signMessageResult = await signMessage({
        message: new TextEncoder().encode(message),
      });

      const res = await nonAuthCtx.api.loginWithWallet({
        signature: signMessageResult.signature,
        address: account!.address,
        nonce: nonce.toString(),
        appInfo,
      });
      if (res.status) {
        const profileRes = await nonAuthCtx.api.getUserProfile();
        setSelfInfo(res.user, profileRes);
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
    isPendingConnect: isPendingSignMessage || isConnecting,
  };
};

function ConnectWallet({ onLoggedIn }: ConnectWalletProps) {
  const { appCtx, nextPath } = useConnectWallet({
    onLoggedIn: () => {
      onLoggedIn();
      appCtx.router.routeTo(UU.allProjects.fill({}));
    },
  });
  return appCtx.selfInfo ? (
    <Redirect to={nextPath === "/" ? UU.allProjects.pattern : nextPath} />
  ) : (
    <div className="ConnectWallet__Container">
      <div className="ConnectWallet__Card">
        <div className="ConnectWallet__CardHeader">
          <img src={AppLogo} width={60} />
          <div className="ConnectWallet__Title">Connect Wallet</div>
          <div className="ConnectWallet__Subtitle">
            Connect your wallet to sign in{" "}
            <span className="ConnectWallet__SubtitleHighlight">SuiNova</span>
          </div>
        </div>
        <ConnectButton
          style={{
            backgroundColor: "#2978D1",
            color: "white",
            paddingTop: 8,
            paddingBottom: 8,
            paddingRight: 16,
            paddingLeft: 16,
          }}
        >
          Connect Wallet
        </ConnectButton>
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
