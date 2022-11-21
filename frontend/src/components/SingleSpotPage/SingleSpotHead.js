import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { getSpotById, deleteSpot } from "../../store/spots";
import { getSpotReviews } from "../../store/reviews";
import ShareModal from "./ShareModal";

export default function SingleSpotHead() {
  const { spotId } = useParams();
  const [showShareModal, setShowShareModal] = useState(false);
  const spot = useSelector(getSpotById(spotId));
  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);
  let count = 0;
  reviews.forEach((review) => {
    if (review) {
      count++;
    }
  });
  return (
    <div className="spot-head">
      <div className="spot-title">
        <h1>{spot.name}</h1>
      </div>
      <div className="spot-head-info">
        <div className="spot-info-left">
          {count === 0 ? (
            <div className="new-spot">
              <i className="fa-solid fa-star"></i> New
            </div>
          ) : (
            <div className="spot-info-stars">
              <i className="fa-solid fa-star"></i>

              {Number(spot.avgRating).toFixed(1) + " • "}
              <a className="reviews-link" href="#Reviews">
                {count + (count === 1 ? " review " : " reviews ")}
              </a>
            </div>
          )}

          <div className="spot-info-spot">•</div>
          <div className="spot-info-location">
            {spot.city}, {spot.state}, {spot.country}
          </div>
        </div>
        <div className="spot-info-right">
          <button
            className="spot-info-right-btn spot-info-share"
            onClick={() => setShowShareModal(true)}
          >
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            Share
          </button>
          {showShareModal && (
            <Modal onClose={() => setShowShareModal(false)}>
              <ShareModal
                setShowShareModal={setShowShareModal}
                image={spot.previewImage}
                title={spot.name}
                spotId={spotId}
              />
            </Modal>
          )}
          {/* <div className="spot-info-right-btn spot-info-save">
            <i class="fa-regular fa-heart"></i>
            <a href="">Save</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
