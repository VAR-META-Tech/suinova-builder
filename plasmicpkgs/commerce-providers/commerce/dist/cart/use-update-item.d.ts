import type { MutationHook } from '../utils/types';
import type { UpdateItemHook } from '../types/cart';
export declare type UseUpdateItem<H extends MutationHook<UpdateItemHook<any>> = MutationHook<UpdateItemHook>> = ReturnType<H['useHook']>;
declare const useUpdateItem: UseUpdateItem;
export default useUpdateItem;
