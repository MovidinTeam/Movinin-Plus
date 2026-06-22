import mongoose, { Model } from 'mongoose';
import * as env from '../config/env.config';
/**
 * Connects to database.
 *
 * @async
 * @param {string} uri
 * @param {boolean} ssl
 * @param {boolean} debug
 * @returns {Promise<boolean>}
 */
export declare const connect: (uri: string, ssl: boolean, debug: boolean) => Promise<boolean>;
/**
 * Closes database connection.
 *
 * @async
 * @param {boolean} [force=false]
 * @returns {Promise<void>}
 */
export declare const close: (force?: boolean) => Promise<void>;
/**
 * Creates a text index on a model's field.
 *
 * @param {Model<T>} model - The Mongoose model.
 * @param {string} field - The field to index.
 * @param {string} indexName - The desired index name.
 */
export declare const createTextIndex: <T>(model: Model<T>, field: string, indexName: string) => Promise<void>;
/**
 * Updates TTL index.
 *
 * @async
 * @param {Model<T>} model
 * @param {string} name
 * @param {number} seconds
 * @returns {Promise<void>}
 */
export declare const checkAndUpdateTTL: <T>(model: Model<T>, name: string, seconds: number) => Promise<void>;
/**
 * Creates a Model.
 *
 * @async
 * @template T
 * @param {Model<T>} model
 * @param {boolean} createIndexes
 * @returns {Promise<void>}
 */
export declare const createCollection: <T>(model: Model<T>, createIndexes?: boolean) => Promise<void>;
/**
 * Array of Mongoose model constructors used throughout the application.
 * Each element corresponds to a Mongoose model imported from the respective model files.
 *
 * The array is a readonly tuple preserving the exact model constructor types.
 *
 */
export declare const models: readonly [mongoose.Model<env.Booking, {}, {}, {}, mongoose.Document<unknown, {}, env.Booking, {}, mongoose.DefaultSchemaOptions> & env.Booking & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Booking>, mongoose.Model<env.Country, {}, {}, {}, mongoose.Document<unknown, {}, env.Country, {}, mongoose.DefaultSchemaOptions> & env.Country & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Country>, mongoose.Model<env.Location, {}, {}, {}, mongoose.Document<unknown, {}, env.Location, {}, mongoose.DefaultSchemaOptions> & env.Location & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Location>, mongoose.Model<env.LocationValue, {}, {}, {}, mongoose.Document<unknown, {}, env.LocationValue, {}, mongoose.DefaultSchemaOptions> & env.LocationValue & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.LocationValue>, mongoose.Model<env.Notification, {}, {}, {}, mongoose.Document<unknown, {}, env.Notification, {}, mongoose.DefaultSchemaOptions> & env.Notification & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Notification>, mongoose.Model<env.NotificationCounter, {}, {}, {}, mongoose.Document<unknown, {}, env.NotificationCounter, {}, mongoose.DefaultSchemaOptions> & env.NotificationCounter & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.NotificationCounter>, mongoose.Model<env.Property, {}, {}, {}, mongoose.Document<unknown, {}, env.Property, {}, mongoose.DefaultSchemaOptions> & env.Property & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Property>, mongoose.Model<env.PushToken, {}, {}, {}, mongoose.Document<unknown, {}, env.PushToken, {}, mongoose.DefaultSchemaOptions> & env.PushToken & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.PushToken>, mongoose.Model<env.Token, {}, {}, {}, mongoose.Document<unknown, {}, env.Token, {}, mongoose.DefaultSchemaOptions> & env.Token & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Token>, mongoose.Model<env.User, {}, {}, {}, mongoose.Document<unknown, {}, env.User, {}, mongoose.DefaultSchemaOptions> & env.User & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.User>];
/**
 * Initializes database.
 *
 * @async
 * @param {boolean} createIndexes
 * @returns {Promise<boolean>}
 */
export declare const initialize: (createIndexes?: boolean) => Promise<boolean>;
