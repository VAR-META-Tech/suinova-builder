import type { SWRHook } from '../utils/types';
import type { GetCartHook } from '../types/cart';
export declare type UseCart<H extends SWRHook<GetCartHook<any>> = SWRHook<GetCartHook>> = ReturnType<H['useHook']>;
declare const useCart: UseCart;
export default useCart;
