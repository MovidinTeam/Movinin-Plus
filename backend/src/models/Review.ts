import { Schema, model } from 'mongoose'

const reviewSchema = new Schema({
  itemId: { type: String, required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default model('Review', reviewSchema)