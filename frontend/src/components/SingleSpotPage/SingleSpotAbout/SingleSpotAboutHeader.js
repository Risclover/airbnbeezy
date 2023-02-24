import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../store/users";
import "./SingleSpotAbout.css";

export default function SingleSpotAboutHeader({ spot }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const usersList = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="single-spot-about-header">
      <div className="single-spot-about-header-details">
        <h2>
          Private room in condo hosted by {usersList[spot.ownerId]?.username}
        </h2>
        <div className="single-spot-about-rooms">
          {spot.guests === 1 ? spot.guests + " guest" : spot.guests + " guests"}{" "}
          <i class="fa-solid fa-circle"></i>
          {spot.bedrooms > 1 || spot.bedrooms === 0
            ? spot.bedrooms + " bedrooms"
            : spot.bedrooms + " bedroom"}{" "}
          <i class="fa-solid fa-circle"></i>{" "}
          {spot.beds === 1 ? spot.beds + " bed" : spot.beds + " beds"}{" "}
          <i class="fa-solid fa-circle"></i>{" "}
          {spot.bathrooms === 1
            ? spot.bathrooms + " bath"
            : spot.bathrooms + " baths"}
        </div>
      </div>
      <NavLink to={`/users/${usersList[spot.ownerId]?.id}/profile`}>
        <img src={usersList[spot.ownerId]?.userImage} />
      </NavLink>
    </div>
  );
}
