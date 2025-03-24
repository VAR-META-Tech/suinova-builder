import { SearchProductsBody } from "@plasmicpkgs/commerce";
export declare const getSearchVariables: ({ brandId, search, categoryId, sort, locale, count, }: SearchProductsBody) => {
    first: number | undefined;
    categoryId: string | number | undefined;
    query: string;
} | {
    first: number | undefined;
    categoryId: string | number | undefined;
    query: string;
} | {
    first: number | undefined;
    locale: string;
    categoryId: string | number | undefined;
    query: string;
};
export default getSearchVariables;
