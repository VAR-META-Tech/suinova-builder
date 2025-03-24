import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface GraphCMSCredentialsProviderProps {
    apiUrl: string;
    authToken: string;
}
export declare const GraphCMSCredentialsProviderMeta: GlobalContextMeta<GraphCMSCredentialsProviderProps>;
export declare function GraphCMSCredentialsProvider({ apiUrl, authToken, children, }: React.PropsWithChildren<GraphCMSCredentialsProviderProps>): React.JSX.Element;
interface GraphCMSFetcherProps {
    children?: ReactNode;
    className?: string;
    noAutoRepeat?: boolean;
    noLayout?: boolean;
    query?: {
        query?: string;
        variables?: object;
    };
    varOverrides?: Record<string, any>;
    setControlContextData?: (data: {
        endpoint?: string;
        headers?: HeadersInit;
    }) => void;
}
export declare const GraphCMSFetcherMeta: ComponentMeta<GraphCMSFetcherProps>;
export declare function GraphCMSFetcher({ query, children, className, noLayout, noAutoRepeat, varOverrides, setControlContextData, }: GraphCMSFetcherProps): React.JSX.Element | null;
interface GraphCMSFieldProps {
    className?: string;
    path?: string;
    setControlContextData?: (data: {
        data: any;
    }) => void;
    themeClassName?: string;
}
export declare const GraphCMSFieldMeta: ComponentMeta<GraphCMSFieldProps>;
export declare function GraphCMSField({ className, path, themeClassName, setControlContextData, }: GraphCMSFieldProps): React.JSX.Element;
export {};
