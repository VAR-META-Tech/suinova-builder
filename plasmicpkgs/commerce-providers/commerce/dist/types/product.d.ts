import { Category } from "./site";
export declare type ProductImage = {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
};
export declare type ProductPrice = {
    value: number;
    currencyCode?: "USD" | "EUR" | "ARS" | string;
    retailPrice?: number;
    salePrice?: number;
    listPrice?: number;
    extendedSalePrice?: number;
    extendedListPrice?: number;
};
export declare type ProductOption = {
    __typename?: "MultipleChoiceOption";
    id: string;
    displayName: string;
    values: ProductOptionValues[];
};
export declare type ProductOptionValues = {
    label: string;
    hexColors?: string[];
};
export declare type ProductVariant = {
    id: string | number;
    options: ProductOption[];
    availableForSale?: boolean;
    name: string;
    price?: number;
};
export declare type Product = {
    id: string;
    name: string;
    description: string;
    descriptionHtml?: string;
    sku?: string;
    slug?: string;
    path?: string;
    images: ProductImage[];
    variants: ProductVariant[];
    price: ProductPrice;
    options: ProductOption[];
};
export declare type SearchProductsBody = {
    search?: string;
    categoryId?: string | number;
    brandId?: string | number;
    sort?: string;
    locale?: string;
    count?: number;
    includeSubCategories?: boolean;
    categories?: Category[];
};
export declare type GetProductBody = {
    id?: string;
};
export declare type ProductTypes = {
    product: Product;
    searchBody: SearchProductsBody;
    getProductBody: GetProductBody;
};
export declare type SearchProductsHook<T extends ProductTypes = ProductTypes> = {
    data: {
        products: T["product"][];
        found: boolean;
    };
    body: T["searchBody"];
    input: T["searchBody"];
    fetcherInput: T["searchBody"];
};
export declare type GetProductHook<T extends ProductTypes = ProductTypes> = {
    data: T["product"] | null;
    body: T["getProductBody"];
    input: T["getProductBody"];
    fetcherInput: T["getProductBody"];
};
export declare type ProductsSchema<T extends ProductTypes = ProductTypes> = {
    endpoint: {
        options: {};
        handlers: {
            getProducts: SearchProductsHook<T>;
        };
    };
};
export declare type GetAllProductPathsOperation<T extends ProductTypes = ProductTypes> = {
    data: {
        products: Pick<T["product"], "path">[];
    };
    variables: {
        first?: number;
    };
};
export declare type GetAllProductsOperation<T extends ProductTypes = ProductTypes> = {
    data: {
        products: T["product"][];
    };
    variables: {
        relevance?: "featured" | "best_selling" | "newest";
        ids?: string[];
        first?: number;
    };
};
export declare type GetProductOperation<T extends ProductTypes = ProductTypes> = {
    data: {
        product?: T["product"];
    };
    variables: {
        path: string;
        slug?: never;
    } | {
        path?: never;
        slug: string;
    };
};
