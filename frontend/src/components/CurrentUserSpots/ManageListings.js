import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { getSpotById, deleteSpot, getSpots } from "../../store/spots";
import EditSpot from "../SpotForm/EditSpot";
import "./CurrentUserSpots.css";

export default function ManageListings() {
  const [editSpotId, setEditSpotId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const spotToEdit = useSelector((state) => state.spots[editSpotId]);
  const spotsList = useSelector(getSpots);

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    setEditSpotId(null);
  }, [setEditSpotId]);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setEditSpotId(id);
    setShowEditModal(true);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteSpot(id));
    history.replace("/");
  };

  let content = null;

  if (showEditModal) {
    content = (
      <div className="create-spot-stuff">
        <EditSpot
          spotToEdit={spotToEdit}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      </div>
    );
  }

  return (
    <div className="user-listings manage">
      {content}
      <div className="spots">
        {spotsList.map((spot) =>
          spot.ownerId === sessionUser.id ? (
            <NavLink to={`/spots/${spot.id}`}>
              <div className="outer-spot">
                <div key={spot.id} className="spot-box">
                  <div className="spot-img">
                    <img src={spot.previewImage} />
                  </div>
                  <div className="spotcard-info-box">
                    <ul className="spotcard-info">
                      <li className="spotcard-rating">
                        <i className="fa-solid fa-star"></i>
                        {Number(spot.avgRating).toFixed(1)}{" "}
                      </li>
                      {/* <li className="spotcard-title">{spot.name}</li> */}
                    </ul>
                    <div className="owner-buttons">
                      <button
                        className="edit-spot"
                        onClick={(e) => handleEdit(e, spot.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-spot"
                        onClick={(e) => handleDelete(e, spot.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
