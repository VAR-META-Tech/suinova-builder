import {
  createNetworkConfig,
  SuiClientProvider,
  useCurrentAccount,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import {
  DataProvider,
  GlobalActionsProvider,
  registerGlobalContext,
  useSelector,
} from "@plasmicapp/host";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "@mysten/dapp-kit/dist/index.css";
import { Registerable } from "./reg-util";
import { notification } from "antd";

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
  testnet: { url: getFullnodeUrl("testnet") },
});
const queryClient = new QueryClient();

interface Web3GlobalContextProps {
  contractPackageId?: string;
  importedCollection?: string;
  createdCollection?: string;
  apiUrl?: string;
}
// interface Web3GlobalContextData extends Web3GlobalContextProps {}

const GlobalActionsConfig = ({ children }: { children: React.ReactNode }) => {
  const web3WalletData = useSelector("web3WalletData");
  const walletAddress = web3WalletData?.walletAddress;

  const onListNFT = async (message: string) => {
    if (!walletAddress) {
      notification.error({
        message: "Please connect your wallet",
      });
      return;
    }

    return await new Promise((resolve) => {
      setTimeout(() => {
        notification.success({
          message: message || "List NFT successfully",
        });
        resolve(true);
      }, 1000);
    });
  };

  const onBuyNFT = async (message: string) => {
    if (!walletAddress) {
      notification.error({
        message: "Please connect your wallet",
      });
      return;
    }

    return await new Promise((resolve) => {
      setTimeout(() => {
        notification.success({
          message: message || "Buy NFT successfully",
        });
        resolve(true);
      }, 1000);
    });
  };

  const onCancelListing = async (message: string) => {
    if (!walletAddress) {
      notification.error({
        message: "Please connect your wallet",
      });
      return;
    }

    return await new Promise((resolve) => {
      setTimeout(() => {
        notification.success({
          message: message || "Cancel Listing successfully",
        });
        resolve(true);
      }, 1000);
    });
  };

  return (
    <GlobalActionsProvider
      contextName="Web3GlobalContext"
      actions={{ onListNFT, onBuyNFT, onCancelListing }}
    >
      {children}
    </GlobalActionsProvider>
  );
};

export const Web3GlobalContext = ({
  children,
  contractPackageId,
  importedCollection,
  createdCollection,
}: React.PropsWithChildren<Web3GlobalContextProps>) => {
  return (
    <DataProvider
      name="web3GlobalData"
      data={{
        contractPackageId,
        importedCollection,
        createdCollection,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
          <WalletProvider>
            <InnerWalletContext>
              <GlobalActionsConfig>{children}</GlobalActionsConfig>
            </InnerWalletContext>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </DataProvider>
  );
};

export const InnerWalletContext = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const account = useCurrentAccount();

  return (
    <DataProvider
      name="web3WalletData"
      data={{
        walletAddress: account?.address || "",
      }}
    >
      {children}
    </DataProvider>
  );
};

export function registerWeb3Provider(loader?: Registerable) {
  const doRegisterComponent: typeof registerGlobalContext = (...args) =>
    loader
      ? loader.registerGlobalContext(...args)
      : registerGlobalContext(...args);

  doRegisterComponent(Web3GlobalContext, {
    name: "Web3GlobalContext",
    displayName: "Web3GlobalContext",
    props: {
      contractPackageId: "string",
      importedCollection: "string",
      createdCollection: "string",
      apiUrl: "string",
    },
    globalActions: {
      onListNFT: {
        displayName: "List NFT",
        parameters: [
          {
            name: "message",
            type: {
              type: "string",
              defaultValue: "List NFT successfully",
            },
          },
        ],
      },
      onBuyNFT: {
        displayName: "Buy NFT",
        parameters: [
          {
            name: "message",
            type: {
              type: "string",
              defaultValue: "Buy NFT successfully",
            },
          },
        ],
      },
      onCancelListing: {
        displayName: "Cancel Listing",
        parameters: [
          {
            name: "message",
            type: {
              type: "string",
              defaultValue: "Cancel Listing successfully",
            },
          },
        ],
      },
    },
    providesData: true,
    importPath: "/dist/index.js",
    importName: "Web3GlobalContext",
  });
}
