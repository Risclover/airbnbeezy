import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSpot, getAllSpots } from "../../store/spots";
import { Modal } from "../../context/Modal";
import EditSpot from "../SpotForm/EditSpot/EditSpotOld";
import "./CurrentUserSpots.css";

export default function Listing({ spot }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [style, setStyle] = useState({ display: "none" });
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setShowEditModal(true);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteSpot(id));
  };

  return (
    <div
      className="outer-listing"
      onMouseEnter={() => {
        setStyle({ display: "flex" });
      }}
      onMouseLeave={() => {
        setStyle({ display: "none" });
      }}
    >
      <div key={spot.id} className="listings-box">
        <div className="listing-img">
          <img src={spot.previewImage} />
          <div className="listing-icons" style={style}>
            <button onClick={() => history.push(`/spots/${spot.id}`)}>
              <i className="fa-solid fa-eye"></i>
            </button>
            <button onClick={(e) => handleEdit(e, spot.id)}>
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button
              onClick={(e) => {
                handleDelete(e, spot.id);
                dispatch(getAllSpots());
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
            {showEditModal && (
              <Modal onClose={() => setShowEditModal(false)}>
                <EditSpot
                  setShowEditModal={setShowEditModal}
                  showEditModal={showEditModal}
                  spotToEdit={spot}
                />
              </Modal>
            )}
          </div>
        </div>
        <div className="listings-info-box">
          <ul className="listings-info">
            <li className="listing-name">
              {spot.name}{" "}
              <div className="listing-rating">
                {" "}
                <i className="fa-solid fa-star"></i>
                {Number(spot.avgRating).toFixed(1)}{" "}
              </div>
            </li>
            <li>{spot.address}</li>
            <li>
              {spot.city}, {spot.country}
            </li>
            <li className="listing-price">{spot.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
