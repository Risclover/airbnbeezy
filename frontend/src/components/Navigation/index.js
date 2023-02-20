import React, { useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import CreateSpot from "../SpotForm/CreateSpot";
import "./Navigation.css";
import Logo from "../../images/airbnbeezy_logo3.png";
import SearchBar from "./SearchBar";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import SpotForm from "../SpotForm";
import SignupFormPage from "../SignupFormPage";

function Navigation({ isLoaded, scroll }) {
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [login, setLogin] = useState(true);
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const openCreateSpot = () => {
    const createSpotForm = document.querySelector(".createspot-form");
    createSpotForm.style.display = "block";
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav>
      <div className="nav">
        <div className="nav-left">
          <Link to="/">
            <img className="site-logo" alt="Site logo" src={Logo} />
          </Link>
        </div>
        <div className="nav-center">
          <SearchBar />
        </div>
        <div className="nav-right">
          {sessionUser ? (
            <button
              className="switch-btn"
              onClick={() => setShowCreateModal(true)}
            >
              Airbnbeezy your home
            </button>
          ) : (
            <button className="switch-btn" onClick={() => setShowModal(true)}>
              Airbnbeezy your home
            </button>
          )}
          {showCreateModal && (
            <Modal onClose={() => setShowCreateModal(false)}>
              <SpotForm setShowCreateModal={setShowCreateModal} />
            </Modal>
          )}
          <i className="fa-solid fa-globe no-hover"></i>
          {isLoaded && (
            <ProfileButton
              user={sessionUser}
              setLogin={setLogin}
              setShowModal={setShowModal}
              setShowCreateModal={setShowCreateModal}
            />
          )}
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {login ? (
              <LoginForm setShowModal={setShowModal} />
            ) : (
              <SignupFormPage setShowModal={setShowModal} />
            )}
          </Modal>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
