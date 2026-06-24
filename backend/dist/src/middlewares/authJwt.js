import * as movininTypes from "../../../../packages/movinin-types/index.js";
import * as env from "../config/env.config.js";
import * as helper from "../utils/helper.js";
import * as authHelper from "../utils/authHelper.js";
import * as logger from "../utils/logger.js";
import User from "../models/User.js";
/**
 * Verify authentication token middleware.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const verifyToken = async (req, res, next) => {
  // 1. Get token from cookies or headers
  let token;
  const isAdmin = authHelper.isAdmin(req);
  const isFrontend = authHelper.isFrontend(req);
  if (isAdmin) {
    token = req.signedCookies[env.ADMIN_AUTH_COOKIE_NAME]; // admin
  } else if (isFrontend) {
    token = req.signedCookies[env.FRONTEND_AUTH_COOKIE_NAME]; // frontend
  } else {
    token = req.headers[env.X_ACCESS_TOKEN]; // mobile app and unit tests
  }
  console.log('--------------------------------');
  console.log('URL=', req.originalUrl);
  console.log('METHOD=', req.method);
  console.log('ORIGIN=', req.headers.origin);
  console.log('signedCookies=', req.signedCookies);
  console.log('cookies=', req.cookies);
  console.log('--------------------------------');
  if (!token) {
    res.status(403).send({
      message: 'No token provided!'
    });
    return;
  }
  try {
    // 2. Decrypt and verify the token
    const sessionData = await authHelper.decryptJWT(token);
    if (!sessionData || !helper.isValidObjectId(sessionData.id)) {
      res.status(401).send({
        message: 'Unauthorized!'
      });
      return;
    }
    // 3. Fetch the user and attach to the request object
    const user = await User.findById(sessionData.id);
    if (!user || user.blacklisted) {
      res.status(401).send({
        message: 'Unauthorized!'
      });
      return;
    }
    // 4. Attach user to request for use in the next middleware/controller
    req.user = {
      _id: user._id.toString(),
      type: user.type
    };
    next();
  } catch (err) {
    logger.info('Token verification failed', err);
    res.status(401).send({
      message: 'Unauthorized!'
    });
  }
};
/**
 * Auth for Admin only.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const authAdmin = (req, res, next) => {
  const {
    user
  } = req;
  if (user && user.type === movininTypes.UserType.Admin) {
    next();
  } else {
    res.status(403).send({
      message: 'Require Admin Role!'
    });
  }
};
/**
 * Auth for Admin and Agency.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const authAgency = (req, res, next) => {
  const {
    user
  } = req;
  if (user && (user.type === movininTypes.UserType.Admin || user.type === movininTypes.UserType.Agency)) {
    next();
  } else {
    res.status(403).send({
      message: 'Require Agency or Admin Role!'
    });
  }
};
export default {
  verifyToken,
  authAdmin,
  authAgency
};