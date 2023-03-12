import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers, updateUser } from "../../store/users";

export default function UpdateImageModal({ setShowImageModal, user }) {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const updateImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
    let src = URL.createObjectURL(file);
    setPreviewImage(src);
  };

  const handleImageUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      image,
    };
    setShowImageModal(false);
    await dispatch(updateUser(payload, user.id));
    dispatch(getUsers());
  };

  return (
    <div className="update-image-modal">
      <form>
        <div className="loginform-header">
          <button
            onClick={() => setShowImageModal(false)}
            className="loginform-close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <p>Change Image</p>
          <div></div>
        </div>
        <div className="update-image-content">
          {previewImage && (
            <div className="user-preview-box">
              <img className="user-preview-img" src={previewImage} />
            </div>
          )}
          {!previewImage && (
            <div className="user-preview-box">
              <img className="user-preview-img" src={user.profileImageUrl} />
            </div>
          )}
          <label className="user-img-input-label">
            <span className="update-image">Choose photo</span>
            <input
              className="user-img-input"
              type="file"
              onChange={updateImage}
            />
          </label>
        </div>
        <div className="update-image-btns">
          <button
            className="update-image-cancel"
            onClick={() => setShowImageModal(false)}
          >
            Cancel
          </button>
          <button className="update-image-save" onClick={handleImageUpdate}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
