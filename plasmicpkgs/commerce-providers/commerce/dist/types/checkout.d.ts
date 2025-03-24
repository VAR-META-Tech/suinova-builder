import type { UseSubmitCheckout } from '../checkout/use-submit-checkout';
import type { Address, AddressFields } from './customer/address';
import type { Card, CardFields } from './customer/card';
export declare type Checkout = any;
export declare type CheckoutTypes = {
    card?: Card | CardFields;
    address?: Address | AddressFields;
    checkout?: Checkout;
    hasPayment?: boolean;
    hasShipping?: boolean;
};
export declare type SubmitCheckoutHook<T extends CheckoutTypes = CheckoutTypes> = {
    data: T;
    input?: T;
    fetcherInput: T;
    body: {
        item: T;
    };
    actionInput: T;
};
export declare type GetCheckoutHook<T extends CheckoutTypes = CheckoutTypes> = {
    data: T['checkout'] | null;
    input: {};
    fetcherInput: {
        cartId?: string;
    };
    swrState: {
        isEmpty: boolean;
    };
    mutations: {
        submit: UseSubmitCheckout;
    };
};
export declare type CheckoutHooks<T extends CheckoutTypes = CheckoutTypes> = {
    submitCheckout?: SubmitCheckoutHook<T>;
    getCheckout: GetCheckoutHook<T>;
};
export declare type GetCheckoutHandler<T extends CheckoutTypes = CheckoutTypes> = GetCheckoutHook<T> & {
    body: {
        cartId: string;
    };
};
export declare type SubmitCheckoutHandler<T extends CheckoutTypes = CheckoutTypes> = SubmitCheckoutHook<T> & {
    body: {
        cartId: string;
    };
};
export declare type CheckoutHandlers<T extends CheckoutTypes = CheckoutTypes> = {
    getCheckout: GetCheckoutHandler<T>;
    submitCheckout?: SubmitCheckoutHandler<T>;
};
export declare type CheckoutSchema<T extends CheckoutTypes = CheckoutTypes> = {
    endpoint: {
        options: {};
        handlers: CheckoutHandlers<T>;
    };
};
