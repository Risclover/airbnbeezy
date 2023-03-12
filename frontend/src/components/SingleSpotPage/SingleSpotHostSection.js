import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { RiShieldCheckFill } from "react-icons/ri";
import "./SingleSpotPage.css";

function translateMonth(num) {
  switch (num) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      break;
  }
}

export default function SingleSpotHostSection({ spot, scrollRef }) {
  const usersList = useSelector((state) => state.users);
  let reviews = useSelector((state) => Object.values(state.reviews));

  reviews = reviews.filter(
    (review) => review.userId === usersList[spot.ownerId].id
  );

  return (
    <div className="host-section" ref={scrollRef}>
      <div className="host-section-header">
        <div className="host-section-header-left">
          <NavLink to={`/users/${spot.ownerId}/profile`}>
            <img
              src={
                usersList[spot.ownerId]?.userImage
                  ? usersList[spot.ownerId]?.userImage
                  : usersList[spot.ownerId]?.profileImageUrl
              }
              className="host-section-header-img"
            />
          </NavLink>
        </div>
        <div className="host-section-header-right">
          <h2>Hosted by {usersList[spot.ownerId]?.firstName}</h2>
          <p>
            Joined in{" "}
            {translateMonth(
              new Date(usersList[spot.ownerId]?.createdAt).getMonth()
            )}{" "}
            {new Date(usersList[spot.ownerId]?.createdAt).getFullYear()}
          </p>
        </div>
      </div>
      <div className="host-section-credentials-box">
        <ul className="host-section-credentials">
          <li className="host-credential">
            <AiFillStar />
            {reviews.length > 0 ? reviews.length : 0} Reviews
          </li>
          <li className="host-credential">
            <RiShieldCheckFill /> Identity Confirmed
          </li>
        </ul>
      </div>
      <div className="host-about">{usersList[spot.ownerId]?.about}</div>
    </div>
  );
}
