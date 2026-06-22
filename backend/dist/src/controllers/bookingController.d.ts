import { Request, Response } from 'express';
import * as env from '../config/env.config';
/**
 * Create a Booking.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const create: (req: Request, res: Response) => Promise<void>;
/**
 * Notify a agency or admin.
 *
 * @async
 * @param {env.User} renter
 * @param {string} bookingId
 * @param {env.User} user
 * @param {boolean} notificationMessage
 * @returns {void}
 */
export declare const notify: (renter: env.User, bookingId: string, user: env.User, notificationMessage: string) => Promise<void>;
/**
 * Send checkout confirmation email to renter.
 *
 * @async
 * @param {env.User} user
 * @param {env.Booking} booking
 * @param {boolean} payLater
 * @returns {unknown}
 */
export declare const confirm: (user: env.User, booking: env.Booking, payLater: boolean) => Promise<boolean>;
/**
 * Complete checkout process and create Booking.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkout: (req: Request, res: Response) => Promise<void>;
/**
 * Update Booking.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const update: (req: Request, res: Response) => Promise<void>;
/**
 * Update Booking Status.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const updateStatus: (req: Request, res: Response) => Promise<void>;
/**
 * Delete Bookings.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteBookings: (req: Request, res: Response) => Promise<void>;
/**
 * Delete temporary Booking created from checkout session.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteTempBooking: (req: Request, res: Response) => Promise<void>;
/**
 * Get Booking by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getBooking: (req: Request, res: Response) => Promise<void>;
/**
 * Get Booking by sessionId.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getBookingId: (req: Request, res: Response) => Promise<void>;
/**
 * Get Bookings.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getBookings: (req: Request, res: Response) => Promise<void>;
/**
 * Check if a customer has Bookings.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const hasBookings: (req: Request, res: Response) => Promise<void>;
/**
 * Cancel a Booking.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const cancelBooking: (req: Request, res: Response) => Promise<void>;
