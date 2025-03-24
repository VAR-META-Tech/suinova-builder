import type { SWRHook } from '../utils/types';
import { GetBrandsHook } from '../types/site';
export declare type UseBrands<H extends SWRHook<GetBrandsHook<any>> = SWRHook<GetBrandsHook>> = ReturnType<H['useHook']>;
declare const useBrands: UseBrands;
export default useBrands;
