import 'dotenv/config';
import * as movininTypes from "../../../../packages/movinin-types/index.js";
import * as env from "../config/env.config.js";
import * as databaseHelper from "../utils/databaseHelper.js";
import User from "../models/User.js";
import * as logger from "../utils/logger.js";
import NotificationCounter from "../models/NotificationCounter.js";
import Notification from "../models/Notification.js";
try {
  const connected = await databaseHelper.connect(env.DB_URI, env.DB_SSL, env.DB_DEBUG);
  if (!connected) {
    logger.error('Failed to connect to the database');
    process.exit(1);
  }
  // delete admin user if it exists
  const adminUser = await User.findOne({
    email: env.ADMIN_EMAIL,
    type: movininTypes.UserType.Admin
  });
  if (adminUser) {
    await NotificationCounter.deleteMany({
      user: adminUser._id
    });
    await Notification.deleteMany({
      user: adminUser._id
    });
    await adminUser.deleteOne();
    logger.info('Admin user deleted successfully');
  } else {
    logger.info('Admin user does not exist');
  }
  process.exit(0);
} catch (err) {
  logger.error('Error during reset:', err);
  process.exit(1);
}