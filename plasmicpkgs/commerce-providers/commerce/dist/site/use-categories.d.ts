import type { SWRHook } from '../utils/types';
import { GetCategoriesHook } from '../types/site';
export declare type UseCategories<H extends SWRHook<GetCategoriesHook<any>> = SWRHook<GetCategoriesHook>> = ReturnType<H['useHook']>;
declare const useCategories: UseCategories;
export default useCategories;
