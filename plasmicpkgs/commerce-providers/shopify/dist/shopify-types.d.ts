import { CartType } from "@plasmicpkgs/commerce";
export declare type ShopifyCart = CartType.Cart & {
    lineItems: CartType.LineItem[];
    url?: string;
};
