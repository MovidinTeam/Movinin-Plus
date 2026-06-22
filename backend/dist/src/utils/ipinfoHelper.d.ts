import { Request } from 'express';
/**
 * Returns client IP/
 *
 * @param {Request} req
 * @returns {string}
 */
export declare const getClientIp: (req: Request) => string;
/**
 * Return ISO 2 country code from IP.
 *
 * @async
 * @param {string} ip
 * @returns {Promise<string | null>}
 */
export declare const getCountryCode: (ip: string) => Promise<string>;
