import type { MutationHook } from "@plasmicpkgs/commerce";
import type { LineItem, UpdateItemHook } from "../types/cart";
export declare type UpdateItemActionInput<T = any> = T extends LineItem ? Partial<UpdateItemHook["actionInput"]> : UpdateItemHook["actionInput"];
declare const _default: (input?: {
    item?: import("@plasmicpkgs/commerce/dist/types/cart").LineItem | undefined;
    wait?: number | undefined;
} | undefined) => (input: Partial<import("@plasmicpkgs/commerce/dist/types/cart").CartItemBody> & {
    id: string;
}) => import("@plasmicpkgs/commerce/dist/types/cart").Cart | Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | null | undefined> | null | undefined;
export default _default;
export declare const handler: MutationHook<UpdateItemHook>;
