import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./CurrentUserReviews.css";
import { getUserReviews, removeReview } from "../../store/reviews";

export default function CurrentUserReviews() {
  let reviews = useSelector((state) => Object.values(state.reviews));
  const sessionUser = useSelector((state) => state.session.user);
  reviews = reviews.filter((review) => review.userId === sessionUser.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserReviews());
  }, [dispatch]);

  if (!reviews) return null;
  return (
    <div className="current-user-reviews">
      <div className="reviews-breadcrumbs">
        <NavLink to="/spots/current">Profile</NavLink>{" "}
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "12px",
            width: "12px",
            stroke: "currentcolor",
            strokeWidth: "2.66667",
            overflow: "visible",
          }}
        >
          <g fill="none">
            <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
          </g>
        </svg>{" "}
        Reviews
      </div>

      <h1>Reviews by you</h1>
      <h2>Past reviews you've written</h2>
      <p className="reviews-content">You have not written any reviews yet.</p>
      {reviews.map((review) => (
        <div>
          <p>{review.review}</p>
          <button
            className="remove-review"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeReview(review.id));
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
