import { Request, Response } from 'express';
/**
 * Validate a Location name with language code.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const validate: (req: Request, res: Response) => Promise<void>;
/**
 * Create a Location.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const create: (req: Request, res: Response) => Promise<void>;
/**
 * Update a Location.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const update: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a Location.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteLocation: (req: Request, res: Response) => Promise<void>;
/**
 * Get a Location by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getLocation: (req: Request, res: Response) => Promise<void>;
/**
 * Get Locations.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getLocations: (req: Request, res: Response) => Promise<void>;
/**
 * Get Locations with position.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getLocationsWithPosition: (req: Request, res: Response) => Promise<void>;
/**
 * Check if a Location is used by a Property.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkLocation: (req: Request, res: Response) => Promise<void>;
/**
 * Get location Id from location name (en).
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getLocationId: (req: Request, res: Response) => Promise<void>;
/**
 * Upload a Location image to temp folder.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const createImage: (req: Request, res: Response) => Promise<void>;
/**
 * Update a Location image.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const updateImage: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a Location image.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteImage: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a temp Location image.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {*}
 */
export declare const deleteTempImage: (req: Request, res: Response) => Promise<void>;
