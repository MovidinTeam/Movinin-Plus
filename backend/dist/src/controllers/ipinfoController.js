import * as ipinfoHelper from "../utils/ipinfoHelper.js";
/**
 * Returns ISO 2 country code from IP.
 *
 * @async
 * @param {Request} req
 * @param {Response} res
 * @returns {unknown}
 */
export const getCountryCode = async (req, res) => {
  const clientIp = ipinfoHelper.getClientIp(req);
  const countryCode = await ipinfoHelper.getCountryCode(clientIp);
  res.json(countryCode);
};