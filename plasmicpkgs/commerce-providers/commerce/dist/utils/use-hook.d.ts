import { Provider } from '../commerce';
import type { MutationHook, PickRequired, SWRHook } from './types';
export declare function useFetcher(): import("./types").Fetcher<any, any>;
export declare function useProvider(): Provider;
export declare function useHook<P extends Provider, H extends MutationHook<any> | SWRHook<any>>(fn: (provider: P) => H): H;
export declare function useSWRHook<H extends SWRHook<any>>(hook: PickRequired<H, 'fetcher'>): (input?: any) => any;
export declare function useMutationHook<H extends MutationHook<any>>(hook: PickRequired<H, 'fetcher'>): (input?: any) => (input?: any) => any;
