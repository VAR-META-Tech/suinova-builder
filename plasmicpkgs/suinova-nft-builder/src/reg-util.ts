import React, { isValidElement } from "react";
import {
  ComponentMeta,
  default as registerComponent,
} from "@plasmicapp/host/registerComponent";
import {
  default as registerGlobalContext,
  GlobalContextMeta,
} from "@plasmicapp/host/registerGlobalContext";

export type Registerable = {
  registerComponent: typeof registerComponent;
  registerGlobalContext: typeof registerGlobalContext;
};

export function makeRegisterComponent<T extends React.ComponentType<any>>(
  component: T,
  meta: ComponentMeta<React.ComponentProps<T>>
) {
  return function (loader?: Registerable) {
    registerComponentHelper(loader, component, meta);
  };
}

export function makeRegisterGlobalContext<T extends React.ComponentType<any>>(
  component: T,
  meta: GlobalContextMeta<React.ComponentProps<T>>
) {
  return function (loader?: Registerable) {
    if (loader) {
      loader.registerGlobalContext(component, meta);
    } else {
      registerGlobalContext(component, meta);
    }
  };
}

export function reactNodeToString(reactNode: React.ReactNode): string {
  let string = "";
  if (typeof reactNode === "string") {
    string = reactNode;
  } else if (typeof reactNode === "number") {
    string = reactNode.toString();
  } else if (reactNode instanceof Array) {
    reactNode.forEach(function (child) {
      string += reactNodeToString(child);
    });
  } else if (isValidElement(reactNode)) {
    string += reactNodeToString(reactNode.props.children);
  }
  return string;
}


export type ReactElt = {
  children: ReactElt | ReactElt[];
  props: {
    children: ReactElt | ReactElt[];
    [prop: string]: any;
  } | null;
  type: React.ComponentType<any> | null;
  key: string | null;
} | null;


export function traverseReactEltTree(
children: React.ReactNode,
callback: (elt: ReactElt) => void
) {
const rec = (elts: ReactElt | ReactElt[] | null) => {
  (Array.isArray(elts) ? elts : [elts]).forEach((elt) => {
    if (elt) {
      callback(elt);
      if (elt.children) {
        rec(elt.children);
      }
      if (elt.props?.children && elt.props.children !== elt.children) {
        rec(elt.props.children);
      }
    }
  });
};
rec(children as any);
}

export function registerComponentHelper<T extends React.ComponentType<any>>(
  loader: Registerable | undefined,
  component: T,
  meta: ComponentMeta<React.ComponentProps<T>>
) {
  if (loader) {
    loader.registerComponent(component, meta);
  } else {
    registerComponent(component, meta);
  }
}
