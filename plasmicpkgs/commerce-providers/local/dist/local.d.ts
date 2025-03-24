/// <reference types="react" />
export * from "./registerable";
export { localProvider, data };
export type { LocalProvider };
import data from "./data.json";
import { localProvider, LocalProvider } from "./provider";
export declare const CommerceProvider: ({ children, ...props }: import("@plasmicpkgs/commerce").CommerceProviderProps) => import("react").JSX.Element;
export declare const useCommerce: () => import("@plasmicpkgs/commerce").CommerceContextValue<{
    locale: string;
    cartCookie: string;
    fetcher: import("@plasmicpkgs/commerce").Fetcher<any, any>;
    cart: {
        useCart: import("@plasmicpkgs/commerce").SWRHook<any>;
        useAddItem: import("@plasmicpkgs/commerce").MutationHook<any>;
        useUpdateItem: import("@plasmicpkgs/commerce").MutationHook<any>;
        useRemoveItem: import("@plasmicpkgs/commerce").MutationHook<any>;
    };
    products: {
        useSearch: import("@plasmicpkgs/commerce").SWRHook<any>;
        useProduct: import("@plasmicpkgs/commerce").SWRHook<any>;
    };
    site: {
        useCategories: import("@plasmicpkgs/commerce").SWRHook<any>;
        useBrands: import("@plasmicpkgs/commerce").SWRHook<any>;
    };
}>;
