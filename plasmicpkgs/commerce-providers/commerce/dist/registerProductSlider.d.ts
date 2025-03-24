import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductSliderProps {
    className: string;
    slideContainer?: React.ReactNode;
    thumbsContainer?: React.ReactNode;
    thumbsVisible?: number;
    slideSelected?: number;
}
export declare const productSliderMeta: ComponentMeta<ProductSliderProps>;
export declare function ProductSlider(props: ProductSliderProps): React.JSX.Element;
export declare function registerProductSlider(loader?: Registerable, customProductSliderMeta?: ComponentMeta<ProductSliderProps>): void;
export {};
