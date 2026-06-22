import * as env from "../config/env.config.js";
/**
 * Creates TTL index.
 *
 * @async
 * @param {Model<T>} model
 * @param {string} name
 * @param {number} expireAfterSeconds
 * @returns {Promise<void>}
 */
export const createTTLIndex = async (model, name, expireAfterSeconds) => {
  await model.collection.createIndex({
    [env.expireAt]: 1
  }, {
    name,
    expireAfterSeconds,
    background: true
  });
};