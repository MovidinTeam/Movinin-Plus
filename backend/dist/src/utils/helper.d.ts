import Stripe from 'stripe';
/**
 * Convert string to boolean.
 *
 * @export
 * @param {string} input
 * @returns {boolean}
 */
export declare const StringToBoolean: (input: string) => boolean;
/**
 * Check if a file or a folder exists.
 *
 * @export
 * @async
 * @param {string} filePath
 * @returns {Promise<boolean>}
 */
export declare const pathExists: (filePath: string) => Promise<boolean>;
/**
 * Create a folder recursively.
 *
 * @export
 * @async
 * @param {string} folder
 * @param {boolean} recursive
 * @returns {Promise<void>}
 */
export declare const mkdir: (folder: string) => Promise<void>;
/**
 * Removes a start line terminator character from a string.
 *
 * @export
 * @param {string} str
 * @param {string} char
 * @returns {string}
 */
export declare const trimStart: (str: string, char: string) => string;
/**
 * Removes a leading and trailing line terminator character from a string.
 *
 * @export
 * @param {string} str
 * @param {string} char
 * @returns {string}
 */
export declare const trimEnd: (str: string, char: string) => string;
/**
 * Removes a stating, leading and trailing line terminator character from a string.
 *
 * @export
 * @param {string} str
 * @param {string} char
 * @returns {string}
 */
export declare const trim: (str: string, char: string) => string;
/**
 * Join two url parts.
 *
 * @export
 * @param {string} part1
 * @param {string} part2
 * @returns {string}
 */
export declare const joinURL: (part1: string, part2: string) => string;
/**
 * Get filename without extension.
 *
 * @export
 * @param {string} filename
 * @returns {string}
 */
export declare const getFilenameWithoutExtension: (filename: string) => string;
/**
 * Clone an object or an array.
 *
 * @param {*} obj
 * @returns {*}
 */
export declare const clone: (obj: any) => any;
/**
 * Check ObjectId.
 *
 * @param {?string} id
 * @returns {boolean}
 */
export declare const isValidObjectId: (id?: string) => boolean;
/**
 * Check email.
 *
 * @param {string} email
 * @returns {boolean}
 */
export declare const isValidEmail: (email?: string) => boolean;
/**
 * Generate user token.
 *
 * @returns {string}
 */
export declare const generateToken: () => string;
/**
 * The IETF language tag of the locale Checkout is displayed in.
 *
 * @param {string} locale
 * @returns {Stripe.Checkout.SessionCreateParams.Locale}
 */
export declare const getStripeLocale: (locale: string) => Stripe.Checkout.SessionCreateParams.Locale;
/**
 * Format PayPal price.
 *
 * Example:
 * 1          1.00
 * 1.2        1.20
 * 1.341      1.34
 * 1.345      1.34
 * 1.378      1.37
 *
 * @param {number} price
 * @returns {string}
 */
export declare const formatPayPalPrice: (price: number) => string;
/**
 * Delay in milliseconds.
 *
 * @param {number} ms
 * @returns {*}
 */
export declare const delay: (ms: number) => Promise<unknown>;
/**
 * Safe stringify object.
 *
 * @param {*} obj
 * @returns {string}
 */
export declare const safeStringify: (obj: any) => string;
/**
 * Validate language code (ISO 639-1).
 *
 * @param {string} lang
 * @returns {boolean}
 */
export declare const validateLanguage: (lang: string) => boolean;
