import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { getUsers } from "../../store/users";
import "./Navigation.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const usersList = useSelector((state) => Object.values(state.users));

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllSpots());
  }, []);

  const usernames = [];
  for (let user of usersList) {
    usernames.push({ id: user.id, username: user.username });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let searchResults = [];
    for (let username of usernames) {
      if (searchQuery.toLowerCase().includes(username.username.toLowerCase())) {
        searchResults.push(username);
      }
    }
  };

  return (
    <div className="nav-searchbar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchbar-input"
        placeholder="Search users"
      />
      <div className="search-button" onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
