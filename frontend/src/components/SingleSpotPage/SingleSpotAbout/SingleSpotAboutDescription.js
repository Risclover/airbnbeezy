import React from "react";

export default function SingleSpotAboutDescription({ spot }) {
  const text = document.querySelector(
    ".single-spot-about-description"
  )?.innerText;
  const lines = text?.split(/\r\n|\r|\n/).length;
  console.log("lines:", lines);
  return (
    <div
      className="single-spot-about-description"
      style={{ whiteSpace: "pre-line" }}
    >
      {spot.description}
    </div>
  );
}
