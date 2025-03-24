import { SWRResponse } from "swr";
import { Provider } from "../commerce";
import { CommerceError } from "./errors";
import type { Fetcher, HookFetcherFn, HookFetcherOptions, HookFetchInput, HookSWRInput, SWRHookSchemaBase, SwrOptions } from "./types";
export declare type ResponseState<Result> = SWRResponse<Result, CommerceError> & {
    isLoading: boolean;
};
export declare type UseData = <H extends SWRHookSchemaBase>(options: {
    fetchOptions: HookFetcherOptions;
    fetcher: HookFetcherFn<H>;
}, input: HookFetchInput | HookSWRInput, fetcherFn: Fetcher, swrOptions?: SwrOptions<H["data"], H["fetcherInput"]>, provider?: Provider) => ResponseState<H["data"]>;
declare const useData: UseData;
export default useData;
