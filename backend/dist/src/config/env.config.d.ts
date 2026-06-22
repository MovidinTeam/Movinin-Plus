import { Document, Types } from 'mongoose';
import { CookieOptions } from 'express';
import * as movininTypes from ':movinin-types';
/**
 * Get environment variable value.
 *
 * @param {string} name
 * @param {?boolean} [required]
 * @param {?string} [defaultValue]
 * @returns {string}
 */
export declare const __env__: (name: string, required?: boolean, defaultValue?: string) => string;
/**
 * ISO 639-1 language codes supported
 * https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 *
 * @type {string[]}
 */
export declare const LANGUAGES: string[];
/**
 * Name of the field used for TTL (Time-To-Live) index expiration.
 * MongoDB automatically deletes documents when the date in this field is reached.
 *
 * @constant
 * @type {string}
 */
export declare const expireAt = "expireAt";
/**
 * Website name.
 *
 * @type {string}
 */
export declare const WEBSITE_NAME: string;
/**
 * Indicate whether we are in CI environment or not.
 *
 * @type {boolean}
 */
export declare const CI: boolean;
/**
 * Number of documents to process per batch when deleting obsolete language values.
 * This helps avoid large memory usage and improves performance during deletions.
 * Default is 1000.
 *
 * @type {number}
 */
export declare const BATCH_SIZE: number;
/**
 * Server Port. Default is 4004.
 *
 * @type {number}
 */
export declare const PORT: number;
/**
 * Indicate whether HTTPS is enabled or not.
 *
 * @type {boolean}
 */
export declare const HTTPS: boolean;
/**
 * Private SSL key filepath.
 *
 * @type {string}
 */
export declare const PRIVATE_KEY: string;
/**
 * Private SSL certificate filepath.
 *
 * @type {string}
 */
export declare const CERTIFICATE: string;
/**
 * MongoDB database URI. Default is: mongodb://127.0.0.1:27017/movinin?authSource=admin&appName=movinin
 *
 * @type {string}
 */
export declare const DB_URI: string;
/**
 * Indicate whether MongoDB SSL is enabled or not.
 *
 * @type {boolean}
 */
export declare const DB_SSL: boolean;
/**
 * MongoDB SSL certificate filepath.
 *
 * @type {string}
 */
export declare const DB_SSL_CERT: string;
/**
 * MongoDB SSL CA certificate filepath.
 *
 * @type {string}
 */
export declare const DB_SSL_CA: string;
/**
 * Indicate whether MongoDB debug is enabled or not.
 *
 * @type {boolean}
 */
export declare const DB_DEBUG: boolean;
/**
 * Indicate whether server-side JavaScript, such as $where, $function, $accumulator and map-reduce are supported.
 *
 * @type {boolean}
 */
export declare const DB_SERVER_SIDE_JAVASCRIPT: boolean;
/**
 * Cookie secret. It should at least be 32 characters long, but the longer the better.
 *
 * @type {string}
 */
export declare const COOKIE_SECRET: string;
/**
 * Authentication cookie domain.
 * Default is localhost.
 *
 * @type {string}
 */
export declare const AUTH_COOKIE_DOMAIN: string;
/**
 * Cookie options.
 *
 * On production, authentication cookies are httpOnly, signed, secure and strict sameSite.
 * This will prevent XSS attacks by not allowing access to the cookie via JavaScript.
 * This will prevent CSRF attacks by not allowing the browser to send the cookie along with cross-site requests.
 * This will prevent MITM attacks by only allowing the cookie to be sent over HTTPS.
 * Authentication cookies are protected against XST attacks as well by disabling TRACE HTTP method via allowedMethods middleware.
 *
 * @type {CookieOptions}
 */
export declare const COOKIE_OPTIONS: CookieOptions;
/**
 * frontend authentication cookie name.
 *
 * @type {"mi-x-access-token-frontend"}
 */
export declare const FRONTEND_AUTH_COOKIE_NAME = "mi-x-access-token-frontend";
/**
 * Admin authentication cookie name.
 *
 * @type {"mi-x-access-token-frontend"}
 */
export declare const ADMIN_AUTH_COOKIE_NAME = "mi-x-access-token-admin";
/**
 * Mobile App and unit tests authentication header name.
 *
 * @type {"x-access-token"}
 */
