import { Request, Response } from 'express';
/**
 * Frontend Sign Up.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const signup: (req: Request, res: Response) => Promise<void>;
/**
 * Admin Sign Up.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const adminSignup: (req: Request, res: Response) => Promise<void>;
/**
 * Create a User.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const create: (req: Request, res: Response) => Promise<void>;
/**
 * Check a Validation Token.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkToken: (req: Request, res: Response) => Promise<void>;
/**
 * Delete Validation Tokens.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteTokens: (req: Request, res: Response) => Promise<void>;
/**
 * Resend Validation email.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const resend: (req: Request, res: Response) => Promise<void>;
/**
 * Activate a User and set his Password.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const activate: (req: Request, res: Response) => Promise<void>;
/**
 * Sign In.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const signin: (req: Request, res: Response) => Promise<void>;
/**
 * Sign In.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const socialSignin: (req: Request, res: Response) => Promise<void>;
/**
 * Sign out.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const signout: (req: Request, res: Response) => Promise<void>;
/**
 * Get Push Notification Token.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getPushToken: (req: Request, res: Response) => Promise<void>;
/**
 * Create Push Notification Token.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const createPushToken: (req: Request, res: Response) => Promise<void>;
/**
 * Delete Push Notification Token.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deletePushToken: (req: Request, res: Response) => Promise<void>;
/**
 * Validate email.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const validateEmail: (req: Request, res: Response) => Promise<void>;
/**
 * Validate JWT token.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {*}
 */
export declare const validateAccessToken: (req: Request, res: Response) => Promise<void>;
/**
 * Get Validation result as HTML.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const confirmEmail: (req: Request, res: Response) => Promise<void>;
/**
 * Resend Validation email.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const resendLink: (req: Request, res: Response) => Promise<void>;
/**
 * Update User.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const update: (req: Request, res: Response) => Promise<void>;
/**
 * Update email notifications setting.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const updateEmailNotifications: (req: Request, res: Response) => Promise<void>;
/**
 * Update language.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const updateLanguage: (req: Request, res: Response) => Promise<void>;
/**
 * Get User by ID.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getUser: (req: Request, res: Response) => Promise<void>;
/**
 * Upload avatar to temp folder.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const createAvatar: (req: Request, res: Response) => Promise<void>;
/**
 * Update avatar.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const updateAvatar: (req: Request, res: Response) => Promise<void>;
/**
 * Delete avatar.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteAvatar: (req: Request, res: Response) => Promise<void>;
/**
 * Delete temp avatar.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteTempAvatar: (req: Request, res: Response) => Promise<void>;
/**
 * Change password.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const changePassword: (req: Request, res: Response) => Promise<void>;
/**
 * Check password.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const checkPassword: (req: Request, res: Response) => Promise<void>;
/**
 * Get Users.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const getUsers: (req: Request, res: Response) => Promise<void>;
/**
 * Delete Users.
 *
 * @export
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const deleteUsers: (req: Request, res: Response) => Promise<void>;
/**
 * Validate Google reCAPTCHA v3 token.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const verifyRecaptcha: (req: Request, res: Response) => Promise<void>;
/**
 * Send an email. reCAPTCHA is mandatory.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const sendEmail: (req: Request, res: Response) => Promise<void>;
/**
 * Check if password exists.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export declare const hasPassword: (req: Request, res: Response) => Promise<void>;
