import type { SearchProductsHook } from "@plasmicpkgs/commerce";
import { SWRHook, UseSearch } from "@plasmicpkgs/commerce";
import { Category } from "../types/site";
export declare type SearchProductsInput = {
    search?: string;
    categoryId?: string;
    brandId?: string;
    sort?: string;
    count?: number;
    includeSubCategories?: boolean;
    categories?: Category[];
};
declare const useSearchTyped: UseSearch<typeof handler>;
export default useSearchTyped;
export declare const handler: SWRHook<SearchProductsHook>;