export declare const X_ACCESS_TOKEN = "x-access-token";
/**
 * JWT secret. It should at least be 32 characters long, but the longer the better.
 *
 * @type {string}
 */
export declare const JWT_SECRET: string;
/**
 * JWT expiration in seconds. Default is 86400 seconds.
 *
 * @type {number}
 */
export declare const JWT_EXPIRE_AT: number;
/**
 * Validation Token expiration in seconds. Default is 86400 seconds.
 *
 * @type {number}
 */
export declare const TOKEN_EXPIRE_AT: number;
/**
 * SMTP host.
 *
 * @type {string}
 */
export declare const SMTP_HOST: string;
/**
 * SMTP port.
 *
 * @type {number}
 */
export declare const SMTP_PORT: number;
/**
 * SMTP username.
 *
 * @type {string}
 */
export declare const SMTP_USER: string;
/**
 * SMTP password.
 *
 * @type {string}
 */
export declare const SMTP_PASS: string;
/**
 * SMTP from email.
 *
 * @type {string}
 */
export declare const SMTP_FROM: string;
/**
 * CDN root folder path.
 *
 * @type {string}
 */
export declare const CDN_ROOT: string;
/**
 * Users' cdn folder path.
 *
 * @type {string}
 */
export declare const CDN_USERS: string;
/**
 * Users' temp cdn folder path.
 *
 * @type {string}
 */
export declare const CDN_TEMP_USERS: string;
/**
 * Properties' cdn folder path.
 *
 * @type {string}
 */
export declare const CDN_PROPERTIES: string;
/**
 * Properties' temp cdn folder path.
 *
 * @type {string}
 */
export declare const CDN_TEMP_PROPERTIES: string;
/**
 * Locations' cdn folder path.
 *
 * @type {string}
 */
export declare const CDN_LOCATIONS: string;
/**
 * Locations' temp cdn folder path.
 *
 * @type {string}
 */
export declare const CDN_TEMP_LOCATIONS: string;
/**
 * Admin host.
 *
 * @type {string}
 */
export declare const ADMIN_HOST: string;
/**
 * Frontend host.
 *
 * @type {string}
 */
export declare const FRONTEND_HOST: string;
/**
 * Default language. Default is en. Available options: en, fr.
 *
 * @type {string}
 */
export declare const DEFAULT_LANGUAGE: string;
/**
 * Default Minimum age for rental. Default is 21 years.
 *
 * @type {number}
 */
export declare const MINIMUM_AGE: number;
/**
 * Expo push access token.
 *
 * @type {string}
 */
export declare const EXPO_ACCESS_TOKEN: string;
/**
 * Timezone for cenverting dates from UTC to local time.
 * Must be a valid TZ idenfidier: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * Default is UTC.
 *
 * @type {string}
 */
export declare const TIMEZONE: string;
/**
 * Stripe secret key.
 *
 * @type {string}
 */
export declare const STRIPE_SECRET_KEY: string;
/**
 * Stripe Checkout Session expiration in seconds. Should be at least 1800 seconds (30min) and max 82800 seconds. Default is 82800 seconds (~23h).
 * If the value is lower than 1800 seconds, it wil be set to 1800 seconds.
 * If the value is greater than 82800 seconds, it wil be set to 82800 seconds.
 *
 * @type {number}
 */
export declare const STRIPE_SESSION_EXPIRE_AT: number;
/**
 * Indicates whether PayPal is used in sandbox mode or production.
 *
 * @type {boolean}
 */
export declare const PAYPAL_SANDBOX: boolean;
/**
 * PayPal client ID.
 *
 * @type {string}
 */
export declare const PAYPAL_CLIENT_ID: string;
/**
 * PayPal client secret.
 *
 * @type {string}
 */
export declare const PAYPAL_CLIENT_SECRET: string;
/**
 * Booking expiration in seconds.
 * Bookings created from checkout with Stripe are temporary and are automatically deleted if the payment checkout session expires.
 *
 * @type {number}
 */
export declare const BOOKING_EXPIRE_AT: number;
/**
 * User expiration in seconds.
 * Non verified and active users created from checkout with Stripe are temporary and are automatically deleted if the payment checkout session expires.
 *
 *
 * @type {number}
 */
export declare const USER_EXPIRE_AT: number;
/**
 * Private SSL key filepath.
 *
 * @type {string}
 */
