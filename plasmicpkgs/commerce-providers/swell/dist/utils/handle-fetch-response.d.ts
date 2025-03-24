declare type SwellFetchResponse = {
    error: {
        message: string;
        code?: string;
    };
};
declare const handleFetchResponse: (res: SwellFetchResponse) => Promise<SwellFetchResponse | null>;
export default handleFetchResponse;
