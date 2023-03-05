import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getSpotReviews } from "../../store/reviews";
import { getSpotById } from "../../store/spots";
import { getUsers } from "../../store/users";
import { Modal } from "../../context/Modal";
import ReviewPage from "../ReviewPage";

export default function SingleSpotReviews({ spot, reviewsRef }) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const dispatch = useDispatch();
  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);
  const usersList = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getSpotReviews(spot.id));
  }, [dispatch, spot.id]);

  let count = 0;
  let reviewDate;
  let reviewMonth;
  let reviewMonthNum;
  let reviewYear;
  reviews.forEach((review) => {
    if (review) {
      count++;
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
    <div className="reviews-section">
      <span id="Reviews" className="anchor" ref={reviewsRef}>
        &nbsp;
      </span>
      <div className="review-stats">
        <div className="reviews-top-head">
          {count > 0 && count < 3 ? (
            <div className="reviews-head">
              <h2>
                {count} {count === 1 ? "review" : "reviews"}
              </h2>
              <p>Average rating will appear after 3 reviews</p>
            </div>
          ) : count === 0 ? (
            <div className="reviews-head">
              <h2>No reviews (yet)</h2>
            </div>
          ) : (
            <div className="reviews-head">
              <h2>
                <i className="fa-solid fa-star"></i>
                {+spot.avgRating.toFixed(2)}
                <span className="dot">•</span> {count} reviews
              </h2>
            </div>
          )}

          {currentUser && (
            <button
              className="add-review-btn"
              onClick={() => setShowReviewModal(true)}
            >
              Add Review
            </button>
          )}

          {showReviewModal && (
            <Modal onClose={() => setShowReviewModal(false)}>
              <ReviewPage spot={spot} setShowReviewModal={setShowReviewModal} />
            </Modal>
          )}
        </div>
        <div className="reviews">
          {reviews.map((review) => (
            <div className="review-box">
              <div className="review-author">
                <NavLink to={`/users/${usersList[review.userId]?.id}/profile`}>
                  <img src={usersList[review.userId]?.userImage} />
                </NavLink>
                <div className="review-name">
                  <h3>{review.User?.firstName}</h3>
                  <p>
                    {reviewMonth} {reviewYear}
                  </p>
                </div>
              </div>
              <div className="review-body">{review.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
