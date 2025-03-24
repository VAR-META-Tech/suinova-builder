import { SwellConfig } from '..';
import { Category } from '../types/site';
declare const getCategories: (config: SwellConfig) => Promise<Category[]>;
export default getCategories;
