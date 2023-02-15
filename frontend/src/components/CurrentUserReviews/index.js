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

  let reviewDate;
  let reviewMonth;
  let reviewMonthNum;
  let reviewYear;
  reviews.forEach((review) => {
    if (review) {
      reviewDate = new Date(review.createdAt);
      reviewMonthNum = reviewDate.getMonth() + 1;
      reviewYear = reviewDate.getFullYear();
      switch (reviewMonthNum) {
        case 1:
          reviewMonth = "January";
          break;
        case 2:
          reviewMonth = "February";
          break;
        case 3:
          reviewMonth = "March";
          break;
        case 4:
          reviewMonth = "April";
          break;
        case 5:
          reviewMonth = "May";
          break;
        case 6:
          reviewMonth = "June";
          break;
        case 7:
          reviewMonth = "July";
          break;
        case 8:
          reviewMonth = "August";
          break;
        case 9:
          reviewMonth = "September";
          break;
        case 10:
          reviewMonth = "October";
          break;
        case 11:
          reviewMonth = "November";
          break;
        case 12:
          reviewMonth = "December";
          break;
        default:
          reviewMonth = "Null";
          break;
      }
    }
  });

  if (!reviews) return null;
  return (
    <div className="current-user-reviews">
      <div className="reviews-breadcrumbs">
        <NavLink to="/spots/profile">Profile</NavLink>{" "}
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
      <h2>Past reviews you have written</h2>
      {reviews.map((review) => (
        <div className="review-box">
          <div className="review-name">
            <h3>{review.User.firstName}</h3>
            <p>
              {reviewMonth} {reviewYear}
            </p>
          </div>
          <div className="review-body">{review.review}</div>
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
