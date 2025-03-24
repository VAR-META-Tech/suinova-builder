import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductPriceProps {
    className: string;
}
export declare const productPriceMeta: ComponentMeta<ProductPriceProps>;
export declare function ProductPriceComponent(props: ProductPriceProps): React.JSX.Element;
export declare function registerProductPrice(loader?: Registerable, customProductPriceMeta?: ComponentMeta<ProductPriceProps>): void;
export {};
