import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductTextFieldProps {
    className: string;
    field: string;
}
export declare const productTextFieldMeta: ComponentMeta<ProductTextFieldProps>;
export declare function ProductTextField(props: ProductTextFieldProps): React.JSX.Element;
export declare function registerTextField(loader?: Registerable, customProductTextFieldMeta?: ComponentMeta<ProductTextFieldProps>): void;
export {};
