import express from 'express';
import routeNames from "../config/ipinfoRoutes.config.js";
import * as ipinfoController from "../controllers/ipinfoController.js";
const routes = express.Router();
routes.route(routeNames.getCountryCode).get(ipinfoController.getCountryCode);
export default routes;