import {
  createNetworkConfig,
  SuiClientProvider,
  useCurrentAccount,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import {
  DataProvider,
  registerGlobalContext,
} from "@plasmicapp/host";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "@mysten/dapp-kit/dist/index.css";
import { Registerable } from "./reg-util";

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
  apiUrl?: string;
}
// interface Web3GlobalContextData extends Web3GlobalContextProps {}


export const Web3GlobalContext = ({
  children,
  contractPackageId,
  importedCollection,
}: React.PropsWithChildren<Web3GlobalContextProps>) => {
  return (
    <DataProvider
      name="web3GlobalData"
      data={{
        contractPackageId,
        importedCollection,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
          <WalletProvider>
            <InnerWalletContext>
              {children}
            </InnerWalletContext>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </DataProvider>
  );
};

export const InnerWalletContext = ({ children }: React.PropsWithChildren<{}>) => {
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
}

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
      apiUrl: "string",
    },
    providesData: true,
    importPath: "@plasmicpkgs/nft-builder",
    importName: "Web3GlobalContext",
  });
}
