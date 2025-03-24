import { Registerable } from "./registerable";
import { registerCommerceProvider, CommerceProviderComponent } from "./registerCommerceProvider";
export * from "./registerable";
export * from "./saleor";
export declare function registerAll(loader?: Registerable): void;
export { registerCommerceProvider, CommerceProviderComponent };
