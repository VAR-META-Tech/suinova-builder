import type { HookFetcherFn, SWRHook } from '../utils/types';
import type { SearchProductsHook } from '../types/product';
export declare type UseSearch<H extends SWRHook<SearchProductsHook<any>> = SWRHook<SearchProductsHook>> = ReturnType<H['useHook']>;
export declare const fetcher: HookFetcherFn<SearchProductsHook>;
declare const useSearch: UseSearch;
export default useSearch;
