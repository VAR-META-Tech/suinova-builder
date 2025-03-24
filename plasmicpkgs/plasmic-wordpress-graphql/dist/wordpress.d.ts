import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface WordpressProviderProps {
    graphqlEndpoint: string;
}
export declare const WordpressProviderMeta: GlobalContextMeta<WordpressProviderProps>;
export declare function WordpressProvider({ graphqlEndpoint, children, }: React.PropsWithChildren<WordpressProviderProps>): React.JSX.Element;
interface WordpressFetcherProps {
    children?: ReactNode;
    className?: string;
    noLayout?: boolean;
    noAutoRepeat?: boolean;
    query?: string;
    setControlContextData?: (data: {
        endpoint?: string;
    }) => void;
}
export declare const WordpressFetcherMeta: ComponentMeta<WordpressFetcherProps>;
export declare function WordpressFetcher({ query, children, className, noLayout, noAutoRepeat, setControlContextData, }: WordpressFetcherProps): React.JSX.Element;
interface WordpressFieldProps {
    className?: string;
    path?: string;
    setControlContextData?: (data: {
        data: any;
    }) => void;
}
export declare const WordpressFieldMeta: ComponentMeta<WordpressFieldProps>;
export declare function WordpressField({ className, path, setControlContextData, }: WordpressFieldProps): React.JSX.Element;
export {};
