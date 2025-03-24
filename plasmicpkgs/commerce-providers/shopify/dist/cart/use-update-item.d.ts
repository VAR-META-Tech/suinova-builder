import type { HookFetcherContext, MutationHookContext } from "@plasmicpkgs/commerce";
import { CartType } from "@plasmicpkgs/commerce";
import { EditCartItemsMutation } from "../utils/graphql/gen/graphql";
export declare type UpdateItemActionInput<T = any> = T extends CartType.LineItem ? Partial<CartType.UpdateItemHook["actionInput"]> : CartType.UpdateItemHook["actionInput"];
declare const _default: <T extends CartType.LineItem | undefined = undefined>(ctx?: {
    item?: T | undefined;
    wait?: number | undefined;
}) => ((input: UpdateItemActionInput<T>) => Promise<CartType.Cart | null | undefined>) & {
    clear(): void;
} & {
    flush(): void;
};
export default _default;
export declare const handler: {
    fetchOptions: {
        query: string & import("@graphql-typed-document-node/core").DocumentTypeDecoration<EditCartItemsMutation, import("../utils/graphql/gen/graphql").Exact<{
            cartId: string;
            lines: import("../utils/graphql/gen/graphql").CartLineUpdateInput | import("../utils/graphql/gen/graphql").CartLineUpdateInput[];
        }>>;
    };
    fetcher({ input: { itemId, item }, options, fetch, }: HookFetcherContext<CartType.UpdateItemHook>): Promise<import("../shopify-types").ShopifyCart | undefined>;
    useHook: ({ fetch }: MutationHookContext<CartType.UpdateItemHook>) => <T extends CartType.LineItem | undefined = undefined>(ctx?: {
        item?: T | undefined;
        wait?: number | undefined;
    }) => ((input: UpdateItemActionInput<T>) => Promise<CartType.Cart | null | undefined>) & {
        clear(): void;
    } & {
        flush(): void;
    };
};
