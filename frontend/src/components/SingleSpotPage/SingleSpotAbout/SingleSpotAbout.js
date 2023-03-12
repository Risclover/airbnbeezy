import React from "react";
import SingleSpotAboutHeader from "./SingleSpotAboutHeader";
import SingleSpotAboutHighlights from "./SingleSpotAboutHighlights";
import SingleSpotAboutAircover from "./SingleSpotAboutAircover";
import SingleSpotAboutDescription from "./SingleSpotAboutDescription";
import SingleSpotReservation from "./SingleSpotReservation";
import "./SingleSpotAbout.css";

export default function SingleSpotAbout({ spot, reviewsRef, scrollRef }) {
  return (
    <div className="single-spot-about">
      <div className="single-spot-about-boxes">
        <SingleSpotAboutHeader scrollRef={scrollRef} spot={spot} />
        <SingleSpotAboutHighlights />
        <SingleSpotAboutAircover />
        <SingleSpotAboutDescription spot={spot} />
      </div>
      <SingleSpotReservation reviewsRef={reviewsRef} />
    </div>
  );
}
