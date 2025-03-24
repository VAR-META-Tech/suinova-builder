import { Cart } from '../types';
import { CheckoutLinesAdd, CheckoutLinesUpdate, CheckoutCreate, CheckoutError, Checkout, CheckoutLineDelete } from '../schema';
export declare type CheckoutQuery = {
    checkout: Checkout;
    errors?: Array<CheckoutError>;
};
export declare type CheckoutPayload = CheckoutLinesAdd | CheckoutLinesUpdate | CheckoutCreate | CheckoutQuery | CheckoutLineDelete;
declare const checkoutToCart: (checkoutPayload?: CheckoutQuery | CheckoutLinesAdd | CheckoutLinesUpdate | CheckoutCreate | CheckoutLineDelete | null | undefined) => Cart | undefined;
export default checkoutToCart;
