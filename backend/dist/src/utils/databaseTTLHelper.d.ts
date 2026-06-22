import { Model } from 'mongoose';
/**
 * Creates TTL index.
 *
 * @async
 * @param {Model<T>} model
 * @param {string} name
 * @param {number} expireAfterSeconds
 * @returns {Promise<void>}
 */
export declare const createTTLIndex: <T>(model: Model<T>, name: string, expireAfterSeconds: number) => Promise<void>;
