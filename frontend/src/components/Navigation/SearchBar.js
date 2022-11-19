import React from 'react'
import './Navigation.css';

export default function SearchBar() {
  return (
    <div className="nav-searchbar">
        <div className="nav-searchbar-inner">Anywhere</div>
        <div className="nav-searchbar-inner">Any week</div>
        <div className="nav-searchbar-inner-right">Add guests</div>
        <div className="search-button"><i className="fa-solid fa-magnifying-glass"></i></div>
    </div>
  )
}
