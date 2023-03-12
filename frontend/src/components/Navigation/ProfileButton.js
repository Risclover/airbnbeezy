import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { getUsers } from "../../store/users";
import { MdMenu } from "react-icons/md";
import * as sessionActions from "../../store/session";
import LoggedIn from "../../images/logged-in-user2.png";
import LoggedOut from "../../images/logged-out-user.png";
import "./Navigation.css";

export default function ProfileButton({ user, setLogin, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const usersList = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.session.user);

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

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.replace("/");
  };

  return (
    <>
      <button className="open-menu" onClick={openMenu}>
        <MdMenu />
        {currentUser !== null &&
          usersList[currentUser?.id]?.profileImageUrl && (
            <img
              className="profile-menu-user-img"
              src={usersList[currentUser?.id]?.profileImageUrl}
            />
          )}
        {currentUser !== null && usersList[currentUser?.id]?.userImage && (
          <img
            className="profile-menu-user-img"
            src={usersList[currentUser?.id]?.userImage}
          />
        )}
        {currentUser === null && (
          <img className="open-menu-circle" src={LoggedOut} />
        )}
        {currentUser !== null &&
          !usersList[currentUser?.id]?.userImage &&
          !usersList[currentUser?.id]?.profileImageUrl && (
            <img className="open-menu-circle" src={LoggedIn} />
          )}
      </button>
      {showMenu &&
        (currentUser ? (
          <div className="profile-dropdown">
            <div className="profile-dropdown-top">
              <ul className="profile-dropdown-ul">
                <li className="no-hover">{user.username}</li>
                <li className="no-hover">{user.email}</li>
              </ul>
            </div>
            <div className="profile-dropdown-top">
              <ul className="profile-dropdown-ul">
                <NavLink to={`/users/${currentUser.id}/profile`}>
                  <li>User Profile</li>
                </NavLink>
                <NavLink to="/my-listings">
                  <li>Manage listings</li>
                </NavLink>
                <NavLink to="/my-bookings">
                  <li>Manage bookings</li>
                </NavLink>
                <NavLink to="/create-spot">
                  <li>Airbnbeezy your home</li>
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
                <li
                  onClick={() => {
                    setLogin(false);
                    setShowModal(true);
                  }}
                >
                  Airbnbeezy your home
                </li>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
}
