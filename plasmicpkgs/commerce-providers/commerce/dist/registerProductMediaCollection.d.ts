import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface ProductMediaCollectionProps {
    className: string;
    media: React.ReactNode;
}
export declare const productMediaCollectionMeta: ComponentMeta<ProductMediaCollectionProps>;
export declare function ProductMediaCollection(props: ProductMediaCollectionProps): React.JSX.Element;
export declare function registerProductMediaCollection(loader?: Registerable, customProductMediaCollectionMeta?: ComponentMeta<ProductMediaCollectionProps>): void;
export {};
