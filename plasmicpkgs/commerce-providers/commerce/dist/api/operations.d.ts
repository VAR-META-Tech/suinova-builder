/// <reference types="node" />
import type { ServerResponse } from 'http';
import type { LoginOperation } from '../types/login';
import type { GetAllPagesOperation, GetPageOperation } from '../types/page';
import type { GetSiteInfoOperation } from '../types/site';
import type { GetCustomerWishlistOperation } from '../types/wishlist';
import type { GetAllProductPathsOperation, GetAllProductsOperation, GetProductOperation } from '../types/product';
import type { APIProvider, CommerceAPI } from '.';
declare const noop: () => never;
export declare const OPERATIONS: readonly ["login", "getAllPages", "getPage", "getSiteInfo", "getCustomerWishlist", "getAllProductPaths", "getAllProducts", "getProduct"];
export declare const defaultOperations: {
    login: () => never;
    getAllPages: () => never;
    getPage: () => never;
    getSiteInfo: () => never;
    getCustomerWishlist: () => never;
    getAllProductPaths: () => never;
    getAllProducts: () => never;
    getProduct: () => never;
};
export declare type AllowedOperations = typeof OPERATIONS[number];
export declare type Operations<P extends APIProvider> = {
    login: {
        <T extends LoginOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            res: ServerResponse;
        }): Promise<T['data']>;
        <T extends LoginOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            res: ServerResponse;
        } & OperationOptions): Promise<T['data']>;
    };
    getAllPages: {
        <T extends GetAllPagesOperation>(opts?: {
            config?: P['config'];
            preview?: boolean;
        }): Promise<T['data']>;
        <T extends GetAllPagesOperation>(opts: {
            config?: P['config'];
            preview?: boolean;
        } & OperationOptions): Promise<T['data']>;
    };
    getPage: {
        <T extends GetPageOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            preview?: boolean;
        }): Promise<T['data']>;
        <T extends GetPageOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            preview?: boolean;
        } & OperationOptions): Promise<T['data']>;
    };
    getSiteInfo: {
        <T extends GetSiteInfoOperation>(opts: {
            config?: P['config'];
            preview?: boolean;
        }): Promise<T['data']>;
        <T extends GetSiteInfoOperation>(opts: {
            config?: P['config'];
            preview?: boolean;
        } & OperationOptions): Promise<T['data']>;
    };
    getCustomerWishlist: {
        <T extends GetCustomerWishlistOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            includeProducts?: boolean;
        }): Promise<T['data']>;
        <T extends GetCustomerWishlistOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            includeProducts?: boolean;
        } & OperationOptions): Promise<T['data']>;
    };
    getAllProductPaths: {
        <T extends GetAllProductPathsOperation>(opts: {
            variables?: T['variables'];
            config?: P['config'];
        }): Promise<T['data']>;
        <T extends GetAllProductPathsOperation>(opts: {
            variables?: T['variables'];
            config?: P['config'];
        } & OperationOptions): Promise<T['data']>;
    };
    getAllProducts: {
        <T extends GetAllProductsOperation>(opts: {
            variables?: T['variables'];
            config?: P['config'];
            preview?: boolean;
        }): Promise<T['data']>;
        <T extends GetAllProductsOperation>(opts: {
            variables?: T['variables'];
            config?: P['config'];
            preview?: boolean;
        } & OperationOptions): Promise<T['data']>;
    };
    getProduct: {
        <T extends GetProductOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            preview?: boolean;
        }): Promise<T['data']>;
        <T extends GetProductOperation>(opts: {
            variables: T['variables'];
            config?: P['config'];
            preview?: boolean;
        } & OperationOptions): Promise<T['data']>;
    };
};
export declare type APIOperations<P extends APIProvider> = {
    [K in keyof Operations<P>]?: (ctx: OperationContext<P>) => Operations<P>[K];
};
export declare type AllOperations<P extends APIProvider> = {
    [K in keyof APIOperations<P>]-?: P['operations'][K] extends (...args: any) => any ? ReturnType<P['operations'][K]> : typeof noop;
};
export declare type OperationContext<P extends APIProvider> = {
    commerce: CommerceAPI<P>;
};
export declare type OperationOptions = {
    query: string;
    url?: never;
} | {
    query?: never;
    url: string;
};
export {};
