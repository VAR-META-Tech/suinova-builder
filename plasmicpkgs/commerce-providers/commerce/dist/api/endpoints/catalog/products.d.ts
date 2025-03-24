import type { ProductsSchema } from '../../../types/product';
import type { GetAPISchema } from '../..';
declare const productsEndpoint: GetAPISchema<any, ProductsSchema>['endpoint']['handler'];
export default productsEndpoint;
