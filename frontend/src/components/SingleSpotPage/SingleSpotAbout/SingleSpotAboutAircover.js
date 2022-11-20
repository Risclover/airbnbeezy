import React from "react";
import "./SingleSpotAbout.css";

export default function SingleSpotAboutAircover({ setShowAboutModal }) {
  return (
    <div className="single-spot-about-aircover">
      <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" />
      <p>
        Every booking includes free protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in.
      </p>
      <button onClick={() => setShowAboutModal(true)} className="learn-more">
        Learn More
      </button>
    </div>
  );
}
