import type { SearchProductsHook, SWRHook, UseSearch } from "@plasmicpkgs/commerce";
export declare type SearchProductsInput = {
    search?: string;
    categoryId?: number;
    brandId?: number;
    sort?: string;
    locale?: string;
    count?: number;
};
declare const useSearchTyped: UseSearch<typeof handler>;
export default useSearchTyped;
export declare const handler: SWRHook<SearchProductsHook>;
