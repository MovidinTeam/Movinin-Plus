import { Request } from 'express';
import * as movininTypes from ':movinin-types';
export type SessionData = {
    id: string;
};
/**
 * Sign and return the JWT.
 *
 * @async
 * @param {SessionData} payload
 * @param {?boolean} [stayConnected]
 * @returns {Promise<string>}
 */
export declare const encryptJWT: (payload: SessionData, stayConnected?: boolean) => Promise<string>;
/**
 * Verify the JWT format, verify the JWS signature, validate the JWT Claims Set.
 *
 * @async
 * @param {string} input
 * @returns {Promise<SessionData>}
 */
export declare const decryptJWT: (input: string) => Promise<SessionData>;
/**
 * Check whether the request is from the admin or not.
 *
 * @export
 * @param {Request} req
 * @returns {boolean}
 */
export declare const isAdmin: (req: Request) => boolean;
/**
 * Check whether the request is from the frontend or not.
 *
 * @export
 * @param {Request} req
 * @returns {boolean}
 */
export declare const isFrontend: (req: Request) => boolean;
/**
 * Get authentification cookie name.
 *
 * @param {Request} req
 * @returns {string}
 */
export declare const getAuthCookieName: (req: Request) => string;
/**
 * Hash password using bcrypt.
 *
 * @async
 * @param {string} password
 * @returns {Promise<string>}
 */
export declare const hashPassword: (password: string) => Promise<string>;
/**
 * Validate Access token structure.
 *
 * @param {string} token
 * @returns {Promise<boolean>}
 */
export declare const validateAccessToken: (socialSignInType: movininTypes.SocialSignInType, token: string, email: string) => Promise<boolean>;
/**
 * APPLE: Always a JWT
 */
export declare function verifyAppleToken(token: string, email: string): Promise<boolean>;
/**
 * GOOGLE: Handles ID Tokens (JWT) or Access Tokens (Opaque)
 */
export declare function verifyGoogleToken(token: string, email: string): Promise<boolean>;
/**
 * FACEBOOK: Handles Opaque Access Tokens
 */
export declare function verifyFacebookToken(token: string, email: string): Promise<boolean>;
