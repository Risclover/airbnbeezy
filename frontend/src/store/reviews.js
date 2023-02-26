import { csrfFetch } from "./csrf";
const initialState = {};

const ADD = "reviews/ADD";
const POPULATE = "reviews/POPULATE";
const REMOVE = "reviews/REMOVE";

const add = (review, user, spot) => ({
  type: ADD,
  review,
  user,
  spot,
});

const remove = (reviewId) => ({
  type: REMOVE,
  reviewId,
});

const populate = (reviews) => {
  return { type: POPULATE, reviews };
};

export const getReviewsByOwnerId = (userId) => (state) => state.reviews[userId];

export const getSpotReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(populate(reviews));
    return reviews;
  }
};

export const getAllReviews = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");
  if (response.ok) {
    const reviews = await response.json();
    dispatch(populate(reviews));
    return reviews;
  }
};

export const getUserReviews = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(populate(reviews));
    return reviews;
  }
};

export const addReview = (data, user, spot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spot.id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(add(review, user, spot));
    return review;
  }
};

export const removeReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(remove(reviewId));
    return review;
  }
};

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE:
      const newState = { ...state };
      action.reviews.Reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return { ...newState };
    case ADD:
      return {
        ...state,
        [action.review.id]: { ...action.review, User: action.user },
      };
    case REMOVE:
      let removeState = { ...state };
      delete removeState[action.reviewId];
      return removeState;
    default:
      return state;
  }
}
