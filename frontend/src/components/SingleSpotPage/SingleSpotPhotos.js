import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSpotById } from "../../store/spots";

export default function SingleSpotPhotos() {
  const { spotId } = useParams();
  const spot = useSelector(getSpotById(spotId));

  return (
    <div className="singlespot-photos-grid">
      <div className="photos-default">
        <img src={spot.previewImage} alt="default image" />
      </div>
      <div className="photos-photo">
        <img
          src="http://cdn.home-designing.com/wp-content/uploads/2018/09/cool-chairs-for-teen-bedrooms.jpg"
          alt="Bedroom"
        />
      </div>
      <div className="photos-photo">
        <img
          src="http://cdn.home-designing.com/wp-content/uploads/2018/09/cool-chairs-for-teen-bedrooms.jpg"
          alt="Bedroom"
        />
      </div>
      <div className="photos-photo">
        <img
          src="http://cdn.home-designing.com/wp-content/uploads/2018/09/cool-chairs-for-teen-bedrooms.jpg"
          alt="Bedroom"
        />
      </div>
      <div className="photos-photo">
        <img
          src="http://cdn.home-designing.com/wp-content/uploads/2018/09/cool-chairs-for-teen-bedrooms.jpg"
          alt="Bedroom"
        />
      </div>
    </div>
  );
}
