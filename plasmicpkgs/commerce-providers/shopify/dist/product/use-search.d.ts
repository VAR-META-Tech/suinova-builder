import type { SearchProductsHook } from "@plasmicpkgs/commerce";
import { SWRHook, UseSearch } from "@plasmicpkgs/commerce";
declare const useSearchTyped: UseSearch<typeof handler>;
export default useSearchTyped;
export declare const handler: SWRHook<SearchProductsHook>;
