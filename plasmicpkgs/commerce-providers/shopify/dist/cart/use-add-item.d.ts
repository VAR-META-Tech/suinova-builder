import type { MutationHook } from "@plasmicpkgs/commerce";
import { CartType } from "@plasmicpkgs/commerce";
declare const _default: () => (input: CartType.CartItemBody) => CartType.Cart | Promise<CartType.Cart | undefined> | undefined;
export default _default;
export declare const handler: MutationHook<CartType.AddItemHook>;
