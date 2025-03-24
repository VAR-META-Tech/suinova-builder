import type { MutationHook } from "@plasmicpkgs/commerce";
import type { AddItemHook } from "../types/cart";
declare const _default: () => (input: import("@plasmicpkgs/commerce/dist/types/cart").CartItemBody) => import("@plasmicpkgs/commerce/dist/types/cart").Cart | Promise<import("@plasmicpkgs/commerce/dist/types/cart").Cart | undefined> | undefined;
export default _default;
export declare const handler: MutationHook<AddItemHook>;
