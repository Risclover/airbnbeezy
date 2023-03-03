import React, { useState } from "react";
import { Modal } from "../../../../context/Modal";
import CoverPhotoSelectionModal from "./CoverPhotoSelectionModal";

export default function EditPhotos({ spot }) {
  const [showCoverPhotoModal, setShowCoverPhotoModal] = useState(false);

  let photos = spot?.otherImages?.map((image) => image.url);

  console.log("photos:", photos);
  return (
    <div className="photos-page">
      <div className="cover-photo-section">
        <div className="cover-photo-info">
          <h3>Cover photo</h3>
          <p>Your cover photo is a guest's first impression of your listing.</p>
          <button
            className="change-photo-btn"
            onClick={() => setShowCoverPhotoModal(true)}
          >
            Change photo
          </button>
        </div>
        <div className="cover-photo-img-box">
          <img src={spot?.previewImage} className="cover-photo-img" />
        </div>
      </div>
      <div className="all-photos-section">
        <div className="all-photos-head">
          <div className="all-photos-info">
            <h3>All photos</h3>
            <p>Drag and drop your photos to change the order.</p>
          </div>
          <button className="upload-photos-btn">Upload photos</button>
        </div>
        <div className="all-photos-photo-grid">
          {photos.map((photo) => (
            <div className="all-photos-photo">
              <img src={photo} />
            </div>
          ))}
        </div>
        {showCoverPhotoModal && (
          <Modal onClose={() => setShowCoverPhotoModal(false)}>
            <CoverPhotoSelectionModal
              photos={photos}
              setShowCoverPhotoModal={setShowCoverPhotoModal}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}
