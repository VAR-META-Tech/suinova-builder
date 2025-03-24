/// <reference types="react" />
import { SaleorProvider } from "./provider";
export type { SaleorProvider };
export declare const useCommerce: () => import("@plasmicpkgs/commerce").CommerceContextValue<SaleorProvider>;
export declare const getCommerceProvider: (saleorApiUrl: string) => ({ children, ...props }: import("@plasmicpkgs/commerce").CommerceProviderProps) => import("react").JSX.Element;
