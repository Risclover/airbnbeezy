import React from "react";
import "./SingleSpotAbout.css";

export default function SingleSpotAboutHighlights() {
  return (
    <div className="single-spot-about-highlights">
      <div className="single-spot-about-highlight">
        <div className="single-spot-about-highlight-icon">
          <i className="fa-solid fa-door-closed"></i>
        </div>
        <div className="single-spot-about-highlight-details">
          <div className="single-spot-about-highlight-title">Self check-in</div>
          <div className="single-spot-about-highlight-info">
            Check yourself in with the keypad.
          </div>
        </div>
      </div>
      <div className="single-spot-about-highlight">
        <div className="single-spot-about-highlight-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="single-spot-about-highlight-details">
          <div className="single-spot-about-highlight-title">
            Great location
          </div>
          <div className="single-spot-about-highlight-info">
            100% of recent guests gave the location a 5-star rating.
          </div>
        </div>
      </div>
      <div className="single-spot-about-highlight">
        <div className="single-spot-about-highlight-icon">
          <i className="fa-solid fa-key"></i>
        </div>
        <div className="single-spot-about-highlight-details">
          <div className="single-spot-about-highlight-title">
            Great check-in experience
          </div>
          <div className="single-spot-about-highlight-info">
            100% of recent guests gave the check-in process a 5-star rating.
          </div>
        </div>
      </div>
    </div>
  );
}
