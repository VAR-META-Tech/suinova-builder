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
import "@mysten/dapp-kit/dist/index.css";
import { Registerable } from "./reg-util";
import { DEFAULT_API_URL } from "./const";

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

export const InternalContext = React.createContext<{
  login: (loginSession: any) => void;
  logout: () => void;
  user: any;
  accessToken: string | null;
  apiUrl?: string;
}>({
  login: () => {},
  logout: () => {},
  user: null,
  accessToken: null,
  apiUrl: "",
});

export const Web3GlobalContext = ({
  children,
  contractPackageId,
  importedCollection,
  apiUrl,
}: React.PropsWithChildren<Web3GlobalContextProps>) => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const [refreshToken, setRefreshToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<any>(null);
  console.log("🚀 ~ user:", user);

  useEffect(() => {
    const accessTokenStorage = localStorage.getItem("accessToken");
    const refreshTokenStorage = localStorage.getItem("refreshToken");
    if (sessionStorage) {
      setAccessToken(accessTokenStorage);
      setRefreshToken(refreshTokenStorage);
    }
  }, []);

  const login = (loginResponse: {
    token: string;
    refreshToken: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any;
  }) => {
    setAccessToken(loginResponse.token);
    setRefreshToken(loginResponse.refreshToken);
    setUser(loginResponse.user);
    localStorage.setItem("accessToken", JSON.stringify(loginResponse.token));
    localStorage.setItem(
      "refreshToken",
      JSON.stringify(loginResponse.refreshToken)
    );
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <GlobalActionsProvider contextName="Web3GlobalContext" actions={{ logout }}>
      <DataProvider
        name="web3GlobalData"
        data={{
          contractPackageId,
          importedCollection,
          accessToken,
          refreshToken,
          user,
          apiUrl: apiUrl || DEFAULT_API_URL,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
            <WalletProvider>
              <InternalContext.Provider
                value={{ login, logout, user, accessToken, apiUrl }}
              >
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
      importedCollection: "string",
      apiUrl: "string",
    },
    providesData: true,
    importPath: "@plasmicpkgs/nft-builder",
    importName: "Web3GlobalContext",
  });
}
