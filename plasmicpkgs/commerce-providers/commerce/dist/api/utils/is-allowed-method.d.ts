import type { NextApiRequest, NextApiResponse } from 'next';
export declare type HTTP_METHODS = 'OPTIONS' | 'GET' | 'POST' | 'PUT' | 'DELETE';
export default function isAllowedMethod(req: NextApiRequest, res: NextApiResponse, allowedMethods: HTTP_METHODS[]): boolean;
