import type { NextApiRequest, NextApiResponse } from 'next';
import type { CommerceAPI } from '..';
export declare type ErrorData = {
    message: string;
    code?: string;
};
export declare type APIResponse<Data = any> = {
    data: Data;
    errors?: ErrorData[];
} | (Data extends null ? {
    data: null;
    errors?: ErrorData[];
} : {
    data: null;
    errors: ErrorData[];
});
export declare type APIHandlerContext<C extends CommerceAPI, H extends APIHandlers<C> = {}, Data = any, Options extends {} = {}> = {
    req: NextApiRequest;
    res: NextApiResponse<APIResponse<Data>>;
    commerce: C;
    config: C['provider']['config'];
    handlers: H;
    /**
     * Custom configs that may be used by a particular handler
     */
    options: Options;
};
export declare type APIHandler<C extends CommerceAPI, H extends APIHandlers<C> = {}, Data = any, Body = any, Options extends {} = {}> = (context: APIHandlerContext<C, H, Data, Options> & {
    body: Body;
}) => void | Promise<void>;
export declare type APIHandlers<C extends CommerceAPI> = {
    [k: string]: APIHandler<C, any, any, any, any>;
};
export declare type APIEndpoint<C extends CommerceAPI = CommerceAPI, H extends APIHandlers<C> = {}, Data = any, Options extends {} = {}> = (context: APIHandlerContext<C, H, Data, Options>) => void | Promise<void>;
