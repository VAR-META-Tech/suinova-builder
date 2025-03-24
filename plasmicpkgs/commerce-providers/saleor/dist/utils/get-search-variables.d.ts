import type { SearchProductsInput } from '../product/use-search';
export declare const getSearchVariables: ({ brandId, search, categoryId, sort, count }: SearchProductsInput) => {
    categoryId: string | number | undefined;
    filter: {
        search: string | undefined;
    };
    sortBy: {
        channel: string;
        field: string;
        direction: string;
    };
    first: number | undefined;
};
export default getSearchVariables;
