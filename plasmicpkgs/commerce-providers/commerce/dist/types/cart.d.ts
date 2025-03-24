import type { Discount, Measurement, Image } from "./common";
export declare type SelectedOption = {
    id?: string;
    name: string;
    value: string;
};
export declare type LineItem = {
    id: string;
    variantId: string;
    productId: string;
    name: string;
    quantity: number;
    discounts: Discount[];
    path: string;
    variant: ProductVariant;
    options?: SelectedOption[];
};
export declare type ProductVariant = {
    id: string;
    sku: string;
    name: string;
    requiresShipping: boolean;
    price: number;
    listPrice: number;
    image?: Image;
    isInStock?: boolean;
    availableForSale?: boolean;
    weight?: Measurement;
    height?: Measurement;
    width?: Measurement;
    depth?: Measurement;
};
export declare type Cart = {
    id: string;
    customerId?: string;
    email?: string;
    createdAt: string;
    currency: {
        code: string;
    };
    taxesIncluded: boolean;
    lineItems: LineItem[];
    lineItemsSubtotalPrice: number;
    subtotalPrice: number;
    totalPrice: number;
    discounts?: Discount[];
};
/**
 * Base cart item body used for cart mutations
 */
export declare type CartItemBody = {
    variantId: string;
    productId?: string;
    quantity?: number;
};
/**
 * Hooks schema
 */
export declare type CartTypes = {
    cart?: Cart;
    item: LineItem;
    itemBody: CartItemBody;
};
export declare type CartHooks<T extends CartTypes = CartTypes> = {
    getCart: GetCartHook<T>;
    addItem: AddItemHook<T>;
    updateItem: UpdateItemHook<T>;
    removeItem: RemoveItemHook<T>;
};
export declare type GetCartHook<T extends CartTypes = CartTypes> = {
    data: T["cart"] | null;
    input: {};
    fetcherInput: {
        cartId?: string;
    };
    swrState: {
        isEmpty: boolean;
    };
};
export declare type AddItemHook<T extends CartTypes = CartTypes> = {
    data: T["cart"];
    input?: T["itemBody"];
    fetcherInput: T["itemBody"];
    body: {
        item: T["itemBody"];
    };
    actionInput: T["itemBody"];
};
export declare type UpdateItemHook<T extends CartTypes = CartTypes> = {
    data: T["cart"] | null;
    input: {
        item?: T["item"];
        wait?: number;
    };
    fetcherInput: {
        itemId: string;
        item: Partial<T["itemBody"]>;
    };
    body: {
        itemId: string;
        item: Partial<T["itemBody"]>;
    };
    actionInput: Partial<T["itemBody"]> & {
        id: string;
    };
};
export declare type RemoveItemHook<T extends CartTypes = CartTypes> = {
    data: T["cart"] | null;
    input: {
        item?: T["item"];
    };
    fetcherInput: {
        itemId: string;
    };
    body: {
        itemId: string;
    };
    actionInput: {
        id: string;
    };
};
/**
 * API Schema
 */
export declare type CartSchema<T extends CartTypes = CartTypes> = {
    endpoint: {
        options: {};
        handlers: CartHandlers<T>;
    };
};
export declare type CartHandlers<T extends CartTypes = CartTypes> = {
    getCart: GetCartHandler<T>;
    addItem: AddItemHandler<T>;
    updateItem: UpdateItemHandler<T>;
    removeItem: RemoveItemHandler<T>;
};
export declare type GetCartHandler<T extends CartTypes = CartTypes> = GetCartHook<T> & {
    body: {
        cartId?: string;
    };
};
export declare type AddItemHandler<T extends CartTypes = CartTypes> = AddItemHook<T> & {
    body: {
        cartId: string;
    };
};
export declare type UpdateItemHandler<T extends CartTypes = CartTypes> = UpdateItemHook<T> & {
    data: T["cart"];
    body: {
        cartId: string;
    };
};
export declare type RemoveItemHandler<T extends CartTypes = CartTypes> = RemoveItemHook<T> & {
    body: {
        cartId: string;
    };
};
