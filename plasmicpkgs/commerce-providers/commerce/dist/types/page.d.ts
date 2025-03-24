export declare type Page = {
    id: string;
    name: string;
    url?: string;
    body: string;
    is_visible?: boolean;
    sort_order?: number;
};
export declare type PageTypes = {
    page: Page;
};
export declare type GetAllPagesOperation<T extends PageTypes = PageTypes> = {
    data: {
        pages: T['page'][];
    };
};
export declare type GetPageOperation<T extends PageTypes = PageTypes> = {
    data: {
        page?: T['page'];
    };
    variables: {
        id: string;
    };
};
