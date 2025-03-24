import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface CategoryFieldProps {
    className?: string;
    field?: string;
}
export declare const categoryFieldMeta: ComponentMeta<CategoryFieldProps>;
export declare function CategoryField(props: CategoryFieldProps): React.JSX.Element;
export declare function registerCategoryField(loader?: Registerable, customCategoryFieldMeta?: ComponentMeta<CategoryFieldProps>): void;
export {};
