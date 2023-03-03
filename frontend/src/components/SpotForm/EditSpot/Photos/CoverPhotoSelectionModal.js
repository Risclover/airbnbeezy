import React from "react";
import "./EditPhotos.css";

export default function CoverPhotoSelectionModal({
  photos,
  setShowCoverPhotoModal,
}) {
  return (
    <div className="cover-photo-selection-modal">
      <div className="loginform-header">
        <button
          onClick={() => setShowCoverPhotoModal(false)}
          className="loginform-close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p>Select a cover photo</p>
        <div></div>
      </div>
      <div className="cover-photo-modal-content">
        {photos.map((photo) => (
          <div className="cover-photo-modal-radio-box">
            <label className="cover-photo-modal-label">
              <input type="radio" className="cover-photo-modal-radiobtn" />
              <img className="cover-photo-modal-photo" src={photo} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
