import { Request, Response } from 'express';
/**
 * Get NotificationCounter by UserID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const notificationCounter: (req: Request, res: Response) => Promise<void>;
/**
 * Get Notifications by UserID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getNotifications: (req: Request, res: Response) => Promise<void>;
/**
 * Mark Notifications as read.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const markAsRead: (req: Request, res: Response) => Promise<void>;
/**
 * Mark Notifications as unread.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const markAsUnRead: (req: Request, res: Response) => Promise<void>;
/**
 * Delete Notifications.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteNotifications: (req: Request, res: Response) => Promise<void>;
