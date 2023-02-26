import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSpotById } from "../../store/spots";

export default function SingleSpotPhotos() {
  const { spotId } = useParams();
  const spot = useSelector(getSpotById(spotId));
  const images = Object.values(spot.otherImages);

  console.log("images:", images);

  return (
    <div className="singlespot-photos-grid">
      <div className="photos-default">
        <img src={spot.previewImage} alt="default image" />
      </div>
      <div className="photos-photo-box-middle">
        <div className="photos-photo-top">
          <img src={images[2]?.url} alt="Bedroom" />
        </div>
        <div className="photos-photo-bottom">
          <img src={images[3]?.url} alt="Bedroom" />
        </div>
      </div>
      <div className="photos-photo-box-right">
        <div className="photos-photo-top">
          <img src={images[2]?.url} alt="Bedroom" />
        </div>
        <div className="photos-photo-bottom">
          <img src={images[3]?.url} alt="Bedroom" />
        </div>
      </div>
    </div>
  );
}
