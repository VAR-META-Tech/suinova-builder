import { GlobalContextMeta } from "@plasmicapp/host";
import React from "react";
import { Registerable } from "./registerable";
interface CommerceProviderProps {
    children?: React.ReactNode;
    saleorApiUrl: string;
}
export declare const commerceProviderMeta: GlobalContextMeta<CommerceProviderProps>;
export declare function CommerceProviderComponent(props: CommerceProviderProps): React.JSX.Element;
export declare function registerCommerceProvider(loader?: Registerable, customCommerceProviderMeta?: GlobalContextMeta<CommerceProviderProps>): void;
export {};
