import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
import { Product } from "./types/product";
interface ProductBoxProps {
    className?: string;
    children?: React.ReactNode;
    id?: string;
    noLayout?: boolean;
    setControlContextData?: (data: {
        products: Product[];
        onSearch?: (value: string) => void;
    }) => void;
}
export declare const productBoxMeta: ComponentMeta<ProductBoxProps>;
export declare function ProductBox(props: ProductBoxProps): React.JSX.Element;
export declare function registerProductBox(loader?: Registerable, customProductBoxMeta?: ComponentMeta<ProductBoxProps>): void;
export {};
