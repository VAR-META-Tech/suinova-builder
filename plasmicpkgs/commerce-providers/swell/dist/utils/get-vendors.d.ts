import { SwellConfig } from '..';
export declare type BrandNode = {
    name: string;
    path: string;
};
export declare type BrandEdge = {
    node: BrandNode;
};
export declare type Brands = BrandEdge[];
declare const getVendors: (config: SwellConfig) => Promise<{
    node: {
        entityId: string;
        name: string;
        path: string;
    };
}[]>;
export default getVendors;
