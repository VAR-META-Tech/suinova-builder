import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { CodeComponentMeta } from '@plasmicapp/host';
import React from 'react';

declare function ensure<T>(x: T | null | undefined): T;
interface AudioPlayerProps {
    className?: string;
    src?: string;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    volume?: number;
}
declare const AudioPlayerMeta: CodeComponentMeta<AudioPlayerProps>;
declare function AudioPlayer({ className, src, autoPlay, controls, loop, muted, volume, }: AudioPlayerProps): React.JSX.Element;

declare function registerAll(loader?: {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
}): void;

export { AudioPlayer, AudioPlayerMeta, ensure, registerAll };
