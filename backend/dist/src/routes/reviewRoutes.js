import express from 'express';
import { createReview, getPropertyRating, getPropertyReviews } from "../controllers/reviewController.js";
const router = express.Router();
router.post('/create-review', createReview);
router.get('/property/:propertyId/reviews', getPropertyReviews);
router.get('/property/:propertyId/rating', getPropertyRating);
export default router;