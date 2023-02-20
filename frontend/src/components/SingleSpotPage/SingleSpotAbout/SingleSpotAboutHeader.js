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
          1 guest <i class="fa-solid fa-circle"></i>1 bedroom{" "}
          <i class="fa-solid fa-circle"></i> 1 bed{" "}
          <i class="fa-solid fa-circle"></i> 1 private bath
        </div>
      </div>
      <NavLink to={`/users/${usersList[spot.ownerId]?.id}/profile`}>
        <img src={usersList[spot.ownerId]?.userImage} />
      </NavLink>
    </div>
  );
}
