import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./ReviewPage.css";

import { addReview } from "../../store/reviews";
import { getSpotById, getAllSpots } from "../../store/spots";

export default function ReviewPage() {
  const { spotId } = useParams();

  const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const spot = useSelector(getSpotById(spotId));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      review,
      stars,
    };
    let newReview = await dispatch(addReview(payload, user, spot));

    if (newReview) history.push(`/spots/${spotId}`);
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
        <button>Submit</button>
      </form>
    </div>
  );
}
