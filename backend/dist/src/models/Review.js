import mongoose, { Schema } from 'mongoose';
const reviewSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
    index: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  booking: {
    type: Schema.Types.ObjectId,
    ref: 'Booking',
    required: false
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  }
}, {
  timestamps: true
});
reviewSchema.index({
  property: 1,
  user: 1
}, {
  unique: true
});
const Review = mongoose.model('Review', reviewSchema, 'Review');
export default Review;