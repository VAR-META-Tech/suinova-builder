import type { HookFetcherContext, MutationHookContext } from "@plasmicpkgs/commerce";
import { RemoveItemHook } from "../types/cart";
declare const _default: <T extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>() => (input: {
    id: string;
}) => Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined>;
export default _default;
export declare const handler: {
    fetchOptions: {
        query: string;
    };
    fetcher({ input: { itemId }, options, fetch, }: HookFetcherContext<RemoveItemHook>): Promise<import("../types").Cart | undefined>;
    useHook: ({ fetch }: MutationHookContext<RemoveItemHook>) => <T extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>() => (input: {
        id: string;
    }) => Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined>;
};
