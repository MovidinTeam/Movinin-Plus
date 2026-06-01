import mongoose, { Schema, Document } from 'mongoose'

export interface ReviewDocument extends Document {
  property: mongoose.Types.ObjectId
  user: mongoose.Types.ObjectId
  booking?: mongoose.Types.ObjectId
  rating: number
  comment: string
  createdAt: Date
  updatedAt: Date
}

const reviewSchema = new Schema<ReviewDocument>(
  {
    property: {
      type: Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
      index: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
      required: false,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
  }
)

reviewSchema.index({ property: 1, user: 1 }, { unique: true })

const Review = mongoose.model<ReviewDocument>('Review', reviewSchema, 'Review')

export default Review
