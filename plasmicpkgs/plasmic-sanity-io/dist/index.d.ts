import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { GlobalContextMeta, ComponentMeta } from '@plasmicapp/host';
import React, { ReactNode } from 'react';

declare function ensure<T>(x: T | null | undefined): T;
interface SanityCredentialsProviderProps {
    projectId?: string;
    dataset?: string;
    apiVersion?: string;
    token?: string;
    useCdn?: boolean;
}
declare const sanityCredentialsProviderMeta: GlobalContextMeta<SanityCredentialsProviderProps>;
declare function SanityCredentialsProvider({ projectId, dataset, apiVersion, token, useCdn, children, }: React.PropsWithChildren<SanityCredentialsProviderProps>): React.JSX.Element;
interface SanityFetcherProps {
    groq?: string;
    docType: string;
    filterField?: string;
    filterValue?: string;
    filterParameter?: string;
    noAutoRepeat?: boolean;
    limit?: string;
    children?: ReactNode;
    className?: string;
    noLayout?: boolean;
    setControlContextData?: (data: {
        docTypes?: string[];
        sanityFields?: string[];
        queryOptions?: [];
    }) => void;
}
declare const sanityFetcherMeta: ComponentMeta<SanityFetcherProps>;
declare function SanityFetcher({ groq, docType, filterField, filterValue, filterParameter, limit, noAutoRepeat, children, className, noLayout, setControlContextData, }: SanityFetcherProps): React.JSX.Element;
interface SanityFieldProps {
    className?: string;
    path?: string;
    field?: string;
    setControlContextData?: (data: {
        fields: string[];
        isImage: boolean;
    }) => void;
}
declare const sanityFieldMeta: ComponentMeta<SanityFieldProps>;
declare function SanityField({ className, path, field, setControlContextData, }: SanityFieldProps): React.JSX.Element;

declare function registerAll(loader?: {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
}): void;

export { SanityCredentialsProvider, SanityFetcher, SanityField, ensure, registerAll, sanityCredentialsProviderMeta, sanityFetcherMeta, sanityFieldMeta };
