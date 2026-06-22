import { NextFunction, Request, Response } from 'express';
/**
 * Allowed methods middleware.
 * Do not allow TRACE method to prevent XST attacks.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {*}
 */
declare const _default: (req: Request, res: Response, next: NextFunction) => void;
export default _default;
