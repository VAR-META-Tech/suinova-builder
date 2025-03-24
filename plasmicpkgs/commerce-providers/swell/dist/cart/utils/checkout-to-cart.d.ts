import { CartType } from '@plasmicpkgs/commerce';
import { CheckoutLineItemsAddPayload, CheckoutLineItemsRemovePayload, CheckoutLineItemsUpdatePayload } from '../../schema';
export declare type CheckoutPayload = CheckoutLineItemsAddPayload | CheckoutLineItemsUpdatePayload | CheckoutLineItemsRemovePayload;
declare const checkoutToCart: (checkoutPayload?: CheckoutLineItemsAddPayload | CheckoutLineItemsUpdatePayload | CheckoutLineItemsRemovePayload | null | undefined) => CartType.Cart;
export default checkoutToCart;
