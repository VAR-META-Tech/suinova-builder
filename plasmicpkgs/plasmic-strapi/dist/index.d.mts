import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { ComponentMeta, GlobalContextMeta } from '@plasmicapp/host';
import React, { ReactNode } from 'react';

interface StrapiCollectionProps {
    name?: string;
    children?: ReactNode;
    className?: string;
    noLayout?: boolean;
    noAutoRepeat?: boolean;
    filterField?: string;
    filterValue?: string;
    limit?: number;
    filterParameter?: string;
    setControlContextData?: (data: {
        strapiFields: string[];
    }) => void;
}
declare const strapiCollectionMeta: ComponentMeta<StrapiCollectionProps>;
declare function StrapiCollection({ name, filterParameter, filterValue, filterField, limit, children, className, noLayout, noAutoRepeat, setControlContextData, }: StrapiCollectionProps): React.JSX.Element;

interface StrapiCredentials {
    host?: string;
    token?: string;
}
declare const strapiCredentialsProviderMeta: GlobalContextMeta<StrapiCredentials>;
declare function StrapiCredentialsProvider({ host, token, children, }: React.PropsWithChildren<StrapiCredentials>): React.JSX.Element;

interface StrapiFieldProps {
    className?: string;
    path?: string;
    setControlContextData?: (data: {
        fields: string[];
        isImage: boolean;
    }) => void;
}
declare const strapiFieldMeta: ComponentMeta<StrapiFieldProps>;
declare function StrapiField({ className, path, setControlContextData, }: StrapiFieldProps): React.JSX.Element;

declare function registerAll(loader?: {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
}): void;

export { StrapiCollection, StrapiCredentialsProvider, StrapiField, registerAll, strapiCollectionMeta, strapiCredentialsProviderMeta, strapiFieldMeta };
