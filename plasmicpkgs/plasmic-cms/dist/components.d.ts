import { CanvasComponentProps, ComponentMeta } from "@plasmicapp/host/registerComponent";
import { GlobalContextMeta } from "@plasmicapp/host/registerGlobalContext";
import React from "react";
import { DatabaseConfig, QueryParams } from "./api";
import { ApiCmsRow, ApiCmsTable, CmsFieldMeta } from "./schema";
interface CmsCredentialsProviderProps extends DatabaseConfig {
    children?: React.ReactNode;
}
export declare const cmsCredentialsProviderMeta: GlobalContextMeta<CmsCredentialsProviderProps>;
export declare function CmsCredentialsProvider({ children, databaseId, databaseToken, host, locale, useDraft, }: CmsCredentialsProviderProps): React.JSX.Element;
declare type TablesContextData = {
    tables?: ApiCmsTable[];
};
interface TableContextData extends TablesContextData {
    table?: string;
}
interface RowContextData extends TableContextData {
    row?: ApiCmsRow;
    fieldMeta?: CmsFieldMeta;
}
interface CmsQueryRepeaterProps extends QueryParams, CanvasComponentProps<TableContextData> {
    children: React.ReactNode;
    table: string;
    emptyMessage?: React.ReactNode;
    forceEmptyState?: boolean;
    loadingMessage?: React.ReactNode;
    forceLoadingState?: boolean;
    noLayout?: boolean;
    noAutoRepeat?: boolean;
    className?: string;
    filterField?: string;
    filterValue?: string;
    fields?: string[];
    mode?: "rows" | "count";
}
export declare const cmsQueryRepeaterMeta: ComponentMeta<CmsQueryRepeaterProps>;
export declare function CmsQueryRepeater({ table, children, setControlContextData, mode, where, useDraft, orderBy, desc, limit, offset, emptyMessage, forceEmptyState, loadingMessage, forceLoadingState, noLayout, noAutoRepeat, className, filterField, filterValue, fields, }: CmsQueryRepeaterProps): React.JSX.Element;
interface CmsRowFieldProps extends CanvasComponentProps<RowContextData> {
    table: string;
    field: string;
    className?: string;
    dateFormat?: string;
    usePlasmicTheme?: boolean;
    themeResetClassName?: string;
}
export declare const cmsRowFieldMeta: ComponentMeta<CmsRowFieldProps>;
export declare function CmsRowField({ className, table, field, dateFormat, setControlContextData, usePlasmicTheme, themeResetClassName, ...rest }: CmsRowFieldProps): React.JSX.Element | null;
interface CmsCountProps extends CanvasComponentProps<RowContextData> {
    table: string;
    className?: string;
}
export declare const cmsCountFieldMeta: ComponentMeta<CmsCountProps>;
export declare function CmsCount({ className, table, setControlContextData: _, ...rest }: CmsCountProps): React.JSX.Element | null;
interface CmsRowLinkProps extends CanvasComponentProps<RowContextData> {
    table: string;
    field: string;
    hrefProp: string;
    children: React.ReactNode;
    prefix?: string;
    suffix?: string;
}
export declare const cmsRowLinkMeta: ComponentMeta<CmsRowLinkProps>;
export declare function CmsRowLink({ table, field, hrefProp, children, setControlContextData, prefix, suffix, }: CmsRowLinkProps): React.ReactElement | null;
interface CmsRowImageProps extends CanvasComponentProps<RowContextData> {
    table: string;
    field: string;
    srcProp: string;
    children: React.ReactNode;
}
export declare const cmsRowImageMeta: ComponentMeta<CmsRowImageProps>;
export declare function CmsRowImage({ table, field, srcProp, children, setControlContextData, }: CmsRowImageProps): React.ReactElement | null;
interface CmsRowFieldValueProps extends CanvasComponentProps<RowContextData> {
    table: string;
    field: string;
    valueProp: string;
    children: React.ReactNode;
}
export declare const cmsRowFieldValueMeta: ComponentMeta<CmsRowFieldValueProps>;
export declare function CmsRowFieldValue({ table, field, valueProp, children, setControlContextData, ...rest }: CmsRowFieldValueProps): React.ReactElement | null;
export {};
