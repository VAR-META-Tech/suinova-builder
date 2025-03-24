import type { SearchProductsInput } from '../product/use-search';
export declare const getSearchVariables: ({ brandId, search, categoryId, sort, }: SearchProductsInput) => {
    categoryId: string | undefined;
    query: string;
};
export default getSearchVariables;
