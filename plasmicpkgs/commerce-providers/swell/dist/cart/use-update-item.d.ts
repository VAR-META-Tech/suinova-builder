import type { HookFetcherContext, MutationHookContext } from "@plasmicpkgs/commerce";
import { CartType } from "@plasmicpkgs/commerce";
import { UpdateItemHook } from "../types/cart";
declare const _default: <T extends CartType.LineItem | undefined = undefined>(ctx?: {
    item?: T | undefined;
    wait?: number | undefined;
}) => ((input: (Partial<CartType.CartItemBody> & {
    id: string;
}) | Partial<Partial<CartType.CartItemBody> & {
    id: string;
}>) => Promise<CartType.Cart | null | undefined>) & {
    clear(): void;
} & {
    flush(): void;
};
export default _default;
declare type LineItem = CartType.LineItem;
export declare type UpdateItemActionInput<T = any> = T extends LineItem ? Partial<UpdateItemHook["actionInput"]> : UpdateItemHook["actionInput"];
export declare const handler: {
    fetchOptions: {
        query: string;
        method: string;
    };
    fetcher({ input: { itemId, item }, options, fetch, }: HookFetcherContext<UpdateItemHook>): Promise<CartType.Cart>;
    useHook: ({ fetch }: MutationHookContext<UpdateItemHook>) => <T extends CartType.LineItem | undefined = undefined>(ctx?: {
        item?: T | undefined;
        wait?: number | undefined;
    }) => ((input: UpdateItemActionInput) => Promise<CartType.Cart | null | undefined>) & {
        clear(): void;
    } & {
        flush(): void;
    };
};
