import { Request, Response } from 'express';
/**
 * Validate a Country name with language code.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const validate: (req: Request, res: Response) => Promise<void>;
/**
 * Create a Country.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const create: (req: Request, res: Response) => Promise<void>;
/**
 * Update a Country.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const update: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a Country.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteCountry: (req: Request, res: Response) => Promise<void>;
/**
 * Get a Country by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getCountry: (req: Request, res: Response) => Promise<void>;
/**
 * Get Countries.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getCountries: (req: Request, res: Response) => Promise<void>;
/**
 * Get Countries with locations.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getCountriesWithLocations: (req: Request, res: Response) => Promise<void>;
/**
 * Check if a Country is used by a Car.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkCountry: (req: Request, res: Response) => Promise<void>;
/**
 * Get country Id from country name (en).
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getCountryId: (req: Request, res: Response) => Promise<void>;
