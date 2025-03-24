import { GlobalContextMeta } from "@plasmicapp/host";
import React from "react";
import { CommercetoolsCredentials } from "./provider";
import { Registerable } from "./registerable";
interface CommerceProviderProps extends CommercetoolsCredentials {
    children?: React.ReactNode;
}
export declare const commerceProviderMeta: GlobalContextMeta<CommerceProviderProps>;
export declare function CommerceProviderComponent(props: CommerceProviderProps): React.JSX.Element | null;
export declare function registerCommerceProvider(loader?: Registerable, customCommerceProviderMeta?: GlobalContextMeta<CommerceProviderProps>): void;
export {};
