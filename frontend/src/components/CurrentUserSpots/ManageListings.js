import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getSpotById, deleteSpot, getSpots } from "../../store/spots";
import EditSpot from "../SpotForm/EditSpot";

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
    <div className="single-spot-page">
      {content}
      {spotsList.map((spot) =>
        spot.ownerId === sessionUser.id ? (
          <div key={spot.id} className="spot">
            <ul>
              <li>
                {spot.name} ${spot.price}
              </li>
              <li>{spot.description}</li>
              <li>{spot.address}</li>
              <li>{spot.city}</li>
              <li>{spot.state}</li>
              <li>
                <img src={spot.previewImage} />
              </li>
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
        ) : (
          ""
        )
      )}
    </div>
  );
}
