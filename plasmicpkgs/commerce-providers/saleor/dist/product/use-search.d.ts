import { Product, SWRHook, UseSearch } from "@plasmicpkgs/commerce";
import { SearchProductsHook } from "@plasmicpkgs/commerce";
declare const useSearchTyped: UseSearch<typeof handler>;
export default useSearchTyped;
export declare type SearchProductsInput = {
    search?: string;
    categoryId?: string | number;
    brandId?: string | number;
    sort?: string;
    count?: number;
};
export declare type SearchProductsData = {
    products: Product[];
    found: boolean;
};
export declare const handler: SWRHook<SearchProductsHook>;
