import type { Product, SiteTypes } from "@plasmicpkgs/commerce";
import type { ShopifyCart } from "../shopify-types";
import { CartFragment, Collection, ProductFragment } from "./graphql/gen/graphql";
export declare function normalizeProduct({ id, title: name, vendor, images, variants, description, handle, priceRange, options, ...rest }: ProductFragment): Product;
export declare function normalizeCart(cart: CartFragment | null | undefined): ShopifyCart | undefined;
export declare function normalizeCategory({ title: name, handle, id, products, image, }: Collection): SiteTypes.Category;
