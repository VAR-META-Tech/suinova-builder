export declare const addToCartMutation: import("../graphql/gen/graphql").TypedDocumentString<import("../graphql/gen/graphql").AddToCartMutation, import("../graphql/gen/graphql").Exact<{
    cartId: string;
    lines: import("../graphql/gen/graphql").CartLineInput | import("../graphql/gen/graphql").CartLineInput[];
}>>;
export declare const createCartMutation: import("../graphql/gen/graphql").TypedDocumentString<import("../graphql/gen/graphql").CreateCartMutation, import("../graphql/gen/graphql").Exact<{
    lines?: import("../graphql/gen/graphql").CartLineInput | import("../graphql/gen/graphql").CartLineInput[] | null | undefined;
}>>;
export declare const editCartItemsMutation: import("../graphql/gen/graphql").TypedDocumentString<import("../graphql/gen/graphql").EditCartItemsMutation, import("../graphql/gen/graphql").Exact<{
    cartId: string;
    lines: import("../graphql/gen/graphql").CartLineUpdateInput | import("../graphql/gen/graphql").CartLineUpdateInput[];
}>>;
export declare const removeFromCartMutation: import("../graphql/gen/graphql").TypedDocumentString<import("../graphql/gen/graphql").RemoveFromCartMutation, import("../graphql/gen/graphql").Exact<{
    cartId: string;
    lineIds: string | string[];
}>>;
