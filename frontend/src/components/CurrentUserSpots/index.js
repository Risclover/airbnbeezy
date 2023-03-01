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
import { updateUser } from "../../store/users";
import "./CurrentUserSpots.css";
import EditSpot from "../SpotForm/EditSpot/EditSpotOld";
import IdentityModal from "./IdentityModal";
import { getUsers } from "../../store/users";
import { RiSuitcaseFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import LoggedIn from "../../images/logged-in-user2.png";
import { Helmet } from "react-helmet";
import ListingCarousel from "./ListingCarousel";

export default function CurrentUserSpots() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.users[+userId]);

  const [showIdentityModal, setShowIdentityModal] = useState(false);
  const [showAboutForm, setShowAboutForm] = useState(false);
  const [about, setAbout] = useState(user?.about);
  const [location, setLocation] = useState(user?.location);
  const [work, setWork] = useState(user?.work);

  const spotsList = useSelector(getSpots);
  let reviews = useSelector((state) => Object.values(state.reviews));
  const sessionUser = useSelector((state) => state.session.user);
  reviews = reviews.filter((review) => review.userId === sessionUser.id);
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllSpots());
    dispatch(getUserReviews());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (about === "") setAbout(null);
    if (work === "") setWork(null);
    if (location === "") setLocation(null);
  }, [about, work, location]);

  const nav = document.querySelector(".nav");
  nav.style.position = "fixed";

  let userDate = new Date(user?.createdAt);
  let userYear = userDate.getFullYear();
  let userMonth = userDate.getMonth();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "98af759825msh05127f453af56adp18afc5jsn0ef7b1c539fa",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  fetch(
    `https://airbnb13.p.rapidapi.com/autocomplete?query=${location}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  let userImg = user?.profileImageUrl;
  let userImg2 = user?.userImage;

  let reviewCount = reviews.length;
  console.log("REVIEW COUNT:", reviewCount);

  if (!reviews) return null;

  let count = 0;

  spotsList.forEach((spot) => {
    if (spot.ownerId === user?.id) {
      count++;
    }
  });

  // if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const payload = {
      id: userId,
      about: about,
      location: location,
      work: work,
    };
    await dispatch(updateUser(payload));
    await dispatch(getUsers());
    setShowAboutForm(false);
  };

  return (
    <div className="user-profile">
      <Helmet>
        <title>{`${user?.firstName}'s Profile`}</title>
      </Helmet>
      <div className="user-info-side">
        <div className="user-image">
          {user?.profileImageUrl && <img src={userImg} />}
          {user?.userImage && <img src={userImg2} />}
          {!user?.userImage && !user?.profileImageUrl && <img src={LoggedIn} />}
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
        <div className="user-main-details">
          <div className="user-head">
            <h1>Hi, I'm {user?.firstName}</h1>
            <p>Joined in {userYear}</p>
            {currentUser?.id === user?.id && (
              <div>
                <button
                  className={
                    showAboutForm
                      ? "edit-profile-btn about-form-open"
                      : "edit-profile-btn"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAboutForm(true);
                  }}
                >
                  Edit profile
                </button>
              </div>
            )}
          </div>
          {!showAboutForm &&
            (user?.about !== null ||
              user?.location !== null ||
              user?.work !== null) && (
              <div className="user-about-section">
                <h2>About</h2>
                {user?.about !== null && (
                  <div className="user-about">{user?.about}</div>
                )}
                <div className="user-about-details">
                  {user?.location !== null && (
                    <div className="user-about-detail">
                      {" "}
                      <ImHome />
                      Lives in {user?.location}
                    </div>
                  )}
                  {user?.work !== null && (
                    <div className="user-about-detail">
                      <RiSuitcaseFill />
                      Work: {user?.work}
                    </div>
                  )}
                </div>
              </div>
            )}
          {showAboutForm && (
            <form>
              <div className="about-form-field">
                <label for="about-form-about">
                  About
                  <div className="fake-textarea">
                    <textarea
                      id="about-form-about"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                  </div>
                </label>
              </div>
              <div className="about-form-field">
                <label for="about-form-location">
                  Location
                  <div className="fake-input">
                    <input
                      id="about-form-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <div className="about-form-field">
                <label for="about-form-work">
                  Work
                  <div className="fake-input">
                    <input
                      id="about-form-work"
                      value={work}
                      onChange={(e) => setWork(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <div className="about-form-field about-form-btns">
                <button
                  className="about-form-cancel"
                  onClick={() => setShowAboutForm(false)}
                >
                  Cancel
                </button>
                <button className="about-form-save" onClick={handleUpdate}>
                  Save
                </button>
              </div>
            </form>
          )}
          <div className="user-listings">
            {count === 0 ? "" : <h2>{user?.firstName}'s listings</h2>}
            <ListingCarousel spotsList={spotsList} user={user} />
            {/* <div className="spots">
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
                          <li className="spotcard-title">{spot.name}</li>
                          <li className="spotcard-title">{spot.name}</li>
                        </ul>
                      </div>
                    </NavLink>
                  </div>
                ) : (
                  ""
                )
              )}
            </div> */}
          </div>
          <div className="user-reviews">
            <NavLink to={`/users/${userId}/reviews`}>Reviews by you</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
