import type { SWRHook } from '../utils/types';
import type { GetProductHook } from '../types/product';
export declare type UseProduct<H extends SWRHook<GetProductHook<any>> = SWRHook<GetProductHook>> = ReturnType<H['useHook']>;
declare const useProduct: UseProduct;
export default useProduct;
