/// <reference types="react" />
import { CommerceAPIConfig } from '@plasmicpkgs/commerce';
import { SwellProvider } from './provider';
export type { SwellProvider };
export declare const getCommerceProvider: (storeId: string, publicKey: string) => ({ children, ...props }: import("@plasmicpkgs/commerce").CommerceProviderProps) => import("react").JSX.Element;
export declare const useCommerce: () => import("@plasmicpkgs/commerce").CommerceContextValue<SwellProvider>;
export interface SwellConfig extends CommerceAPIConfig {
    fetch: any;
}
