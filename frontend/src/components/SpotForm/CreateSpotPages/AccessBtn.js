import React from "react";
import "./CreateSpot.css";

export default function AccessBtn({
  access,
  setAccess,
  setActive,
  title,
  desc,
  icon,
  accessCode,
}) {
  const handleClick = (e) => {
    setActive(title);
    setAccess(accessCode);
  };
  return (
    <div className="create-spot-access-listitem">
      <button
        className={
          access === accessCode
            ? "create-spot-access-listitem-btn access-active"
            : "create-spot-access-listitem-btn"
        }
        onClick={handleClick}
      >
        <div className="create-spot-access-listitem-left">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="create-spot-access-listitem-right">
          <img src={icon} />
        </div>
      </button>
    </div>
  );
}
