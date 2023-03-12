import React, { useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import smallLogo from "../../images/small_logo.png";
import Logo from "../../images/airbnbeezy_logo3.png";
import AuthModal from "../LoginFormModal/AuthModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(true);

  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
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
            <img className="site-logo-sm" alt="Small logo" src={smallLogo} />
            <img className="site-logo" alt="Site logo" src={Logo} />
          </Link>
        </div>
        <div className="nav-right">
          {sessionUser !== null ? (
            <button
              className="switch-btn"
              onClick={() => history.push("/create-spot")}
            >
              Airbnbeezy your home?
            </button>
          ) : (
            <button className="switch-btn" onClick={() => setShowModal(true)}>
              Airbnbeezy your home?
            </button>
          )}

          <i className="fa-solid fa-globe no-hover"></i>
          {isLoaded && (
            <ProfileButton
              user={sessionUser}
              setLogin={setLogin}
              setShowModal={setShowModal}
            />
          )}
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AuthModal
              setShowModal={setShowModal}
              login={login}
              setLogin={setLogin}
            />
          </Modal>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
