import { Product } from "@plasmicpkgs/commerce";
import { Product as SaleorProduct, Checkout, Collection } from "../schema";
import { Category } from "../types/site";
import type { Cart } from "../types";
export declare function normalizeProduct(productNode: SaleorProduct): Product;
export declare function normalizeCart(checkout: Checkout): Cart;
export declare const normalizeCategory: ({ name, slug, id, }: Collection) => Category;
