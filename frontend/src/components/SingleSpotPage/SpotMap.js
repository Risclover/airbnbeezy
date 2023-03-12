import React from "react";
import "./SingleSpotPage.css";

export default function SpotMap({ city, state, width, height }) {
  let environment = "AIzaSyBPt2nwzea1QV3CKO5z1WI0eluQbysjMLg";

  return (
    <iframe
      className="embed-map"
      title="location-map"
      width={width}
      height={height}
      src={`https://www.google.com/maps/embed/v1/place?key=${environment}&q=${city}+${state}`}
    ></iframe>
  );
}
