import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getSpotReviews } from "../../store/reviews";
import "./ReviewPage.css";

export default function ReviewPage({ spot, setShowReviewModal }) {
  const dispatch = useDispatch();

  const [errorValidators, setErrorValidators] = useState([]);
  const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const [hasResponse, setHasResponse] = useState();

  const user = useSelector((state) => state.session.user);
  let reviews = useSelector((state) => Object.values(state.reviews));

  reviews = reviews.filter((review) => review.spotId === spot.id);

  let count = 0;

  reviews.forEach((review) => {
    if (review.userId === user.id) {
      count += 1;
    }
  });

  useEffect(() => {
    const errors = [];
    if (spot.ownerId === user.id) {
      errors.push("You can't review your own listing.");
    } else {
      if (count > 0) {
        errors.push(
          "Sorry, you're only allowed to review a place once. Visit your reviews page to edit existing reviews."
        );
      } else {
        if (stars > 5 || stars < 1) {
          errors.push("Star rating must be between 1 and 5");
        }
        if (review === "") {
          errors.push("Please share your thoughts to leave a review");
        }
      }
    }

    setErrorValidators(errors);
  }, [stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasResponse(false);

    const payload = {
      review,
      stars,
      hasResponse,
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
      <div className="loginform-header">
        <button
          onClick={() => setShowReviewModal(false)}
          className="loginform-close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p>Add a review</p>
        <div></div>
      </div>
      <div className="reviewform-body">
        <ul>
          {errorValidators.length > 0
            ? errorValidators.map((error) => (
                <li className="error-item" key={spot.id}>
                  {error}
                </li>
              ))
            : null}
        </ul>
        {count > 0 ||
          (spot.ownerId === user.id && (
            <form onSubmit={handleSubmit} className="review-form">
              <textarea
                disabled
                value={review}
                onChange={(e) => setReview(e.target.value)}
                col="30"
                placeholder="Write a review about this place."
              ></textarea>
              <div className="rate">
                <input
                  disabled
                  type="radio"
                  id="star5"
                  name="rate"
                  value={5}
                  onChange={handleChange}
                  checked={stars == 5}
                />
                <label htmlFor="star5" title="text"></label>
                <input
                  disabled
                  type="radio"
                  id="star4"
                  name="rate"
                  value={4}
                  onChange={handleChange}
                  checked={stars == 4}
                />
                <label htmlFor="star4" title="text"></label>
                <input
                  disabled
                  type="radio"
                  id="star3"
                  name="rate"
                  value={3}
                  onChange={handleChange}
                  checked={stars == 3}
                />
                <label htmlFor="star3" title="text"></label>
                <input
                  disabled
                  type="radio"
                  id="star2"
                  name="rate"
                  value={2}
                  onChange={handleChange}
                  checked={stars == 2}
                />
                <label htmlFor="star2" title="text"></label>
                <input
                  disabled
                  type="radio"
                  id="star1"
                  name="rate"
                  value={1}
                  onChange={handleChange}
                  checked={stars == 1}
                />
                <label htmlFor="star1" title="text"></label>
              </div>

              <button className="submit-review-disabled" disabled>
                Submit
              </button>
            </form>
          ))}
        {count === 0 && spot.ownerId !== user.id && (
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
        )}
      </div>
    </div>
  );
}
