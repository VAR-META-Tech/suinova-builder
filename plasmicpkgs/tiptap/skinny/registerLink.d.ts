import { Registerable } from "./utils";
export interface LinkProps {
    className: string;
}
export declare function Link(props: LinkProps): null;
export declare namespace Link {
    var displayName: string;
}
export declare function registerLink(loader?: Registerable): void;
