import type { CartSchema } from '../../types/cart';
import type { GetAPISchema } from '..';
declare const cartEndpoint: GetAPISchema<any, CartSchema<any>>['endpoint']['handler'];
export default cartEndpoint;
