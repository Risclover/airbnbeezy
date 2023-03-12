import React, { useState } from "react";
import "./EditSpot.css";

export default function EditSpotNavbar({
  pricingRef,
  propertyRef,
  locationRef,
  listingRef,
  photosRef,
}) {
  const [active, setActive] = useState("Photos");

  const propertyScroll = () =>
    propertyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const locationScroll = () =>
    locationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const pricingScroll = () =>
    pricingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const listingScroll = () =>
    listingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const photosScroll = () => {
    photosRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="edit-spot-navbar-wrapper">
      <div className="edit-spot-navbar">
        <ul className="edit-spot-nav">
          <li className="edit-spot-navtitle">
            <p>Listing details</p>
            <ol className="edit-spot-inner-nav">
              <li
                className={
                  active === "Photos"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  photosScroll();
                  setActive("Photos");
                }}
              >
                Photos
              </li>
              <li
                className={
                  active === "Listing basics"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  listingScroll();
                  setActive("Listing basics");
                }}
              >
                Listing basics
              </li>
              <li
                className={
                  active === "Location"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  locationScroll();
                  setActive("Location");
                }}
              >
                Location
              </li>
              <li
                className={
                  active === "Property and rooms"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  propertyScroll();
                  setActive("Property and rooms");
                }}
              >
                Property and rooms
              </li>
              <li
                className={
                  active === "Pricing"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  pricingScroll();
                  setActive("Pricing");
                }}
              >
                Pricing
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
