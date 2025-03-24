import { CartType } from "@plasmicpkgs/commerce";
export declare const createCart: () => CartType.Cart;
export declare const getCart: (cartId?: string) => CartType.Cart;
export declare const cartUpdate: (newCart: CartType.Cart) => CartType.Cart;
