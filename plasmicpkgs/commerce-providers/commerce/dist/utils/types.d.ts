import type { SWRConfiguration } from 'swr';
import type { CommerceError } from './errors';
import type { ResponseState } from './use-data';
import { Provider } from '../commerce';
/**
 * Returns the properties in T with the properties in type K, overriding properties defined in T
 */
export declare type Override<T, K> = Omit<T, keyof K> & K;
/**
 * Returns the properties in T with the properties in type K changed from optional to required
 */
export declare type PickRequired<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/**
 * Core fetcher added by CommerceProvider
 */
export declare type Fetcher<T = any, B = any> = (options: FetcherOptions<B>) => T | Promise<T>;
export declare type FetcherOptions<Body = any> = {
    url?: string;
    query?: string;
    method?: string;
    variables?: any;
    body?: Body;
};
export declare type HookFetcher<Data, Input = null, Result = any> = (options: HookFetcherOptions | null, input: Input, fetch: <T = Result, Body = any>(options: FetcherOptions<Body>) => Promise<T>) => Data | Promise<Data>;
export declare type HookFetcherFn<H extends HookSchemaBase> = (context: HookFetcherContext<H>) => H['data'] | Promise<H['data']>;
export declare type HookFetcherContext<H extends HookSchemaBase> = {
    options: HookFetcherOptions;
    input: H['fetcherInput'];
    fetch: <T = H['fetchData'] extends {} | null ? H['fetchData'] : any, B = H['body']>(options: FetcherOptions<B>) => Promise<T>;
    provider?: Provider;
};
export declare type HookFetcherOptions = {
    method?: string;
} & ({
    query: string;
    url?: string;
} | {
    query?: string;
    url: string;
});
export declare type HookInputValue = string | number | boolean | undefined;
export declare type HookSWRInput = [string, HookInputValue][];
export declare type HookFetchInput = {
    [k: string]: HookInputValue;
};
export declare type HookFunction<Input extends {
    [k: string]: unknown;
} | undefined, T> = keyof Input extends never ? () => T : Partial<Input> extends Input ? (input?: Input) => T : (input: Input) => T;
export declare type HookSchemaBase = {
    data: any;
    input?: {};
    fetcherInput?: {};
    body?: {};
    fetchData?: any;
};
export declare type SWRHookSchemaBase = HookSchemaBase & {
    swrState?: {};
    mutations?: Record<string, ReturnType<MutationHook<any>['useHook']>>;
};
export declare type MutationSchemaBase = HookSchemaBase & {
    actionInput?: {};
};
/**
 * Generates a SWR hook handler based on the schema of a hook
 */
export declare type SWRHook<H extends SWRHookSchemaBase> = {
    useHook(context: SWRHookContext<H>): HookFunction<H['input'] & {
        swrOptions?: SwrOptions<H['data'], H['fetcherInput']>;
    }, ResponseState<H['data']> & H['swrState'] & H['mutations']>;
    fetchOptions: HookFetcherOptions;
    fetcher?: HookFetcherFn<H>;
};
export declare type SWRHookContext<H extends SWRHookSchemaBase> = {
    useData(context?: {
        input?: HookFetchInput | HookSWRInput;
        swrOptions?: SwrOptions<H['data'], H['fetcherInput']>;
    }): ResponseState<H['data']>;
};
/**
 * Generates a mutation hook handler based on the schema of a hook
 */
export declare type MutationHook<H extends MutationSchemaBase> = {
    useHook(context: MutationHookContext<H>): HookFunction<H['input'], HookFunction<H['actionInput'], H['data'] | Promise<H['data']>>>;
    fetchOptions: HookFetcherOptions;
    fetcher?: HookFetcherFn<H>;
};
export declare type MutationHookContext<H extends MutationSchemaBase> = {
    fetch: keyof H['fetcherInput'] extends never ? () => H['data'] | Promise<H['data']> : Partial<H['fetcherInput']> extends H['fetcherInput'] ? (context?: {
        input?: H['fetcherInput'];
    }) => H['data'] | Promise<H['data']> : (context: {
        input: H['fetcherInput'];
    }) => H['data'] | Promise<H['data']>;
};
export declare type SwrOptions<Data, Input = null, Result = any> = SWRConfiguration<Data, CommerceError, HookFetcher<Data, Input, Result>>;
export declare type CommerceExtraFeatures = {
    includeSubCategories?: boolean;
};
