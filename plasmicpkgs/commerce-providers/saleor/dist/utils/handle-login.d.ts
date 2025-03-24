import { FetcherOptions } from '@plasmicpkgs/commerce';
import { CreateToken, MutationTokenCreateArgs } from '../schema';
declare const handleLogin: (data: CreateToken) => string | null | undefined;
export declare const handleAutomaticLogin: (fetch: <T = any, B = Body>(options: FetcherOptions<B>) => Promise<T>, input: MutationTokenCreateArgs) => Promise<void>;
export default handleLogin;
