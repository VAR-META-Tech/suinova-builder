import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHODS } from './is-allowed-method';
import { APIHandler } from './types';
export default function isAllowedOperation(req: NextApiRequest, res: NextApiResponse, allowedOperations: {
    [k in HTTP_METHODS]?: APIHandler<any, any>;
}): boolean;
