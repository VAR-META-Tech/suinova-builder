import { Fetcher } from "@plasmicpkgs/commerce";
import { handler as useAddItem } from "./cart/use-add-item";
import { handler as useCart } from "./cart/use-cart";
import { handler as useRemoveItem } from "./cart/use-remove-item";
import { handler as useUpdateItem } from "./cart/use-update-item";
import { handler as useProduct } from "./product/use-product";
import { handler as useSearch } from "./product/use-search";
import { handler as useBrands } from "./site/use-brands";
import { handler as useCategories } from "./site/use-categories";
export declare const getShopifyProvider: (storeDomain: string, accessToken: string) => {
    locale: string;
    cartCookie: string;
    cart: {
        useCart: import("@plasmicpkgs/commerce").SWRHook<import("@plasmicpkgs/commerce/dist/types/cart").GetCartHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useAddItem: import("@plasmicpkgs/commerce").MutationHook<import("@plasmicpkgs/commerce/dist/types/cart").AddItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>;
        useUpdateItem: {
            fetchOptions: {
                query: string & import("@graphql-typed-document-node/core").DocumentTypeDecoration<import("./utils/graphql/gen/graphql").EditCartItemsMutation, import("./utils/graphql/gen/graphql").Exact<{
                    cartId: string;
                    lines: import("./utils/graphql/gen/graphql").CartLineUpdateInput | import("./utils/graphql/gen/graphql").CartLineUpdateInput[];
                }>>;
            };
            fetcher({ input: { itemId, item }, options, fetch, }: import("@plasmicpkgs/commerce").HookFetcherContext<import("@plasmicpkgs/commerce/dist/types/cart").UpdateItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>): Promise<import("./shopify-types").ShopifyCart | undefined>;
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
                query: string & import("@graphql-typed-document-node/core").DocumentTypeDecoration<import("./utils/graphql/gen/graphql").RemoveFromCartMutation, import("./utils/graphql/gen/graphql").Exact<{
                    cartId: string;
                    lineIds: string | string[];
                }>>;
            };
            fetcher({ input: { itemId }, options, fetch, }: import("@plasmicpkgs/commerce").HookFetcherContext<import("@plasmicpkgs/commerce/dist/types/cart").RemoveItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>): Promise<import("./shopify-types").ShopifyCart | undefined>;
            useHook: ({ fetch }: import("@plasmicpkgs/commerce").MutationHookContext<import("@plasmicpkgs/commerce/dist/types/cart").RemoveItemHook<import("@plasmicpkgs/commerce/dist/types/cart").CartTypes>>) => <T_1 extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>(ctx?: {
                item?: T_1 | undefined;
            }) => import("./cart/use-remove-item").RemoveItemFn<T_1>;
        };
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
export declare type ShopifyProvider = {
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
