import type { Cart, SwellCart, SwellProduct } from "../types";
import { Product } from "../types/product";
import { Category, SwellCategoryChildren } from "../types/site";
export declare function normalizeProduct(swellProduct: SwellProduct): Product;
export declare function normalizeCart({ id, account_id, date_created, currency, tax_included_total, items, sub_total, grand_total, discounts, }: SwellCart): Cart;
export declare function normalizeChildren(children: SwellCategoryChildren): string[];
export declare function normalizeCategory({ id, name, slug, products, images, depth, children, parent_id, }: any): Category;
