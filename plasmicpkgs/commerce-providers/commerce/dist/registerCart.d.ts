import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface CartProps {
    className?: string;
    field: string;
    hideIfIsEmpty?: boolean;
}
export declare const cartMeta: ComponentMeta<CartProps>;
export declare function CartComponent(props: CartProps): React.JSX.Element | null;
export declare function registerCart(loader?: Registerable, customCartMeta?: ComponentMeta<CartProps>): void;
export {};
