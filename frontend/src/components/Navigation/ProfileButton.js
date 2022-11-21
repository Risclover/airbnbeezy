import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import ManageListings from "../CurrentUserSpots/ManageListings";
import LoginFormModal from "../LoginFormModal";

export default function ProfileButton({
  user,
  setLogin,
  setShowModal,
  setShowCreateModal,
}) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.replace("/");
  };

  const mySpots = (e) => {
    e.preventDefault();
    history.replace("/spots/current");
  };

  return (
    <>
      <button className="open-menu" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu &&
        (user ? (
          <div className="profile-dropdown">
            <div className="profile-dropdown-top">
              <ul className="profile-dropdown-ul">
                <li>{user.username}</li>
                <li>{user.email}</li>
              </ul>
            </div>
            <div className="profile-dropdown-top">
              <ul className="profile-dropdown-ul">
                <NavLink to="/spots/current">
                  <li>Manage listings</li>
                </NavLink>
                <li onClick={() => setShowCreateModal(true)}>
                  Airbnbeezy your home
                </li>{" "}
                <NavLink to="/spots/profile">
                  <li>Profile</li>
                </NavLink>
              </ul>
            </div>
            <div className="profile-dropdown-bottom">
              <ul className="profile-dropdown-ul">
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="profile-dropdown">
            <div className="profile-dropdown-top">
              <ul className="profile-dropdown-ul">
                <li
                  className="profile-dropdown-li-bold"
                  onClick={() => {
                    setLogin(true);
                    setShowModal(true);
                  }}
                >
                  Log In
                </li>
                <li
                  onClick={() => {
                    setLogin(false);
                    setShowModal(true);
                  }}
                >
                  Sign Up
                </li>
              </ul>
            </div>
            <div className="profile-dropdown-bottom">
              <ul className="profile-dropdown-ul">
                <li onClick={() => setShowModal(true)}>Airbnbeezy your home</li>
                <li>Host an experience</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
}
