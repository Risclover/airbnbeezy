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
import SignupFormPage from "../SignupFormPage";

function Navigation({ isLoaded }) {
  const [showModal, setShowModal] = useState(false);
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
    <ul className="nav">
      <li>
        <Link to="/">
          <img className="site-logo" alt="Site logo" src={Logo} />
        </Link>
      </li>
      <li>
        <SearchBar />
      </li>
      <li>
        <NavLink to="/create-spot">Create a spot</NavLink>
      </li>
      <li>
        {isLoaded && (
          <ProfileButton
            user={sessionUser}
            setLogin={setLogin}
            setShowModal={setShowModal}
          />
        )}
      </li>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {login ? (
            <LoginForm setShowModal={setShowModal} />
          ) : (
            <SignupFormPage setShowModal={setShowModal} />
          )}
        </Modal>
      )}
    </ul>
  );
}
export default Navigation;
