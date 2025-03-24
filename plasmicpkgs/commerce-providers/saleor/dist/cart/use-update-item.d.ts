import type { HookFetcherContext, MutationHookContext } from "@plasmicpkgs/commerce";
import type { LineItem } from "../types/cart";
import type { UpdateItemHook } from "../types/cart";
export declare type UpdateItemActionInput<T = any> = T extends LineItem ? Partial<UpdateItemHook["actionInput"]> : UpdateItemHook["actionInput"];
declare const _default: <T extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>(ctx?: {
    item?: T | undefined;
    wait?: number | undefined;
}) => ((input: UpdateItemActionInput<T>) => Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined>) & {
    clear(): void;
} & {
    flush(): void;
};
export default _default;
export declare const handler: {
    fetchOptions: {
        query: string;
    };
    fetcher({ input: { itemId, item }, options, fetch, }: HookFetcherContext<UpdateItemHook>): Promise<import("../types").Cart | undefined>;
    useHook: ({ fetch }: MutationHookContext<UpdateItemHook>) => <T extends import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined = undefined>(ctx?: {
        item?: T | undefined;
        wait?: number | undefined;
    }) => ((input: UpdateItemActionInput<T>) => Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined>) & {
        clear(): void;
    } & {
        flush(): void;
    };
};
