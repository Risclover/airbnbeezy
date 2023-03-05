import React, { useState, useEffect } from "react";
import "./EditPhotos.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots, getSpotById, updateSpot } from "../../../../store/spots";
import { editSpotImg, getSpotImgs } from "../../../../store/spot-images";

export default function CoverPhotoSelectionModal({
  photos,
  spot,
  setShowCoverPhotoModal,
}) {
  const dispatch = useDispatch();
  const [coverPhoto, setCoverPhoto] = useState();
  const [imgChange, setImgChange] = useState();
  const [newImg, setNewImg] = useState();

  const imgs = useSelector((state) => Object.values(state.spotImages));

  useEffect(() => {
    dispatch(getSpotImgs());

    for (let img of imgs) {
      if (
        img.preview === true &&
        img.url === spot?.previewImage &&
        spot?.id === img.spotId
      ) {
        setImgChange(img);
      }
    }
  }, []);
  console.log("cover:", coverPhoto);
  console.log("img", imgChange);

  const handleChange = () => {
    for (let img of imgs) {
      if (img.url === coverPhoto) {
        setNewImg(img);
      }
    }

    console.log("new img:", newImg);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const payload2 = { preview: false, url: imgChange.url };
    await dispatch(editSpotImg({ payload2 }, imgChange.id));
    const payload = { preview: true, url: newImg.url };
    await dispatch(editSpotImg({ payload }, newImg.id));
    console.log("payload", payload);
    console.log("payload2", payload2);
    dispatch(getAllSpots());
    setShowCoverPhotoModal(false);
  };

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
              <input
                type="radio"
                className="cover-photo-modal-radiobtn"
                name="cover-photo"
                onChange={(e) => {
                  setCoverPhoto(photo);
                  handleChange();
                }}
                value={coverPhoto}
              />
              <img className="cover-photo-modal-photo" src={photo} />
            </label>
          </div>
        ))}
      </div>
      <div className="cover-photo-modal-button-bar">
        <button
          className="cover-photo-modal-cancel"
          onClick={() => setShowCoverPhotoModal(false)}
        >
          Cancel
        </button>
        <button className="cover-photo-modal-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
