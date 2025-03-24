import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductQuantityProps {
    className: string;
    children?: React.ReactNode;
}
export declare const productQuantityMeta: ComponentMeta<ProductQuantityProps>;
export declare function ProductQuantity(props: ProductQuantityProps): React.JSX.Element;
export declare function registerProductQuantity(loader?: Registerable, customProductQuantityMeta?: ComponentMeta<ProductQuantityProps>): void;
export {};
