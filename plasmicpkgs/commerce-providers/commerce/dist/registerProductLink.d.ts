import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductLinkProps {
    className?: string;
    children?: React.ReactNode;
    linkDest?: string;
}
export declare const productLinkMeta: ComponentMeta<ProductLinkProps>;
export declare function ProductLink(props: ProductLinkProps): React.JSX.Element;
export declare function registerProductLink(loader?: Registerable, customProductLinkMeta?: ComponentMeta<ProductLinkProps>): void;
export {};
