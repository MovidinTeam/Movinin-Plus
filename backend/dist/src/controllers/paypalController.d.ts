import { Request, Response } from 'express';
/**
 * Create PayPal order.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const createPayPalOrder: (req: Request, res: Response) => Promise<void>;
/**
 * Check Paypal order and update booking if the payment succeeded.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkPayPalOrder: (req: Request, res: Response) => Promise<void>;
