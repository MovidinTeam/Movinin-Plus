import { Request, Response } from 'express';
/**
 * Returns ISO 2 country code from IP.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getCountryCode: (req: Request, res: Response) => Promise<void>;