export declare const ADMIN_EMAIL: string;
/**
 * Google reCAPTCHA v3 secret key.
 *
 * @type {string}
 */
export declare const RECAPTCHA_SECRET: string;
/**
 * ipinfo.io API key.
 * Required for more tha, 1000 requests/day.
 *
 * @type {string}
 */
export declare const IPINFO_API_KEY: string;
/**
 * Default ISO 2 country code ipinfo.io.
 *
 * @type {string}
 */
export declare const IPINFO_DEFAULT_COUNTRY: string;
/**
 * Enables or disables Sentry error reporting. Set to true to enable.
 *
 * @type {boolean}
 */
export declare const ENABLE_SENTRY: boolean;
/**
 * The Sentry DSN (Data Source Name) used to identify your backend project.
 *
 * @type {string}
 */
export declare const SENTRY_DSN_BACKEND: string;
/**
 * Sentry traces sample rate.
 * Set to 1.0 to capture 100% of transactions for tracing.
 * 0.1 means 10% of transactions will be sent to Sentry.
 * 0 means no transactions will be sent to Sentry.
 * We recommend adjusting this value in production to avoid high data volume and costs.
 *
 * Learn more at
 * https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#tracesSampleRate
 *
 * @type {number}
 */
export declare const SENTRY_TRACES_SAMPLE_RATE: number;
/**
 * Apple Web client ID.
 *
 * @type {string}
 */
export declare const APPLE_CLIENT_ID_WEB: string;
/**
 * Apple Mobile client ID.
 *
 * @type {string}
 */
export declare const APPLE_CLIENT_ID_MOBILE: string;
/**
 * Google client ID.
 *
 * @type {string}
 */
export declare const GOOGLE_CLIENT_ID: string;
/**
 * Google mobile app Web client ID.
 *
 * @type {string}
 */
export declare const GOOGLE_MOBILE_CLIENT_ID: string;
/**
 * Facebook App ID.
 *
 * @type {string}
 */
export declare const FACEBOOK_APP_ID: string;
/**
 * Facebook App Secret.
 *
 * @type {string}
 */
export declare const FACEBOOK_APP_SECRET: string;
/**
 * User Document.
 *
 * @export
 * @interface User
 * @typedef {User}
 * @extends {Document}
 */
export interface User extends Document {
    agency?: Types.ObjectId;
    fullName: string;
    email: string;
    phone?: string;
    password?: string;
    birthDate?: Date;
    verified?: boolean;
    verifiedAt?: Date;
    active?: boolean;
    language: string;
    enableEmailNotifications?: boolean;
    avatar?: string;
    bio?: string;
    location?: string;
    type?: movininTypes.UserType;
    blacklisted?: boolean;
    payLater?: boolean;
    customerId?: string;
    expireAt?: Date;
}
/**
 * UserInfo.
 *
 * @export
 * @interface UserInfo
 * @typedef {UserInfo}
 */
export interface UserInfo {
    _id?: Types.ObjectId;
    agency?: Types.ObjectId;
    fullName: string;
    email?: string;
    phone?: string;
    password?: string;
    birthDate?: Date;
    verified?: boolean;
    verifiedAt?: Date;
    active?: boolean;
    language?: string;
    enableEmailNotifications?: boolean;
    avatar?: string;
    bio?: string;
    location?: string;
    type?: string;
    blacklisted?: boolean;
    payLater?: boolean;
}
/**
 * Booking Document.
 *
 * @export
 * @interface Booking
 * @typedef {Booking}
 * @extends {Document}
 */
export interface Booking extends Document {
    agency: Types.ObjectId;
    location: Types.ObjectId;
    property: Types.ObjectId;
    renter: Types.ObjectId;
    from: Date;
    to: Date;
    status: movininTypes.BookingStatus;
    cancellation?: boolean;
    cancelRequest?: boolean;
    price: number;
    sessionId?: string;
    paymentIntentId?: string;
    customerId?: string;
    expireAt?: Date;
    paypalOrderId?: string;
}
/**
 * BookingInfo.
 *
 * @export
 * @interface BookingInfo
 * @typedef {BookingInfo}
 */
