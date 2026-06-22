import express from 'express';
import routeNames from "../config/paypalRoutes.config.js";
import * as paypalController from "../controllers/paypalController.js";
const routes = express.Router();
routes.route(routeNames.createPayPalOrder).post(paypalController.createPayPalOrder);
routes.route(routeNames.checkPayPalOrder).post(paypalController.checkPayPalOrder);
export default routes;