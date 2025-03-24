import { ComponentMeta, default as registerComponent } from "@plasmicapp/host/registerComponent";
import { default as registerGlobalContext, GlobalContextMeta } from "@plasmicapp/host/registerGlobalContext";
import { default as registerToken } from "@plasmicapp/host/registerToken";
import React from "react";
export type Registerable = {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
    registerToken: typeof registerToken;
};
export declare function makeRegisterComponent<T extends React.ComponentType<any>>(component: T, meta: ComponentMeta<React.ComponentProps<T>>): (loader?: Registerable) => void;
export declare function makeRegisterGlobalContext<T extends React.ComponentType<any>>(component: T, meta: GlobalContextMeta<React.ComponentProps<T>>): (loader?: Registerable) => void;
export declare function registerComponentHelper<T extends React.ComponentType<any>>(loader: Registerable | undefined, component: T, meta: ComponentMeta<React.ComponentProps<T>>): void;
type ReactElt = {
    children: ReactElt | ReactElt[];
    props: {
        children: ReactElt | ReactElt[];
        [prop: string]: any;
    } | null;
    type: React.ComponentType<any> | null;
    key: string | null;
} | null;
export declare function traverseReactEltTree(children: React.ReactNode, callback: (elt: ReactElt) => void): void;
export declare function asArray<T>(x: T[] | T | undefined | null): T[];
export {};
