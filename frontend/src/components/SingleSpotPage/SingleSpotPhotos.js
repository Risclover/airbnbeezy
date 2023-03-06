import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";
import { Modal } from "../../context/Modal";
import { getSpotById } from "../../store/spots";
import SingleSpotAllPhotos from "./SingleSpotAllPhotos";

export default function SingleSpotPhotos() {
  const { spotId } = useParams();

  const [showAllPhotos, setShowAllPhotos] = useState(false);

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
        <button
          className="show-all-photos-btn"
          onClick={() => setShowAllPhotos(true)}
        >
          <TbGridDots /> Show All Photos
        </button>
      </div>
      {showAllPhotos && (
        <Modal onClose={() => setShowAllPhotos(false)}>
          <SingleSpotAllPhotos
            spot={spot}
            setShowAllPhotos={setShowAllPhotos}
          />
        </Modal>
      )}
    </div>
  );
}
