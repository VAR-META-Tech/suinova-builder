import type { Response } from '@vercel/fetch';
export declare class CommerceAPIError extends Error {
    status: number;
    res: Response;
    data: any;
    constructor(msg: string, res: Response, data?: any);
}
export declare class CommerceNetworkError extends Error {
    constructor(msg: string);
}
