import { ApiCmsTable, CmsType } from "./schema";
declare type ValueLabelPair = {
    value: string;
    label: string;
};
export declare function mkTableOptions(tables: ApiCmsTable[] | undefined): ValueLabelPair[];
export declare function mkFieldOptions(tables: ApiCmsTable[] | undefined, tableIdentifier: string | undefined, types?: CmsType[]): ValueLabelPair[];
export {};
