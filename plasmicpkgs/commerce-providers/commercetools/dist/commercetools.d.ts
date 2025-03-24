/// <reference types="react" />
import { CommercetoolsProvider, CommercetoolsCredentials } from './provider';
export type { CommercetoolsProvider };
export declare const useCommerce: () => import("@plasmicpkgs/commerce").CommerceContextValue<CommercetoolsProvider>;
export declare const getCommerceProvider: (creds: CommercetoolsCredentials, locale: string) => ({ children, ...props }: import("@plasmicpkgs/commerce").CommerceProviderProps) => import("react").JSX.Element;
