import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductVariantPickerProps {
    className: string;
}
export declare const productVariantPickerMeta: ComponentMeta<ProductVariantPickerProps>;
export declare function ProductVariantPicker(props: ProductVariantPickerProps): React.JSX.Element;
export declare function registerProductVariantPicker(loader?: Registerable, customProductVariantPickerMeta?: ComponentMeta<ProductVariantPickerProps>): void;
export {};
