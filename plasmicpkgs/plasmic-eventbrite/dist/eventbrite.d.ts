import { CodeComponentMeta } from "@plasmicapp/host";
import React from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface EventbriteProps {
    className?: string;
    eventId?: string;
    text?: string;
}
export declare const EventbriteMeta: CodeComponentMeta<EventbriteProps>;
export declare function Eventbrite({ className, text, eventId }: EventbriteProps): React.JSX.Element;
export {};
