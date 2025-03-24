import type { MutationHook } from '../utils/types';
import type { RemoveItemHook } from '../types/cart';
export declare type UseRemoveItem<H extends MutationHook<RemoveItemHook<any>> = MutationHook<RemoveItemHook>> = ReturnType<H['useHook']>;
declare const useRemoveItem: UseRemoveItem;
export default useRemoveItem;
