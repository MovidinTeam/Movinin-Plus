import React, { useEffect, useState } from 'react'
import {
  Button,
  Rating,
  TextField,
} from '@mui/material'
import * as ReviewService from '@/services/ReviewService'
import * as UserService from '@/services/UserService'
import * as helper from '@/utils/helper'

import '@/assets/css/property-reviews.css'

interface PropertyReviewsProps {
  propertyId: string
}

const PropertyReviews = ({ propertyId }: PropertyReviewsProps) => {
  const [reviews, setReviews] = useState<ReviewService.Review[]>([])
  const [averageRating, setAverageRating] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)
  const [rating, setRating] = useState<number | null>(5)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const currentUser = UserService.getCurrentUser()

  const loadReviews = async () => {
    try {
      const [ratingData, reviewsData] = await Promise.all([
        ReviewService.getPropertyRating(propertyId),
        ReviewService.getPropertyReviews(propertyId),
      ])

      setAverageRating(ratingData.averageRating)
      setTotalReviews(ratingData.totalReviews)
      setReviews(reviewsData)
    } catch (err) {
      helper.error(err)
    }
  }

  useEffect(() => {
    loadReviews()
  }, [propertyId]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!currentUser?._id) {
      helper.error('You must sign in to leave a review.')
      return
    }

    if (!rating) {
      helper.error('Please select a rating.')
      return
    }

    if (!comment.trim()) {
      helper.error('Please write a comment.')
      return
    }

    try {
      setSubmitting(true)

      await ReviewService.createReview({
        property: propertyId,
        user: currentUser._id,
        rating,
        comment: comment.trim(),
      })

      setComment('')
      setRating(5)
      await loadReviews()
    } catch (err) {
      helper.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="property-reviews">
      <div className="property-reviews-header">
        <h3>Reviews</h3>

        <div className="property-reviews-rating">
          <Rating value={averageRating} precision={0.5} readOnly />
          <span>
            {averageRating > 0 ? averageRating.toFixed(1) : '0.0'}
            {' '}
            (
            {totalReviews}
            {' '}
            {totalReviews === 1 ? 'review' : 'reviews'}
            )
          </span>
        </div>
      </div>

      {currentUser?._id ? (
        <form className="property-review-form" onSubmit={handleSubmit}>
          <Rating
            value={rating}
            onChange={(_event, newValue) => setRating(newValue)}
          />

          <TextField
            label="Write your review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            multiline
            minRows={3}
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            disabled={submitting}
            className="btn-submit-review"
          >
            {submitting ? 'Sending...' : 'Submit review'}
          </Button>
        </form>
      ) : (
        <p className="property-review-login-message">
          Sign in to leave a review.
        </p>
      )}

      <div className="property-review-list">
        {reviews.length === 0 && (
          <p className="property-review-empty">No reviews yet.</p>
        )}

        {reviews.map((review) => {
          const user = typeof review.user === 'string' ? null : review.user

          return (
            <div key={review._id} className="property-review-item">
              <div className="property-review-item-header">
                <strong>{user?.fullName || 'User'}</strong>
                <Rating value={review.rating} readOnly size="small" />
              </div>

              <p>{review.comment}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PropertyReviews
