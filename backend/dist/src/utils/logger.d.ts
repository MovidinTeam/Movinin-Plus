/**
 * Logs an informational message.
 *
 * @param {string} message - The message to log.
 * @param {*} [obj] - Optional additional data.
 */
export declare const info: (message: string, obj?: any) => void;
/**
 * Logs a warning message.
 *
 * @param {string} message - The message to log.
 * @param {*} [obj] - Optional additional data.
 */
export declare const warn: (message: string, obj?: any) => void;
/**
 * Logs an error message.
 *
 * @param {string} message - The message to log.
 * @param {unknown} [obj] - Optional additional error or data.
 */
export declare const error: (message: string, obj?: unknown) => void;
/**
 * Enables all logging.
 */
export declare const enableLogging: () => void;
/**
 * Disables all logging.
 */
export declare const disableLogging: () => void;
/**
 * Enables error logging.
 */
export declare const enableErrorLogging: () => void;
/**
 * Disables error logging.
 */
export declare const disableErrorLogging: () => void;
