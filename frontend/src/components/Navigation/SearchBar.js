import React from "react";
import "./Navigation.css";

export default function SearchBar() {
  return (
    <div className="nav-searchbar">
      <input type="text" className="searchbar-input" />
      <div className="search-button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
