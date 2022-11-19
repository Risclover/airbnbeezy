import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";

export default function ProfileButton({ user, setLogin, setShowModal }) {
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
            <ul className="profile-dropdown-ul">
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>
                <button onClick={(e) => mySpots(e)}>My Spots</button>
              </li>
              <li>
                <NavLink to="/reviews/current">My Reviews</NavLink>
              </li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="profile-dropdown">
            <ul className="profile-dropdown-ul">
              <li>
                <button
                  onClick={() => {
                    setLogin(true);
                    setShowModal(true);
                  }}
                >
                  Log In
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setLogin(false);
                    setShowModal(true);
                  }}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        ))}
    </>
  );
}
