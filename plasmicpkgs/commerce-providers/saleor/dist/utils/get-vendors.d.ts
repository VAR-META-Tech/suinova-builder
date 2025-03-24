export declare type Brand = {
    entityId: string;
    name: string;
    path: string;
};
export declare type BrandEdge = {
    node: Brand;
};
export declare type Brands = BrandEdge[];
declare const getVendors: (config: any) => Promise<BrandEdge[]>;
export default getVendors;
