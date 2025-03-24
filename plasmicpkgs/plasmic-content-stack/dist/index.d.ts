import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { GlobalContextMeta, ComponentMeta } from '@plasmicapp/host';
import React, { ReactNode } from 'react';

declare function ensure<T>(x: T | null | undefined): T;
interface ContentStackCredentialsProviderProps {
    apiKey: string;
    accessToken: string;
    environment: string;
}
declare const ContentStackCredentialsProviderMeta: GlobalContextMeta<ContentStackCredentialsProviderProps>;
declare function ContentStackCredentialsProvider({ apiKey, accessToken, environment, children, }: React.PropsWithChildren<ContentStackCredentialsProviderProps>): React.JSX.Element;
interface ContentStackFetcherProps {
    contentType: string;
    children?: ReactNode;
    className?: string;
    noLayout?: boolean;
    filterField?: string;
    queryOperator?: string;
    filterValue?: string | number;
    limit?: number;
    noAutoRepeat?: boolean;
    setControlContextData?: (data: {
        types?: {
            title: string;
            uid: string;
        }[];
        filterFields?: string[];
        queryOptions?: [];
    }) => void;
}
declare const ContentStackFetcherMeta: ComponentMeta<ContentStackFetcherProps>;
declare function ContentStackFetcher({ contentType, filterField, filterValue, queryOperator, limit, noAutoRepeat, children, className, noLayout, setControlContextData, }: ContentStackFetcherProps): React.JSX.Element;
interface ContentStackFieldProps {
    className?: string;
    objectPath?: (string | number)[];
    setControlContextData?: (data: {
        data: Record<string, any>;
    }) => void;
}
declare const ContentStackFieldMeta: ComponentMeta<ContentStackFieldProps>;
declare function ContentStackField({ objectPath, setControlContextData, ...rest }: ContentStackFieldProps): React.JSX.Element;

declare function registerAll(loader?: {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
}): void;

export { ContentStackCredentialsProvider, ContentStackCredentialsProviderMeta, ContentStackFetcher, ContentStackFetcherMeta, ContentStackField, ContentStackFieldMeta, ensure, registerAll };
