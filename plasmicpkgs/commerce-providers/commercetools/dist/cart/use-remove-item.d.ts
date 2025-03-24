import type { MutationHook } from "@plasmicpkgs/commerce";
import type { Cart, LineItem, RemoveItemHook } from "../types/cart";
export declare type RemoveItemFn<T = any> = T extends LineItem ? (input?: RemoveItemActionInput<T>) => Promise<Cart | null | undefined> : (input: RemoveItemActionInput<T>) => Promise<Cart | null>;
export declare type RemoveItemActionInput<T = any> = T extends LineItem ? Partial<RemoveItemHook["actionInput"]> : RemoveItemHook["actionInput"];
declare const _default: (input?: {
    item?: import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined;
} | undefined) => (input: {
    id: string;
}) => import("@plasmicpkgs/commerce/dist/types/cart").Cart | Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined> | null | undefined;
export default _default;
export declare const handler: MutationHook<RemoveItemHook>;
