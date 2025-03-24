import { ComponentMeta } from "@plasmicapp/host";
import React from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface TypeformProps {
    className?: string;
    formId?: string;
}
export declare const TypeformMeta: ComponentMeta<TypeformProps>;
export declare function Typeform({ className, formId }: TypeformProps): React.JSX.Element;
export {};
