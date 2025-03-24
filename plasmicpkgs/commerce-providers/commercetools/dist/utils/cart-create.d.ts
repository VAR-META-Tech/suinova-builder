import { Cart } from '@commercetools/platform-sdk';
import { FetcherOptions } from '@plasmicpkgs/commerce';
declare const createCart: (fetch: <T = any, B = Body>(options: FetcherOptions<B>) => Promise<T>) => Promise<Cart | undefined>;
export default createCart;
