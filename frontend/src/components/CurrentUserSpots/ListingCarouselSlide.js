import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function ListingCarouselSlide({ spot }) {
  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);

  return (
    <NavLink to={`/spots/${spot?.id}`}>
      <div className="user-listing">
        <img className="swiper-img" src={spot?.previewImage} />
        <p className="carousel-name">
          <AiFillStar />
          {spot?.avgRating ? parseFloat(spot?.avgRating?.toFixed(2)) : "New"}
          <span className="spot-rating-count-num">
            {reviews.length > 0 && " (" + reviews.length + ")"}
          </span>
        </p>
        <p className="carousel-title">
          {spot.access?.slice(0, 1).toUpperCase() + spot.access?.slice(1)}{" "}
          home/apt - {spot.category}
        </p>
        <p className="carousel-title">{spot.name}</p>
      </div>
    </NavLink>
  );
}
