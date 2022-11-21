import React from "react";
import { useSelector } from "react-redux";
import "./SingleSpotAbout.css";
export default function SingleSpotAboutHeader({ spot }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="single-spot-about-header">
      <h2>Private room in condo hosted by</h2>
      <div className="single-spot-about-rooms">
        1 guest <i class="fa-solid fa-circle"></i>1 bedroom{" "}
        <i class="fa-solid fa-circle"></i> 1 bed{" "}
        <i class="fa-solid fa-circle"></i> 1 private bath
      </div>
    </div>
  );
}
