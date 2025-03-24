import type { CartType as CoreCart } from '@plasmicpkgs/commerce';
import { CheckoutLine } from './schema';
export declare type SaleorCheckout = {
    id: string;
    webUrl: string;
    lineItems: CheckoutLine[];
};
export declare type Cart = CoreCart.Cart & {
    lineItems: LineItem[];
};
export interface LineItem extends CoreCart.LineItem {
    options?: any[];
}
/**
 * Cart mutations
 */
export declare type OptionSelections = {
    option_id: number;
    option_value: number | string;
};
export declare type CartItemBody = CoreCart.CartItemBody & {
    productId: string;
    optionSelections?: OptionSelections;
};
