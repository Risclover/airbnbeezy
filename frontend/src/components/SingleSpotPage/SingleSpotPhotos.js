import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";

import { getSpotById } from "../../store/spots";

export default function SingleSpotPhotos() {
  const { spotId } = useParams();
  const spot = useSelector(getSpotById(spotId));
  const images = Object.values(spot.otherImages);

  return (
    <div className="singlespot-photos-grid">
      <div className="photos-default">
        <img src={spot.previewImage} alt="default image" />
      </div>
      <div className="photos-photo-box-middle">
        <div className="photos-photo-top">
          <img src={images[0]?.url} alt="Bedroom" />
        </div>
        <div className="photos-photo-bottom">
          <img src={images[1]?.url} alt="Bedroom" />
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
      <div className="show-all-photos">
        <button className="show-all-photos-btn">
          <TbGridDots /> Show All Photos
        </button>
      </div>
    </div>
  );
}
