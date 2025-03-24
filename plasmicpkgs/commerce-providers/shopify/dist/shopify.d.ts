/// <reference types="react" />
import { ShopifyProvider } from './provider';
export type { ShopifyProvider };
export declare const useCommerce: () => import("@plasmicpkgs/commerce").CommerceContextValue<ShopifyProvider>;
export declare const getCommerceProvider: (storeDomain: string, accessToken: string) => ({ children, ...props }: import("@plasmicpkgs/commerce").CommerceProviderProps) => import("react").JSX.Element;
