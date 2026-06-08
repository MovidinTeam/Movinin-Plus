import axiosInstance from './axiosInstance'

export interface ReviewUser {
  _id: string
  fullName: string
  avatar?: string
}

export interface Review {
  _id: string
  property: string
  user: ReviewUser | string
  booking?: string
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
}

export interface PropertyRating {
  averageRating: number
  totalReviews: number
}

export interface CreateReviewPayload {
  property: string
  user: string
  booking?: string
  rating: number
  comment: string
}

export const createReview = (data: CreateReviewPayload): Promise<Review> =>
  axiosInstance
    .post('/create-review', data)
    .then((res) => res.data)

export const getPropertyReviews = (propertyId: string): Promise<Review[]> =>
  axiosInstance
    .get(`/property/${encodeURIComponent(propertyId)}/reviews`)
    .then((res) => res.data)

export const getPropertyRating = (propertyId: string): Promise<PropertyRating> =>
  axiosInstance
    .get(`/property/${encodeURIComponent(propertyId)}/rating`)
    .then((res) => res.data)
