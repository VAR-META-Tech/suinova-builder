import type { HookFetcherContext, MutationHookContext } from "@plasmicpkgs/commerce";
import { CartType } from "@plasmicpkgs/commerce";
declare type Cart = CartType.Cart;
declare type LineItem = CartType.LineItem;
declare type RemoveItemHook = CartType.RemoveItemHook;
export declare type RemoveItemFn<T = any> = T extends LineItem ? (input?: RemoveItemActionInput<T>) => Promise<Cart | null | undefined> : (input: RemoveItemActionInput<T>) => Promise<Cart | null>;
export declare type RemoveItemActionInput<T = any> = T extends LineItem ? Partial<RemoveItemHook["actionInput"]> : RemoveItemHook["actionInput"];
declare const _default: () => (input: {
    id: string;
}) => Promise<CartType.Cart | null | undefined>;
export default _default;
export declare const handler: {
    fetchOptions: {
        query: string;
        method: string;
    };
    fetcher({ input: { itemId }, options, fetch, }: HookFetcherContext<RemoveItemHook>): Promise<CartType.Cart>;
    useHook: ({ fetch }: MutationHookContext<RemoveItemHook>) => () => (input: {
        id: string;
    }) => Promise<CartType.Cart | null | undefined>;
};
