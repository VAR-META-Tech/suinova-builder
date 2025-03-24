import registerComponent from "@plasmicapp/host/registerComponent";
import registerGlobalContext from "@plasmicapp/host/registerGlobalContext";
export declare type Registerable = {
    registerComponent: typeof registerComponent;
    registerGlobalContext: typeof registerGlobalContext;
};
