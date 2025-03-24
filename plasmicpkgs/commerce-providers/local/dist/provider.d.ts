export declare const localProvider: {
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
};
export declare type LocalProvider = typeof localProvider;
