import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./ReviewPage.css";

import { addReview, getSpotReviews } from "../../store/reviews";
import { getSpotById, getAllSpots } from "../../store/spots";

export default function ReviewPage({ spot, setShowReviewModal }) {
  const { spotId } = useParams();
  const [errorValidators, setErrorValidators] = useState([]);
  const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);
  let count = 0;
  reviews.forEach((review) => {
    if (review.User.id === user.id) {
      count++;
    }
  });

  useEffect(() => {
    const errors = [];
    if (count > 0) {
      errors.push("Sorry, you're only allowed to review a place once.");
    } else {
      if (stars > 5 || stars < 1) {
        errors.push("Star rating must be between 1 and 5");
      }
      if (review === "") {
        errors.push("Please share your thoughts to leave a review");
      }
    }

    setErrorValidators(errors);
    dispatch(getAllSpots());
    dispatch(getSpotReviews(spotId));
  }, [dispatch, stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    const payload = {
      review,
      stars,
    };
    await dispatch(addReview(payload, user, spot));

    await dispatch(getSpotReviews(spot.id));

    setShowReviewModal(false);
  };

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setStars(target.value);
    }
  };

  if (!spot) return null;
  return (
    <div className="review-page">
      <h1>Add a Review</h1>
      <ul>
        {errorValidators.map((error) => (
          <li key={spot.id}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          col="30"
          placeholder="Write a review about this place."
        ></textarea>
        <div className="rate">
          <input
            type="radio"
            id="star5"
            name="rate"
            value={5}
            onChange={handleChange}
            checked={stars == 5}
          />
          <label htmlFor="star5" title="text"></label>
          <input
            type="radio"
            id="star4"
            name="rate"
            value={4}
            onChange={handleChange}
            checked={stars == 4}
          />
          <label htmlFor="star4" title="text"></label>
          <input
            type="radio"
            id="star3"
            name="rate"
            value={3}
            onChange={handleChange}
            checked={stars == 3}
          />
          <label htmlFor="star3" title="text"></label>
          <input
            type="radio"
            id="star2"
            name="rate"
            value={2}
            onChange={handleChange}
            checked={stars == 2}
          />
          <label htmlFor="star2" title="text"></label>
          <input
            type="radio"
            id="star1"
            name="rate"
            value={1}
            onChange={handleChange}
            checked={stars == 1}
          />
          <label htmlFor="star1" title="text"></label>
        </div>
        <button className="submit-review">Submit</button>
      </form>
    </div>
  );
}
