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
import React, { useEffect } from "react";
import { Registerable } from "./reg-util";
import "@mysten/dapp-kit/dist/index.css";

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();

interface Web3GlobalContextProps {
  contractPackageId?: string;
  importedCollections?: { packageId: string }[];
}
// interface Web3GlobalContextData extends Web3GlobalContextProps {}

export const InternalContext = React.createContext<{
  login: (loginSession: any) => void;
  logout: () => void;
}>({ login: () => {}, logout: () => {} });

export const Web3GlobalContext = ({
  children,
  contractPackageId,
  importedCollections,
}: React.PropsWithChildren<Web3GlobalContextProps>) => {
  const [session, setSession] = React.useState<any>();

  useEffect(() => {
    const sessionStorage = localStorage.getItem("session");
    if (sessionStorage) {
      setSession(sessionStorage);
    }
  });

  const login = (loginSession: any) => {
    setSession(loginSession);
    localStorage.setItem("session", JSON.stringify(loginSession));
  };

  const logout = () => {
    setSession(null);
  };

  return (
    <GlobalActionsProvider contextName="Web3GlobalContext" actions={{ logout }}>
      <DataProvider
        name="web3GlobalData"
        data={{
          contractPackageId,
          importedCollections,
          session: session,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
            <WalletProvider>
              <InternalContext.Provider value={{ login, logout }}>
                {children}
              </InternalContext.Provider>
            </WalletProvider>
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
