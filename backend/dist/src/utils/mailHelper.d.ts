import * as nodemailer from 'nodemailer';
/**
 * Sends an email using the configured SMTP transporter.
 * * @example
 * await sendMail({
 * from: '"Admin" <admin@example.com>',
 * to: "user@example.com",
 * subject: "Hello",
 * text: "Welcome to the platform!"
 * });
 *
 * @param {nodemailer.SendMailOptions} mailOptions - The email content (to, from, subject, body).
 * @returns {Promise<nodemailer.SentMessageInfo>} Result containing messageId and accepted recipients.
 */
export declare const sendMail: (mailOptions: nodemailer.SendMailOptions) => Promise<nodemailer.SentMessageInfo>;
