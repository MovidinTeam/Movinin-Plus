import { Request, Response } from 'express';
/**
 * Create Checkout Session.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const createCheckoutSession: (req: Request, res: Response) => Promise<void>;
/**
 * Check Checkout Session and update booking if the payment succeeded.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkCheckoutSession: (req: Request, res: Response) => Promise<void>;
/**
 * Create Payment Intent.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const createPaymentIntent: (req: Request, res: Response) => Promise<void>;
