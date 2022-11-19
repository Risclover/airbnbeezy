import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  getAllSpots,
  getSpots,
  getSpotById,
  deleteSpot,
} from "../../store/spots";
import "./CurrentUserSpots.css";
import EditSpot from "../SpotForm/EditSpot";

export default function CurrentUserSpots() {
  const [editSpotId, setEditSpotId] = useState(null);
  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
  const spotToEdit = useSelector((state) => state.spots[editSpotId]);

  const spotsList = useSelector(getSpots);
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const spot = useSelector(getSpotById(editSpotId));

  useEffect(() => {
    setEditSpotId(null);
    dispatch(getAllSpots());
  }, [dispatch, setEditSpotId]);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setEditSpotId(id);
    setShowCreateSpotForm(true);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteSpot(id));
    history.replace("/");
  };

  let content = null;

  if (showCreateSpotForm) {
    content = (
      <div className="create-spot-stuff">
        <EditSpot
          spotToEdit={spotToEdit}
          showCreateSpotForm={showCreateSpotForm}
          setShowCreateSpotForm={setShowCreateSpotForm}
        />
      </div>
    );
  }
  return (
    <div className="user-profile">
      {content}
      <div className="user-info-side">
        <div className="user-image">
          <img src="https://a0.muscache.com/defaults/user_pic-225x225.png" />
        </div>
        <ul className="user-bullets">
          <li className="user-reviews">
            <div className="bullet-icon">
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="bullet-text">112 reviews</div>
          </li>
          <li className="user-verified">
            <div className="bullet-icon">
              <i className="fa-regular fa-id-card"></i>{" "}
            </div>
            <div className="bullet-text">Identity verified</div>
          </li>
        </ul>
        <div className="user-confirmation">
          <h2>{sessionUser.firstName} confirmed</h2>
          <ul className="user-confirm-bullets">
            <li className="user-identity">
              <i className="fa-solid fa-check"></i> Identity
            </li>
            <li className="user-email">
              <i className="fa-solid fa-check"></i> Email address
            </li>
          </ul>
          <p className="learn-more">
            Learn more about how confirming account info helps keep the Airbnb
            community secure.
          </p>
        </div>
      </div>
      <div className="user-main">
        <div className="user-head">
          <h1>Hi, I'm {sessionUser.firstName}.</h1>
          <p>Joined in {sessionUser.createdAt}</p>
        </div>
        <div className="user-listings">
          <h2>{sessionUser.firstName}'s listings</h2>
          <div className="spots">
            {spotsList.map((spot) =>
              spot.ownerId === sessionUser.id ? (
                <div className="outer-spot">
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
                  <NavLink to={`/spots/${spot.id}`}>
                    <div key={spot.id} className="spot-box">
                      <div
                        className="spot-img"
                        style={{
                          backgroundImage: "url(" + spot.previewImage + ")",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <ul className="spotcard-info">
                        <li className="spotcard-rating">
                          <i className="fa-solid fa-star"></i>
                          {Number(spot.avgRating).toFixed(1)}{" "}
                          <span className="spotcard-reviewcount">(10)</span>
                        </li>
                        <li className="spotcard-title">Entire home/apt</li>
                        <li className="spotcard-title">{spot.name}</li>
                      </ul>
                    </div>
                  </NavLink>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="user-reviews">
          <NavLink to="/reviews/current">Reviews by you</NavLink>
        </div>
      </div>
    </div>
  );
}
