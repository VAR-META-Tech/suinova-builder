import React, { ReactNode, MutableRefObject } from 'react';
import type { Product, Cart, Site } from './types';
import type { Fetcher, SWRHook, MutationHook, CommerceExtraFeatures } from './utils/types';
export declare type Provider = CommerceConfig & {
    fetcher: Fetcher;
    cart?: {
        useCart?: SWRHook<Cart.GetCartHook>;
        useAddItem?: MutationHook<Cart.AddItemHook>;
        useUpdateItem?: MutationHook<Cart.UpdateItemHook>;
        useRemoveItem?: MutationHook<Cart.RemoveItemHook>;
    };
    products?: {
        useSearch?: SWRHook<Product.SearchProductsHook>;
        useProduct?: SWRHook<Product.GetProductHook>;
    };
    site?: {
        useCategories?: SWRHook<Site.GetCategoriesHook>;
        useBrands?: SWRHook<Site.GetBrandsHook>;
    };
    extraFeatures?: CommerceExtraFeatures;
};
export declare type CommerceConfig = {
    locale: string;
    cartCookie: string;
};
export declare type CommerceContextValue<P extends Provider> = {
    providerRef: MutableRefObject<P>;
    fetcherRef: MutableRefObject<Fetcher>;
} & CommerceConfig;
export declare type CommerceProps<P extends Provider> = {
    children?: ReactNode;
    provider: P;
};
/**
 * These are the properties every provider should allow when implementing
 * the core commerce provider
 */
export declare type CommerceProviderProps = {
    children?: ReactNode;
} & Partial<CommerceConfig>;
export declare function CoreCommerceProvider<P extends Provider>({ provider, children, }: CommerceProps<P>): React.JSX.Element;
export declare function getCommerceProvider<P extends Provider>(provider: P): ({ children, ...props }: CommerceProviderProps) => React.JSX.Element;
export declare function useCommerce<P extends Provider>(): CommerceContextValue<P>;
