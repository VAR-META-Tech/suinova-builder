import { Fetcher } from "@plasmicpkgs/commerce";
import { handler as useAddItem } from "./cart/use-add-item";
import { handler as useCart } from "./cart/use-cart";
import { handler as useProduct } from "./product/use-product";
import { handler as useSearch } from "./product/use-search";
import { handler as useBrands } from "./site/use-brands";
import { handler as useCategories } from "./site/use-categories";
export interface CommercetoolsCredentials {
    projectKey: string;
    clientId: string;
    clientSecret: string;
    region: string;
}
export declare const getCommercetoolsProvider: (creds: CommercetoolsCredentials, locale: string) => {
    locale: string;
    cartCookie: string;
    cart: {
        useCart: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/cart").GetCartHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useAddItem: import("@plasmicpkgs/commerce").MutationHook<import("@plasmicpkgs/commerce/dist/types/cart").AddItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useRemoveItem: import("@plasmicpkgs/commerce").MutationHook<import("@plasmicpkgs/commerce/dist/types/cart").RemoveItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useUpdateItem: import("@plasmicpkgs/commerce").MutationHook<import("@plasmicpkgs/commerce/dist/types/cart").UpdateItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
    };
    fetcher: Fetcher<any, any>;
    products: {
        useSearch: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce").SearchProductsHook<import("@plasmicpkgs/commerce/dist/types/product").ProductTypes>>;
        useProduct: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce").GetProductHook<import("@plasmicpkgs/commerce/dist/types/product").ProductTypes>>;
    };
    site: {
        useCategories: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/site").GetCategoriesHook<import("@plasmicpkgs/commerce/dist/types/site").SiteTypes>>;
        useBrands: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/site").GetBrandsHook<import("@plasmicpkgs/commerce/dist/types/site").SiteTypes>>;
    };
};
export declare type CommercetoolsProvider = {
    locale: string;
    cartCookie: string;
    fetcher: Fetcher;
    cart: {
        useCart: typeof useCart;
        useAddItem: typeof useAddItem;
    };
    products: {
        useSearch: typeof useSearch;
        useProduct: typeof useProduct;
    };
    site: {
        useCategories: typeof useCategories;
        useBrands: typeof useBrands;
    };
};
