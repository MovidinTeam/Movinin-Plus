import * as Sentry from '@sentry/node';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import nocache from 'nocache';
import cookieParser from 'cookie-parser';
import i18n from "./lang/i18n.js";
import * as env from "./config/env.config.js";
import cors from "./middlewares/cors.js";
import allowedMethods from "./middlewares/allowedMethods.js";
import agencyRoutes from "./routes/agencyRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";
import paypalRoutes from "./routes/paypalRoutes.js";
import ipinfoRoutes from "./routes/ipinfoRoutes.js";
import * as helper from "./utils/helper.js";
import reviewRoutes from "./routes/reviewRoutes.js";
const app = express();
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use(helmet.originAgentCluster());
app.use(helmet.crossOriginResourcePolicy({
  policy: 'cross-origin'
}));
app.use(helmet.crossOriginOpenerPolicy());
app.use(nocache());
app.use(compression({
  threshold: 0
}));
app.use(express.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(express.json({
  limit: '50mb'
}));
app.use(cors());
// app.options('*', cors())
app.use(cookieParser(env.COOKIE_SECRET));
app.use(allowedMethods);
// Serve static files from the CDN directory
app.use('/cdn', express.static(env.CDN_ROOT));
app.use('/', agencyRoutes);
app.use('/', bookingRoutes);
app.use('/', locationRoutes);
app.use('/', notificationRoutes);
app.use('/', propertyRoutes);
app.use('/', userRoutes);
app.use('/', stripeRoutes);
app.use('/', countryRoutes);
app.use('/', paypalRoutes);
app.use('/', ipinfoRoutes);
app.use('/', reviewRoutes);
if (env.ENABLE_SENTRY) {
  Sentry.setupExpressErrorHandler(app);
}
i18n.locale = env.DEFAULT_LANGUAGE;
helper.mkdir(env.CDN_USERS);
helper.mkdir(env.CDN_TEMP_USERS);
helper.mkdir(env.CDN_PROPERTIES);
helper.mkdir(env.CDN_TEMP_PROPERTIES);
helper.mkdir(env.CDN_LOCATIONS);
helper.mkdir(env.CDN_TEMP_LOCATIONS);
export default app;