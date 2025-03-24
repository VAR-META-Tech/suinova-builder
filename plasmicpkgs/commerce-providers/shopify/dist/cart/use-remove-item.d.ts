import type { CartType, HookFetcherContext, MutationHookContext } from "@plasmicpkgs/commerce";
import type { ShopifyCart } from "../shopify-types";
import { RemoveFromCartMutation } from "../utils/graphql/gen/graphql";
export declare type RemoveItemFn<T = any> = T extends CartType.LineItem ? (input?: RemoveItemActionInput<T>) => Promise<ShopifyCart | null | undefined> : (input: RemoveItemActionInput<T>) => Promise<ShopifyCart | null>;
export declare type RemoveItemActionInput<T = any> = T extends CartType.LineItem ? Partial<CartType.RemoveItemHook["actionInput"]> : CartType.RemoveItemHook["actionInput"];
declare const _default: <T extends CartType.LineItem | undefined = undefined>(ctx?: {
    item?: T | undefined;
}) => RemoveItemFn<T>;
export default _default;
export declare const handler: {
    fetchOptions: {
        query: string & import("@graphql-typed-document-node/core").DocumentTypeDecoration<RemoveFromCartMutation, import("../utils/graphql/gen/graphql").Exact<{
            cartId: string;
            lineIds: string | string[];
        }>>;
    };
    fetcher({ input: { itemId }, options, fetch, }: HookFetcherContext<CartType.RemoveItemHook>): Promise<ShopifyCart | undefined>;
    useHook: ({ fetch }: MutationHookContext<CartType.RemoveItemHook>) => <T extends CartType.LineItem | undefined = undefined>(ctx?: {
        item?: T | undefined;
    }) => RemoveItemFn<T>;
};
