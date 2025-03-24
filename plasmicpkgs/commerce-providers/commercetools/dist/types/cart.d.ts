import { CartType as Core } from '@plasmicpkgs/commerce';
export declare type SelectedOption = Core.SelectedOption;
export declare type LineItem = Core.LineItem;
export declare type ProductVariant = Core.ProductVariant;
export declare type CartItemBody = Core.CartItemBody;
/**
 * Extend core cart types
 */
export declare type Cart = Core.Cart & {
    lineItems: Core.LineItem[];
    url?: string;
};
export declare type CartTypes = Core.CartTypes;
export declare type CartHooks = Core.CartHooks<CartTypes>;
export declare type GetCartHook = CartHooks['getCart'];
export declare type AddItemHook = CartHooks['addItem'];
export declare type UpdateItemHook = CartHooks['updateItem'];
export declare type RemoveItemHook = CartHooks['removeItem'];
export declare type CartSchema = Core.CartSchema<CartTypes>;
export declare type CartHandlers = Core.CartHandlers<CartTypes>;
export declare type GetCartHandler = CartHandlers['getCart'];
export declare type AddItemHandler = CartHandlers['addItem'];
export declare type UpdateItemHandler = CartHandlers['updateItem'];
export declare type RemoveItemHandler = CartHandlers['removeItem'];
