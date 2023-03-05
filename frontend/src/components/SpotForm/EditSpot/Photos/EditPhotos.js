import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../context/Modal";
import { getSpotImgs } from "../../../../store/spot-images";
import CoverPhotoSelectionModal from "./CoverPhotoSelectionModal";
import PhotoModal from "./PhotoModal";

export default function EditPhotos({ spot }) {
  const dispatch = useDispatch();

  const [showCoverPhotoModal, setShowCoverPhotoModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState();

  let photos = spot?.otherImages?.map((image) => image.url);
  photos?.unshift(spot?.previewImage);

  const spotImages = useSelector((state) => state.spotImages);

  const imageList = [];

  for (let image of Object.values(spotImages)) {
    if (image.spotId === spot.id) {
      imageList.push(image);
    }
  }

  console.log("image list:", imageList);

  useEffect(() => {
    dispatch(getSpotImgs());
  }, []);
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
            <p>Click on a photo to view / delete.</p>
          </div>
          {/* <button className="upload-photos-btn">Upload photos</button> */}
        </div>
        <div className="all-photos-photo-grid">
          {imageList.map((photo) => (
            <div className="all-photos-photo">
              <img
                src={photo.url}
                onClick={() => {
                  setPhotoUrl(photo);
                  setShowPhotoModal(true);
                }}
              />
            </div>
          ))}
        </div>
        {showPhotoModal && (
          <Modal onClose={() => setShowPhotoModal(false)}>
            <PhotoModal
              setShowPhotoModal={setShowPhotoModal}
              photo={photoUrl}
            />
          </Modal>
        )}
        {showCoverPhotoModal && (
          <Modal onClose={() => setShowCoverPhotoModal(false)}>
            <CoverPhotoSelectionModal
              spot={spot}
              photos={photos}
              setShowCoverPhotoModal={setShowCoverPhotoModal}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}
