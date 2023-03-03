import React, { useState, useEffect } from "react";

export default function EditSpotNavItem({ item }) {
  const [active, setActive] = useState("Photos");

  return (
    <li
      className={
        active === item.item ? "inner-nav-selected" : "edit-spot-navitem"
      }
      onClick={(e) => setActive(item.item)}
    >
      {item.item}
    </li>
  );
}
