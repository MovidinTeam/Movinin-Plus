import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Review from '../models/Review'
import Property from '../models/Property'
import User from '../models/User'
import Booking from '../models/Booking'

export const createReview = async (req: Request, res: Response) => {
  try {
    const { property, user, booking, rating, comment } = req.body

    if (!property || !user || !rating || !comment) {
      return res.status(400).send('Missing required fields')
    }

    if (!mongoose.Types.ObjectId.isValid(property)) {
      return res.status(400).send('Invalid property id')
    }

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).send('Invalid user id')
    }

    if (booking && !mongoose.Types.ObjectId.isValid(booking)) {
      return res.status(400).send('Invalid booking id')
    }

    const propertyExists = await Property.exists({ _id: property })
    if (!propertyExists) {
      return res.status(404).send('Property not found')
    }

    const userExists = await User.exists({ _id: user })
    if (!userExists) {
      return res.status(404).send('User not found')
    }

    if (booking) {
      const bookingExists = await Booking.exists({ _id: booking, property, renter: user })
      if (!bookingExists) {
        return res.status(404).send('Booking not found for this user and property')
      }
    }

    const numericRating = Number(rating)

    if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
      return res.status(400).send('Rating must be an integer between 1 and 5')
    }

    const cleanComment = String(comment).trim()

    if (cleanComment.length < 3) {
      return res.status(400).send('Comment is too short')
    }

    const review = await Review.create({
      property,
      user,
      booking: booking || undefined,
      rating: numericRating,
      comment: cleanComment,
    })

    return res.status(201).json(review)
  } catch (err: any) {
    console.error('[review.create]', err)

    if (err?.code === 11000) {
      return res.status(409).send('User already reviewed this property')
    }

    return res.status(500).send('Internal server error')
  }
}

export const getPropertyReviews = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params

    if (!mongoose.Types.ObjectId.isValid(propertyId)) {
      return res.status(400).send('Invalid property id')
    }

    const reviews = await Review.find({ property: propertyId })
      .populate('user', 'fullName avatar')
      .sort({ createdAt: -1 })

    return res.json(reviews)
  } catch (err) {
    console.error('[review.list]', err)
    return res.status(500).send('Internal server error')
  }
}

export const getPropertyRating = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params

    if (!mongoose.Types.ObjectId.isValid(propertyId)) {
      return res.status(400).send('Invalid property id')
    }

    const result = await Review.aggregate([
      {
        $match: {
          property: new mongoose.Types.ObjectId(propertyId),
        },
      },
      {
        $group: {
          _id: '$property',
          averageRating: { $avg: '$rating' },
          totalReviews: { $sum: 1 },
        },
      },
    ])

    if (!result.length) {
      return res.json({
        averageRating: 0,
        totalReviews: 0,
      })
    }

    return res.json({
      averageRating: Number(result[0].averageRating.toFixed(1)),
      totalReviews: result[0].totalReviews,
    })
  } catch (err) {
    console.error('[review.rating]', err)
    return res.status(500).send('Internal server error')
  }
}
  