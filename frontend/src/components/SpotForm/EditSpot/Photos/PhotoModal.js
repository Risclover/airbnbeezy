import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSpotImg, getSpotImgs } from "../../../../store/spot-images";
import "./EditPhotos.css";

export default function PhotoModal({ photo, setShowPhotoModal }) {
  const dispatch = useDispatch();

  const [sure, setSure] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteSpotImg(photo.id));
    setShowPhotoModal(false);
    dispatch(getSpotImgs());
  };

  return (
    <div className="photo-modal">
      <div className="loginform-header">
        <button
          onClick={() => setShowPhotoModal(false)}
          className="loginform-close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p></p>
        <div></div>
      </div>
      <div className="photo-modal-content">
        <img src={photo.url} />
      </div>
      <div className="photo-modal-button-bar">
        <button
          className="cover-photo-modal-cancel"
          onClick={() => setShowPhotoModal(false)}
        >
          Cancel
        </button>
        {!sure && (
          <button className="photo-modal-delete" onClick={() => setSure(true)}>
            Delete Photo
          </button>
        )}
        {sure && (
          <button className="photo-modal-delete" onClick={handleDelete}>
            You sure?
          </button>
        )}
      </div>
    </div>
  );
}
