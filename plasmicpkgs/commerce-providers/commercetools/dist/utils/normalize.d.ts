import { Category } from '../types/site';
import { ProductProjection, Category as CommercetoolsCategory, Cart as CommercetoolsCart, Customer, ShoppingList, ProductData } from '@commercetools/platform-sdk';
import { Cart } from '../types/cart';
import { Product } from '../types/product';
export declare const normalizeProduct: (product: ProductProjection | (ProductData & {
    id: string;
}), locale: string) => Product;
export declare const normalizeCart: (cart: CommercetoolsCart, locale: string) => Cart;
export declare const normalizeCategory: (category: CommercetoolsCategory, locale: string) => Category;
export declare const normalizeCustomer: (customer: Customer) => {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string;
};
export declare const normalizeWishlist: (wishlist: ShoppingList) => {
    items: {
        id: string;
        product_id: string;
        variant_id: number;
    }[];
};
