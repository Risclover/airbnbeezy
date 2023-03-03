import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSpotReviews } from "../../store/reviews";
import { AiFillStar } from "react-icons/ai";

export default function ListingCarouselSlide({ spot }) {
  const dispatch = useDispatch();
  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);

  useEffect(() => {
    dispatch(getSpotReviews(spot.id));
  }, [spot.id]);

  return (
    <NavLink to={`/spots/${spot?.id}`}>
      <div className="user-listing">
        <img className="swiper-img" src={spot?.previewImage} />
        <p className="carousel-name">
          <AiFillStar />
          {spot?.avgRating ? parseFloat(spot?.avgRating?.toFixed(2)) : "New"}
          {reviews.length > 3 && " (" + reviews.length + ")"}
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
