import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAllSpots, getSpots } from "../../store/spots";
import { getUserReviews } from "../../store/reviews";
import { updateUser } from "../../store/users";
import { getUsers } from "../../store/users";
import { RiSuitcaseFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { Helmet } from "react-helmet";
import { Modal } from "../../context/Modal";
import IdentityModal from "./IdentityModal";
import LoggedIn from "../../images/logged-in-user2.png";
import ListingCarousel from "./ListingCarousel";
import UpdateImageModal from "./UpdateImageModal";
import "./CurrentUserSpots.css";

export default function CurrentUserSpots({ setIsCreatePage }) {
  setIsCreatePage(false);

  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.users[+userId]);

  const [showImageModal, setShowImageModal] = useState(false);
  const [showIdentityModal, setShowIdentityModal] = useState(false);
  const [showAboutForm, setShowAboutForm] = useState(false);
  const [about, setAbout] = useState(user?.about);
  const [location, setLocation] = useState(user?.location);
  const [work, setWork] = useState(user?.work);

  const spotsList = useSelector(getSpots);
  let reviews = useSelector((state) => Object.values(state.reviews));
  const currentUser = useSelector((state) => state.session.user);
  reviews = reviews.filter((review) => review.userId === currentUser?.id);

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

  let userImg = user?.profileImageUrl;
  let userImg2 = user?.userImage;

  let reviewCount = reviews.length;

  if (!reviews) return null;

  let count = 0;

  spotsList.forEach((spot) => {
    if (spot.ownerId === user?.id) {
      count++;
    }
  });

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
        {currentUser.id === user?.id && (
          <span
            className="update-image"
            onClick={() => setShowImageModal(true)}
          >
            Update photo
          </span>
        )}
        {showImageModal && (
          <Modal onClose={() => setShowImageModal(false)}>
            <UpdateImageModal
              user={currentUser}
              setShowImageModal={setShowImageModal}
            />
          </Modal>
        )}
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
          </div>
          {currentUser?.id === user?.id && (
            <div className="user-reviews">
              <NavLink to={`/my-reviews`}>Reviews by you</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
