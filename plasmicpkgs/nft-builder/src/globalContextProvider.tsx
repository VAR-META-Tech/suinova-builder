import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import {
  DataProvider,
  GlobalActionsProvider,
  registerGlobalContext,
} from "@plasmicapp/host";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Registerable } from "./reg-util";
import "@mysten/dapp-kit/dist/index.css";

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();

interface Web3GlobalContextProps {
  contractPackageId: string;
  importedCollections: { packageId: string }[];
}
interface Web3GlobalContextData extends Web3GlobalContextProps {}

export const Web3GlobalContext = ({
  children,
  ...rest
}: React.PropsWithChildren<Web3GlobalContextProps>) => {
  const [data, setData] = useState<Web3GlobalContextData>();

  useEffect(() => {
    setData(rest);
  }, [rest]);

  const initialAction = () => console.log("initial action");

  return (
    <GlobalActionsProvider
      contextName="Web3GlobalContext"
      actions={{ initialAction }}
    >
      <DataProvider name="web3GlobalData" data={data}>
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
            <WalletProvider>{children}</WalletProvider>
          </SuiClientProvider>
        </QueryClientProvider>
      </DataProvider>
    </GlobalActionsProvider>
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
      importedCollections: {
        type: "array",
        itemType: { type: "object" },
      },
    },
    providesData: true,
    importPath: "@plasmicpkgs/nft-builder",
    importName: "Web3GlobalContext",
  });
}
