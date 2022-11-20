import React from "react";
import "./SingleSpotAbout.css";
export default function SingleSpotAboutHeader() {
  return (
    <div className="single-spot-about-header">
      <h2>Private room in condo hosted by (name)</h2>
      <div className="single-spot-about-rooms">
        1 guest <i class="fa-solid fa-circle"></i>1 bedroom{" "}
        <i class="fa-solid fa-circle"></i> 1 bed{" "}
        <i class="fa-solid fa-circle"></i> 1 private bath
      </div>
    </div>
  );
}
