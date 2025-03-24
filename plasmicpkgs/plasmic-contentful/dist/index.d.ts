import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { GlobalContextMeta, ComponentMeta } from '@plasmicapp/host';
import React, { ReactNode } from 'react';

declare function ensure<T>(x: T | null | undefined, msg?: string): T;
interface ContentfulCredentialsProviderProps {
    space: string;
    accessToken: string;
    environment?: string;
}
declare const ContentfulCredentialsProviderMeta: GlobalContextMeta<ContentfulCredentialsProviderProps>;
declare function ContentfulCredentialsProvider({ accessToken, space, environment, children, }: React.PropsWithChildren<ContentfulCredentialsProviderProps>): React.JSX.Element;
interface ContentfulFetcherProps {
    contentType: string;
    children?: ReactNode;
    className?: string;
    limit?: number;
    include?: number;
    order?: string;
    reverseOrder?: boolean;
    filterField?: string;
    searchParameter?: string;
    filterValue?: string | number;
    noAutoRepeat?: boolean;
    noLayout?: boolean;
    setControlContextData?: (data: {
        types?: {
            name: string;
            id: string;
        }[];
        fields?: string[];
        queryOptions?: [];
    }) => void;
}
declare const ContentfulFetcherMeta: ComponentMeta<ContentfulFetcherProps>;
declare function ContentfulFetcher({ filterField, filterValue, searchParameter, noAutoRepeat, contentType, children, className, order, reverseOrder, limit, include, noLayout, setControlContextData, }: ContentfulFetcherProps): React.JSX.Element;
interface ContentfulFieldProps {
    className?: string;
    objectPath?: (string | number)[];
    setControlContextData?: (data: {
        data: object;
    }) => void;
}
declare const ContentfulFieldMeta: ComponentMeta<ContentfulFieldProps>;
declare function ContentfulField({ className, objectPath, setControlContextData, }: ContentfulFieldProps): React.JSX.Element;

declare function registerAll(loader?: {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
}): void;

export { ContentfulCredentialsProvider, ContentfulCredentialsProviderMeta, ContentfulFetcher, ContentfulFetcherMeta, ContentfulField, ContentfulFieldMeta, ensure, registerAll };
