import { ApiCmsRow, ApiCmsTable } from "./schema";
export interface DatabaseConfig {
    host: string;
    databaseId: string;
    databaseToken: string;
    locale: string;
    useDraft: boolean | string[];
}
export interface QueryParams {
    useDraft?: boolean;
    where?: any;
    orderBy?: string;
    desc?: boolean;
    limit?: number;
    offset?: number;
    fields?: string[];
}
export declare class HttpError extends Error {
    status: number;
    constructor(status: number, message: string);
}
export declare class API {
    private config;
    constructor(config: DatabaseConfig);
    get(endpoint: string, params?: any): Promise<any>;
    fetchTables(): Promise<ApiCmsTable[]>;
    private useDraftForTable;
    query(table: string, params?: QueryParams): Promise<ApiCmsRow[]>;
    count(table: string, params?: Pick<QueryParams, "where" | "useDraft">): Promise<number>;
}
export declare function mkApi(config: DatabaseConfig | undefined): API;
