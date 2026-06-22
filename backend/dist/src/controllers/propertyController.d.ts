import { Request, Response } from 'express';
/**
 * Create a Property.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const create: (req: Request, res: Response) => Promise<void>;
/**
 * Update a Property.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const update: (req: Request, res: Response) => Promise<void>;
/**
 * Check if a Property is related to a Booking.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkProperty: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a Property.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteProperty: (req: Request, res: Response) => Promise<void>;
/**
 * Upload a Property image to temp folder.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const uploadImage: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a temp Property image.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteTempImage: (req: Request, res: Response) => Promise<void>;
/**
 * Delete a Property image.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteImage: (req: Request, res: Response) => Promise<void>;
/**
 * Get a Property by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getProperty: (req: Request, res: Response) => Promise<void>;
/**
 * Get Properties.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getProperties: (req: Request, res: Response) => Promise<void>;
/**
 * Get Properties by Agency and Location.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getBookingProperties: (req: Request, res: Response) => Promise<void>;
/**
 * Get Properties available for rental.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getFrontendProperties: (req: Request, res: Response) => Promise<void>;
