import { handler as useCart } from './cart/use-cart';
import { handler as useAddItem } from './cart/use-add-item';
import { handler as useUpdateItem } from './cart/use-update-item';
import { handler as useRemoveItem } from './cart/use-remove-item';
import { handler as useCategories } from './site/use-categories';
import { handler as useBrands } from './site/use-brands';
import { handler as useSearch } from './product/use-search';
import { handler as useProduct } from './product/use-product';
import { Fetcher } from '@plasmicpkgs/commerce';
export declare const getSaleorProvider: (saleorApiUrl: string) => {
    locale: string;
    cartCookie: string;
    fetcher: Fetcher<any, any>;
    cart: {
        useCart: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/cart").GetCartHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useAddItem: import("@plasmicpkgs/commerce").MutationHook<import("@plasmicpkgs/commerce/dist/types/cart").AddItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useUpdateItem: {
            fetchOptions: {
                query: string;
            };
            fetcher({ input: { itemId, item }, options, fetch, }: import("@plasmicpkgs/commerce").HookFetcherContext<import("@plasmicpkgs/commerce/dist/types/cart").UpdateItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>): Promise<import("./types").Cart | undefined>;
            useHook: ({ fetch }: import("@plasmicpkgs/commerce").MutationHookContext<import("@plasmicpkgs/commerce/dist/types/cart").UpdateItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>) => <T extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>(ctx?: {
                item?: T | undefined;
                wait?: number | undefined;
            }) => ((input: import("./cart/use-update-item").UpdateItemActionInput<T>) => Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined>) & {
                clear(): void;
            } & {
                flush(): void;
            };
        };
        useRemoveItem: {
            fetchOptions: {
                query: string;
            };
            fetcher({ input: { itemId }, options, fetch, }: import("@plasmicpkgs/commerce").HookFetcherContext<import("@plasmicpkgs/commerce/dist/types/cart").RemoveItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>): Promise<import("./types").Cart | undefined>;
            useHook: ({ fetch }: import("@plasmicpkgs/commerce").MutationHookContext<import("@plasmicpkgs/commerce/dist/types/cart").RemoveItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>) => <T_1 extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>() => (input: {
                id: string;
            }) => Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined>;
        };
    };
    products: {
        useSearch: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce").SearchProductsHook<import("@plasmicpkgs/commerce/dist/types/product").ProductTypes>>;
        useProduct: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce").GetProductHook<import("@plasmicpkgs/commerce/dist/types/product").ProductTypes>>;
    };
    site: {
        useCategories: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/site").GetCategoriesHook<import("@plasmicpkgs/commerce/dist/types/site").SiteTypes>>;
        useBrands: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/site").GetBrandsHook<import("@plasmicpkgs/commerce/dist/types/site").SiteTypes>>;
    };
};
export declare type SaleorProvider = {
    locale: string;
    cartCookie: string;
    fetcher: Fetcher;
    cart: {
        useCart: typeof useCart;
        useAddItem: typeof useAddItem;
        useUpdateItem: typeof useUpdateItem;
        useRemoveItem: typeof useRemoveItem;
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
