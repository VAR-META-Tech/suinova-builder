import { Registerable } from "./utils";
export interface CodeProps {
    className: string;
}
export declare function Code(props: CodeProps): null;
export declare namespace Code {
    var displayName: string;
}
export declare function registerCode(loader?: Registerable): void;
