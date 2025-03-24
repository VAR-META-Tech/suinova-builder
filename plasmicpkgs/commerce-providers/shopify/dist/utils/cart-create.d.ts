import { FetcherOptions } from "@plasmicpkgs/commerce";
import { CartLineInput } from "./graphql/gen/graphql";
export declare const cartCreate: (fetch: <T = any, B = Body>(options: FetcherOptions<B>) => Promise<T>, lines: CartLineInput[]) => Promise<import("../shopify-types").ShopifyCart | undefined>;
