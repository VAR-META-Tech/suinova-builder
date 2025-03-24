import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductMediaProps {
    className: string;
    mediaIndex?: number;
    setControlContextData: (data: {
        inMediaContext: boolean;
    }) => void;
}
export declare const productMediaMeta: ComponentMeta<ProductMediaProps>;
export declare const ProductMedia: React.ForwardRefExoticComponent<ProductMediaProps & React.RefAttributes<HTMLImageElement>>;
export declare function registerProductMedia(loader?: Registerable, customProductMediaMeta?: ComponentMeta<ProductMediaProps>): void;
export {};
