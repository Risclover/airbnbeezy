import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SingleSpotAbout.css";

export default function SingleSpotAboutHeader({ spot, scrollRef }) {
  const usersList = useSelector((state) => state.users);
  const [access, setAccess] = useState();

  useEffect(() => {
    setAccess(spot.access.slice(0, 1).toUpperCase() + spot.access.slice(1));
  }, [access]);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="single-spot-about-header">
      <div className="single-spot-about-header-details">
        <h2>
          {access === "Shared" || access === "Private"
            ? access + " room in a "
            : access}{" "}
          {spot.category.toLowerCase()} hosted by{" "}
          {usersList[spot.ownerId]?.firstName}
        </h2>
        <div className="single-spot-about-rooms">
          {spot.guests === 1 ? spot.guests + " guest" : spot.guests + " guests"}{" "}
          <i className="fa-solid fa-circle"></i>
          {spot.bedrooms > 1 || spot.bedrooms === 0
            ? spot.bedrooms + " bedrooms"
            : spot.bedrooms + " bedroom"}{" "}
          <i className="fa-solid fa-circle"></i>{" "}
          {spot.beds === 1 ? spot.beds + " bed" : spot.beds + " beds"}{" "}
          <i className="fa-solid fa-circle"></i>{" "}
          {spot.bathrooms === 1
            ? spot.bathrooms + " bath"
            : spot.bathrooms + " baths"}
        </div>
      </div>
      <img
        src={usersList[spot.ownerId]?.profileImageUrl}
        onClick={executeScroll}
      />
    </div>
  );
}
