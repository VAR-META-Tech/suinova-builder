import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface CategoryLinkProps {
    className?: string;
    children?: React.ReactNode;
    linkDest?: string;
}
export declare const categoryLinkMeta: ComponentMeta<CategoryLinkProps>;
export declare function CategoryLink(props: CategoryLinkProps): React.JSX.Element;
export declare function registerCategoryLink(loader?: Registerable, customCategoryLinkMeta?: ComponentMeta<CategoryLinkProps>): void;
export {};
