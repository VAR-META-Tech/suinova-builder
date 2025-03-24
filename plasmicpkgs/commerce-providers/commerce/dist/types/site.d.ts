export declare type CategoryImage = {
    url: string;
    alt?: string;
};
export declare type Category = {
    id: string;
    name: string;
    slug: string;
    path: string;
    isEmpty?: boolean;
    images?: CategoryImage[];
    depth?: number;
    children?: string[];
    parentId?: string;
};
export declare type Brand = {
    name: string;
    entityId: string;
    path: string;
};
export declare type SearchSiteInfoBody = {
    locale?: string;
};
export declare type SiteTypes = {
    category: Category;
    brand: Brand;
    searchBody: SearchSiteInfoBody;
    getCategoriesBody: GetCategoriesBody;
};
export declare type GetSiteInfoOperation<T extends SiteTypes = SiteTypes> = {
    data: {
        categories: T["category"][];
        brands: T["brand"][];
    };
};
export declare type GetCategoriesBody = {
    addIsEmptyField?: boolean;
    categoryId?: string;
};
export declare type GetCategoriesHook<T extends SiteTypes = SiteTypes> = {
    data: T["category"][];
    input: T["getCategoriesBody"];
    fetcherInput: T["getCategoriesBody"];
    swrState: {
        isEmpty: boolean;
    };
};
export declare type GetBrandsHook<T extends SiteTypes = SiteTypes> = {
    data: T["brand"][] | null;
    input: {};
    fetcherInput: {};
    swrState: {
        isEmpty: boolean;
    };
};
