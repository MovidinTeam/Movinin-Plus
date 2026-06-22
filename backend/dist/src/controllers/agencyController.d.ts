import { Request, Response } from 'express';
/**
 * Validate Agency fullname.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const validate: (req: Request, res: Response) => Promise<void>;
/**
 * Update Agency.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const update: (req: Request, res: Response) => Promise<void>;
/**
 * Delete Agency by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteAgency: (req: Request, res: Response) => Promise<void>;
/**
 * Get Agency by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getAgency: (req: Request, res: Response) => Promise<void>;
/**
 * Get Agencies.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getAgencies: (req: Request, res: Response) => Promise<void>;
/**
 * Get all Agencies.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getAllAgencies: (req: Request, res: Response) => Promise<void>;
