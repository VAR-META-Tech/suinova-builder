import { FetcherError } from '@plasmicpkgs/commerce';
export declare function getError(errors: any[], status: number): FetcherError;
export declare function getAsyncError(res: Response): Promise<FetcherError>;
declare const handleFetchResponse: (res: Response) => Promise<any>;
export default handleFetchResponse;
