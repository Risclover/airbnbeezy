import React, { useState } from "react";
import SpotForm from "../SpotForm";

export default function RightNav(props) {
  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
  let content = null;

  const handleClick = () => {
    setShowCreateSpotForm(true);
  };

  if (showCreateSpotForm) {
    content = (
      <div className="create-spot-stuff">
        <SpotForm
          showCreateSpotForm={showCreateSpotForm}
          setShowCreateSpotForm={setShowCreateSpotForm}
        />
      </div>
    );
  }

  return (
    <div className="nav-rightnav">
      {content}
      <button className="nav-rightnav-txt" onClick={handleClick}>
        Airbnb your home
      </button>
      <button className="nav-rightnav-world">
        <i className="fa-solid fa-globe"></i>
      </button>
      <button className="nav-rightnav-profile">
        <i className="fa-solid fa-bars"></i>
        {props.children}
      </button>
    </div>
  );
}