export interface BookingInfo {
    _id?: Types.ObjectId;
    agency: UserInfo;
    property: Types.ObjectId;
    renter: UserInfo;
    from: Date;
    to: Date;
    status: movininTypes.BookingStatus;
    cancellation?: boolean;
    cancelRequest?: boolean;
    price: number;
}
/**
 * LocationValue Document.
 *
 * @export
 * @interface LocationValue
 * @typedef {LocationValue}
 * @extends {Document}
 */
export interface LocationValue extends Document {
    language: string;
    value: string;
}
/**
 * Country Document.
 *
 * @export
 * @interface Location
 * @typedef {Location}
 * @extends {Document}
 */
export interface Country extends Document {
    values: Types.ObjectId[];
    name?: string;
}
/**
 *CountryInfo.
 *
 * @export
 * @interface CountryInfo
 * @typedef {CountryInfo}
 */
export interface CountryInfo {
    _id?: Types.ObjectId;
    name?: string;
    values: LocationValue[];
}
/**
 * Location Document.
 *
 * @export
 * @interface Location
 * @typedef {Location}
 * @extends {Document}
 */
export interface Location extends Document {
    country: Types.ObjectId;
    longitude?: number;
    latitude?: number;
    values: Types.ObjectId[];
    name?: string;
    image?: string | null;
    parentLocation?: Types.ObjectId;
}
/**
 *LocationInfo.
 *
 * @export
 * @interface LocationInfo
 * @typedef {LocationInfo}
 */
export interface LocationInfo {
    _id?: Types.ObjectId;
    longitude: number;
    latitude: number;
    name?: string;
    image?: string | null;
    values: LocationValue[];
    parentLocation?: Types.ObjectId;
}
/**
 * Notification Document.
 *
 * @export
 * @interface Notification
 * @typedef {Notification}
 * @extends {Document}
 */
export interface Notification extends Document {
    user: Types.ObjectId;
    message: string;
    booking: Types.ObjectId;
    isRead?: boolean;
}
/**
 * NotificationCounter Document.
 *
 * @export
 * @interface NotificationCounter
 * @typedef {NotificationCounter}
 * @extends {Document}
 */
export interface NotificationCounter extends Document {
    user: Types.ObjectId;
    count?: number;
}
/**
 * Property Document.
 *
 * @export
 * @interface Property
 * @typedef {Property}
 * @extends {Document}
 */
export interface Property extends Document {
    name: string;
    type: movininTypes.PropertyType;
    agency: Types.ObjectId;
    description: string;
    image: string;
    images?: string[];
    bedrooms: number;
    bathrooms: number;
    kitchens?: number;
    parkingSpaces?: number;
    size?: number;
    petsAllowed: boolean;
    furnished: boolean;
    minimumAge: number;
    location: Types.ObjectId;
    address?: string;
    latitude?: number;
    longitude?: number;
    price: number;
    hidden?: boolean;
    cancellation?: number;
    aircon?: boolean;
    available?: boolean;
    rentalTerm: movininTypes.RentalTerm;
    blockOnPay?: boolean;
}
/**
 * PropertyInfo.
 *
 * @export
 * @interface PropertyInfo
 * @typedef {PropertyInfo}
 * @extends {Document}
 */
export interface PropertyInfo extends Document {
    name: string;
    type: movininTypes.PropertyType;
    agency: UserInfo;
    description: string;
    image: string;
    images?: string[];
    bedrooms: number;
    bathrooms: number;
    kitchens?: number;
    parkingSpaces?: number;
    size: number;
    petsAllowed: boolean;
    furnished: boolean;
    minimumAge: number;
    location: Types.ObjectId;
    address?: string;
    price: number;
    hidden?: boolean;
    cancellation?: boolean;
    rentalTerm: movininTypes.RentalTerm;
}
/**
 * PushToken Document.
 *
 * @export
 * @interface PushToken
 * @typedef {PushToken}
 * @extends {Document}
 */
export interface PushToken extends Document {
    user: Types.ObjectId;
    token: string;
}
/**
 * Token Document.
 *
 * @export
 * @interface Token
 * @typedef {Token}
 * @extends {Document}
 */
export interface Token extends Document {
    user: Types.ObjectId;
    token: string;
    expireAt?: Date;
}
/**
 * Allowed driver's license file extensions.
 *
 * @type {string[]}
 */
export declare const allowedImageExtensions: string[];
