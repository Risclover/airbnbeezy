import React, { useState } from "react";
import "./EditSpot.css";
import EditSpotNavItem from "./EditSpotNavItem";

const navItems = [
  { item: "Photos" },
  { item: "Listing basics" },
  { item: "Location" },
  { item: "Property and rooms" },
  { item: "Pricing" },
];

export default function EditSpotNavbar() {
  const [active, setActive] = useState("Photos");

  return (
    <div className="edit-spot-navbar-wrapper">
      <div className="edit-spot-navbar">
        <ul className="edit-spot-nav">
          <li className="edit-spot-navtitle">
            <p>Listing details</p>
            <ol className="edit-spot-inner-nav">
              {navItems.map((item) => (
                <a href={`#${item.item}`}>
                  <li
                    className={
                      active === item.item
                        ? "inner-nav-selected"
                        : "edit-spot-navitem"
                    }
                    onClick={(e) => setActive(item.item)}
                  >
                    {item.item}
                  </li>
                </a>
              ))}
              {/* <li className="edit-spot-navitem inner-nav-selected">Photos</li>
              <li className="edit-spot-navitem">Listing basics</li>
              <li className="edit-spot-navitem">Location</li>
              <li className="edit-spot-navitem">Property and rooms</li>
              <li className="edit-spot-navitem">Pricing</li> */}
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
