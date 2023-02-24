import React from "react";

export default function SingleSpotAboutDescription({ spot }) {
  return (
    <div
      className="single-spot-about-description"
      style={{ whiteSpace: "pre-line" }}
    >
      {spot.description}
    </div>
  );
}
