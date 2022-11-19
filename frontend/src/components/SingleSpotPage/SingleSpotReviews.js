import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getSpotReviews } from "../../store/reviews";
import { getSpotById } from "../../store/spots";

export default function SingleSpotReviews({ spot }) {
  const dispatch = useDispatch();
  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);

  useEffect(() => {
    dispatch(getSpotReviews(spot.id));
  }, [dispatch, spot.id]);

  let count = 0;
  let reviewDate;

  reviews.forEach((review) => {
    if (review) {
      count++;
      reviewDate = new Date(review.createdAt).toLocaleDateString();
    }
  });

  return (
    <div className="reviews-section">
      <div className="review-stats">
        <span className="star-value">
          Stars: {Number(spot.avgRating).toFixed(1)}
        </span>
        <span className="num-reviews"> Reviews: {count}</span>
        <NavLink to={`/spots/${spot.id}/create-review`}>Add Review</NavLink>

        <div className="reviews">
          {reviews.map((review) => (
            <ul>
              <li>
                {review.review} - {review.stars} - {review.User.firstName} -{" "}
                {reviewDate}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
