import React from "react";
import { DatabaseConfig } from "./api";
import { ApiCmsRow, ApiCmsTable } from "./schema";
export declare const mkQueryContextKey: (table: string) => string;
export declare function useDatabase(): DatabaseConfig | undefined;
export declare function makeDatabaseCacheKey(config: DatabaseConfig | undefined): string | null;
export declare function DatabaseProvider({ config, children, }: {
    config: DatabaseConfig;
    children?: React.ReactNode;
}): React.JSX.Element;
export declare function useTables(): ApiCmsTable[] | undefined;
export declare function TablesProvider({ children, tables, }: {
    children?: React.ReactNode;
    tables?: ApiCmsTable[];
}): React.JSX.Element;
export declare function TableSchemaProvider({ children, table, }: {
    children?: React.ReactNode;
    table?: string | undefined;
}): React.JSX.Element;
export declare function useQueryResults(table?: string): {
    table: string;
    rows: ApiCmsRow[];
} | undefined;
export declare function QueryResultProvider({ children, table, rows, hidden, }: {
    children?: React.ReactNode;
    table: string | undefined;
    rows: ApiCmsRow[] | undefined;
    hidden?: boolean;
}): React.JSX.Element;
export declare function useTablesWithDataLoaded(mode: "rows" | "count" | undefined): ApiCmsTable[] | undefined;
export declare function useRow(tables?: ApiCmsTable[], table?: string): {
    table: string;
    row: ApiCmsRow | undefined;
} | undefined;
export declare function useCount(tables?: ApiCmsTable[], table?: string): {
    table: string;
    count: number | undefined;
} | undefined;
export declare function RowProvider({ children, table, row, }: {
    children?: React.ReactNode;
    table: string;
    row: ApiCmsRow;
}): React.JSX.Element;
export declare function CountProvider({ children, table, count, }: {
    children?: React.ReactNode;
    table: string | undefined;
    count: number | undefined;
}): React.JSX.Element;
