import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import "./SingleSpotPage.css";

export default function SingleSpotAllPhotos({ spot, setShowAllPhotos }) {
  return (
    <div className="single-spot-all-photos-wrapper">
      <div className="single-spot-all-photos-header">
        <button
          className="single-spot-all-photos-back-btn"
          onClick={() => setShowAllPhotos(false)}
        >
          <FiChevronLeft />
        </button>
      </div>
      <div className="single-spot-all-photos-page">
        <div className="single-spot-all-photos">
          {spot.otherImages.map((image) => (
            <img src={image.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
