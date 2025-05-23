import {
  createNetworkConfig,
  SuiClientProvider,
  useCurrentAccount,
  useSignAndExecuteTransaction,
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
import { IMintingInfo } from "./type";
import { CONTRACT_METHOD, ENV } from "./const";
import { Transaction } from "@mysten/sui/transactions";
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
  mintingInfo?: IMintingInfo;
}
// interface Web3GlobalContextData extends Web3GlobalContextProps {}

const GlobalActionsConfig = ({ children }: { children: React.ReactNode }) => {
  const web3WalletData = useSelector("web3WalletData");
  const walletAddress = web3WalletData?.walletAddress;
  const { mutateAsync: signAndExecuteTransaction, isPending } =
    useSignAndExecuteTransaction();

  const onListNFT = async (
    collectionType: string,
    nftId: string,
    listPrice: string,
    message: string
  ) => {
    if (!walletAddress) {
      notification.error({
        message: "Please connect your wallet",
      });
      return;
    }
    notification.info({
      message: "Listing NFT...",
    });

    const tx = new Transaction();
    tx.setGasBudget(10000000);

    tx.moveCall({
      target: `${ENV.CONTRACT_PACKAGE_ID}::${ENV.MARKETPLACE_MODULE}::${CONTRACT_METHOD.LIST}`,
      arguments: [
        tx.object(ENV.MARKETPLACE_CAP_ID),
        tx.object(nftId),
        tx.object(listPrice),
      ],
      typeArguments: [collectionType],
    });

    await signAndExecuteTransaction({
      transaction: tx as any,
      chain: ENV.CHAIN as `${string}:${string}`,
    })
      .then(() => {
        notification.success({
          message: message || "List NFT successfully",
        });
      })
      .catch((error) => {
        notification.error({
          message:
            error.message ||
            "List NFT failed due to some network error, please try again",
        });
      });
  };

  const onCancelListing = async (
    collectionType: string,
    nftId: string,
    message: string
  ) => {
    if (!walletAddress) {
      notification.error({
        message: "Please connect your wallet",
      });
      return;
    }

    notification.info({
      message: "Cancelling Listing...",
    });

    const tx = new Transaction();
    tx.setGasBudget(10000000);

    tx.moveCall({
      target: `${ENV.CONTRACT_PACKAGE_ID}::${ENV.MARKETPLACE_MODULE}::${CONTRACT_METHOD.DELIST}`,
      arguments: [
        tx.object(ENV.MARKETPLACE_CAP_ID),
        tx.object(nftId),
      ],
      typeArguments: [collectionType],
    });

    await signAndExecuteTransaction({
      transaction: tx as any,
      chain: ENV.CHAIN as `${string}:${string}`,
    })
      .then(() => {
        notification.success({
          message: message || "Cancel Listing successfully",
        });
      })
      .catch((error) => {
        notification.error({
          message:
            error.message ||
            "Cancel Listing failed due to some network error, please try again",
        });
      });
  };

  const onBuyNFT = async (
    collectionType: string,
    nftId: string,
    royaltyBag: string,
    message: string
  ) => {
    notification.info({
      message: "Buying NFT...",
    });
    // const coins = await client.getCoins({
    //   owner: currentWalletAccount?.address || "",
    //   coinType: "0x2::sui::SUI",
    // });
    // const coinObjectId = coins.data[0]?.coinObjectId;
    // const nftPrice = 1;

    const tx = new Transaction();
    tx.setGasBudget(10000000);

    // Split the coin for payment
    // const [payment] = tx.splitCoins(
    //   tx.object(coinObjectId),
    //   [tx.pure.u64(nftPrice)]
    // );
    tx.moveCall({
      target: `${ENV.CONTRACT_PACKAGE_ID}::${ENV.MARKETPLACE_MODULE}::${CONTRACT_METHOD.BUY}`,
      arguments: [
        tx.object(ENV.MARKETPLACE_CAP_ID),
        tx.object(royaltyBag),
        tx.object(nftId),
        tx.makeMoveVec({
          type: "0x2::sui::SUI", //SUI obj id: 0x83f019e7365c1589d0063adf48c66ef9967c4e7085986f4c4a3b8aad4178f82f
          elements: []
        })
      ],
      typeArguments: [collectionType],
    });

    await signAndExecuteTransaction({
      transaction: tx as any,
      chain: ENV.CHAIN as `${string}:${string}`,
    })
      .then(() => {
        notification.success({
          message: message || "Buy NFT successfully",
        });
      })
      .catch((error) => {
        notification.error({
          message:
            error.message ||
            "Buy NFT failed due to some network error, please try again",
        });
      });
  };

  return (
    <GlobalActionsProvider
      contextName="Web3GlobalContext"
      actions={{ onListNFT, onBuyNFT, onCancelListing }}
    >
      <DataProvider
        name="web3GlobalActionsData"
        data={{
          isTransactionPending: isPending,
        }}
      >
        {children}
      </DataProvider>
    </GlobalActionsProvider>
  );
};

export const Web3GlobalContext = ({
  children,
  contractPackageId,
  importedCollection,
  createdCollection,
  mintingInfo,
}: React.PropsWithChildren<Web3GlobalContextProps>) => {
  return (
    <DataProvider
      name="web3GlobalData"
      data={{
        contractPackageId,
        importedCollection,
        createdCollection,
        mintingInfo,
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
4
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
      mintingInfo: "object",
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
          {
            name: "collectionType",
            type: {
              type: "string",
              defaultValue: "CollectionType",
            },
          },
          {
            name: "nftId",
            type: {
              type: "string",
              defaultValue: "NFT ID",
            },
          },
          {
            name: "listPrice",
            type: {
              type: "string",
              defaultValue: "List Price",
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
          {
            name: "collectionType",
            type: {
              type: "string",
              defaultValue: "CollectionType",
            },
          },
          {
            name: "nftId",
            type: {
              type: "string",
              defaultValue: "NFT ID",
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
          {
            name: "collectionType",
            type: {
              type: "string",
              defaultValue: "CollectionType",
            },
          },
          {
            name: "nftId",
            type: {
              type: "string",
              defaultValue: "NFT ID",
            },
          },
        ],
      },
    },
    providesData: true,
    importPath: "suinova-nft-builder/dist/index.js",
    importName: "Web3GlobalContext",
  });
}
