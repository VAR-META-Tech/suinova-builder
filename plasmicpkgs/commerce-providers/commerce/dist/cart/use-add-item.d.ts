import type { MutationHook } from '../utils/types';
import type { AddItemHook } from '../types/cart';
export declare type UseAddItem<H extends MutationHook<AddItemHook<any>> = MutationHook<AddItemHook>> = ReturnType<H['useHook']>;
declare const useAddItem: UseAddItem;
export default useAddItem;
