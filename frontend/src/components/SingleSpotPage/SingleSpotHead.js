import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";

import { getSpotById, deleteSpot } from "../../store/spots";
import { getSpotReviews } from "../../store/reviews";

export default function SingleSpotHead({ count }) {
  const { spotId } = useParams();
  const spot = useSelector(getSpotById(spotId));

  return (
    <div className="spot-head">
      <div className="spot-title">
        <h1>{spot.name}</h1>
      </div>
      <div className="spot-info">
        <div className="spot-info-left">
          <div className="spot-info-stars">
            <i className="fa-solid fa-star"></i>
            {Number(spot.avgRating).toFixed(1)} - {count} reviews
          </div>
          <div className="spot-info-reviews"></div>
          <div className="spot-info-location">
            {spot.city}, {spot.state}, {spot.country}
          </div>
        </div>
        <div className="spot-info-right">
          <div className="spot-info-share">Share</div>
          <div className="spot-info-save">Save</div>
        </div>
      </div>
    </div>
  );
}
