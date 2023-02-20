import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import {
  getAllSpots,
  getSpots,
  getSpotById,
  deleteSpot,
} from "../../store/spots";
import { getUserReviews } from "../../store/reviews";
import { Modal } from "../../context/Modal";

import "./CurrentUserSpots.css";
import EditSpot from "../SpotForm/EditSpot";
import IdentityModal from "./IdentityModal";
import { getUsers } from "../../store/users";
export default function CurrentUserSpots() {
  const [showIdentityModal, setShowIdentityModal] = useState(false);
  const spotsList = useSelector(getSpots);
  let reviews = useSelector((state) => Object.values(state.reviews));
  const sessionUser = useSelector((state) => state.session.user);
  reviews = reviews.filter((review) => review.userId === sessionUser.id);
  const dispatch = useDispatch();

  const { userId } = useParams();

  const user = useSelector((state) => state.users[+userId]);

  useEffect(() => {
    dispatch(getAllSpots());
    dispatch(getUserReviews());
    dispatch(getUsers());
  }, [dispatch]);

  const nav = document.querySelector(".nav");
  nav.style.position = "fixed";

  let userDate = new Date(user?.createdAt);
  let userYear = userDate.getFullYear();
  let userMonth = userDate.getMonth();

  switch (userMonth) {
    case 0:
      userMonth = "January";
      break;
    case 1:
      userMonth = "February";
      break;
    case 2:
      userMonth = "March";
      break;
    case 3:
      userMonth = "April";
      break;
    case 4:
      userMonth = "May";
      break;
    case 5:
      userMonth = "June";
      break;
    case 6:
      userMonth = "July";
      break;
    case 7:
      userMonth = "August";
      break;
    case 8:
      userMonth = "September";
      break;
    case 9:
      userMonth = "October";
      break;
    case 10:
      userMonth = "November";
      break;
    case 11:
      userMonth = "December";
      break;
    default:
      break;
  }

  console.log("USER DATE:", userMonth, userYear);

  let userImg = user?.userImage;
  console.log("USER IMG:", userImg);

  let reviewCount = 0;
  reviews.forEach((review) => {
    reviewCount++;
  });
  if (!reviews) return null;

  let count = 0;

  spotsList.forEach((spot) => {
    if (spot.ownerId === sessionUser.id) {
      count++;
    }
  });

  if (!user) return null;
  return (
    <div className="user-profile">
      <div className="user-info-side">
        <div className="user-image">
          <img src={userImg} />
        </div>
        <ul className="user-bullets">
          <li className="user-reviews">
            <div className="bullet-icon">
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="bullet-text">{reviewCount} reviews</div>
          </li>
          <li className="user-verified">
            <div className="bullet-icon">
              <i className="fa-regular fa-id-card"></i>{" "}
            </div>
            <div className="bullet-text">Identity verified</div>
          </li>
        </ul>
        <div className="user-confirmation">
          <h2>{user?.firstName} confirmed</h2>
          <ul className="user-confirm-bullets">
            <li className="user-identity">
              <i className="fa-solid fa-check"></i> Identity
            </li>
            <li className="user-email">
              <i className="fa-solid fa-check"></i> Email address
            </li>
          </ul>
          <p className="learn-more">
            <button onClick={() => setShowIdentityModal(true)}>
              Learn more
            </button>
            {showIdentityModal && (
              <Modal onClose={() => setShowIdentityModal(false)}>
                <IdentityModal setShowIdentityModal={setShowIdentityModal} />
              </Modal>
            )}
          </p>
        </div>
      </div>
      <div className="user-main">
        <div className="user-head">
          <h1>Hi, I'm {user?.firstName}</h1>
          <p>Joined in {userYear}</p>
        </div>
        <div className="user-listings">
          {count === 0 ? "" : <h2>{user?.firstName}'s listings</h2>}
          <div className="spots">
            {spotsList.map((spot) =>
              spot.ownerId === user?.id ? (
                <div className="outer-spot">
                  <NavLink to={`/spots/${spot.id}`}>
                    <div key={spot.id} className="spot-box">
                      <div className="spot-img">
                        <img src={spot.previewImage} />
                      </div>
                      <ul className="spotcard-info">
                        <li className="spotcard-rating">
                          <i className="fa-solid fa-star"></i>
                          {Number(spot.avgRating).toFixed(1)}{" "}
                        </li>
                        <li className="spotcard-details">
                          <div className="spotcard-location">
                            {spot.city}, {spot.country}
                          </div>
                          {spot.name}
                        </li>
                        {/* <li className="spotcard-title">{spot.name}</li> */}
                        {/* <li className="spotcard-title">{spot.name}</li> */}
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
