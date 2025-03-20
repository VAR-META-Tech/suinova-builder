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
import React from "react";
import { Registerable } from "./reg-util";
import "@mysten/dapp-kit/dist/index.css";

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();

const initialContext = { init: "initial context" };

const initialAction = () => console.log("initial action");

interface AuthGlobalContextProps {}

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren<AuthGlobalContextProps>) => {
  return (
    <GlobalActionsProvider
      contextName="AuthGlobalContext"
      actions={{ initialAction }}
    >
      <DataProvider name="auth" data={initialContext}>
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
            <WalletProvider>{children}</WalletProvider>
          </SuiClientProvider>
        </QueryClientProvider>
      </DataProvider>
    </GlobalActionsProvider>
  );
};

export function registerGlobalContextProvider(loader?: Registerable) {
  const doRegisterComponent: typeof registerGlobalContext = (...args) =>
    loader
      ? loader.registerGlobalContext(...args)
      : registerGlobalContext(...args);

  doRegisterComponent(GlobalContextProvider, {
    name: "AuthGlobalContext",
    displayName: "Auth Global Context",
    props: {},
    providesData: true,
    importPath: "@plasmicpkgs/nft-builder",
    importName: "AuthGlobalContext",
  });
}
