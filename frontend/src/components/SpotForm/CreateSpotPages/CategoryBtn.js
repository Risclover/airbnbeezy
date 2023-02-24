import React, { useEffect, useState } from "react";
import "./CreateSpot.css";

export default function CategoryBtn({
  setCategory,
  categoryName,
  img,
  activeBtn,
  setActiveBtn,
}) {
  const [mouseDown, setMouseDown] = useState(false);
  //   console.log("category:", category);
  return (
    <button
      className={
        activeBtn === categoryName
          ? "step-page-place place-active"
          : "step-page-place"
      }
      onClick={(e) => {
        setCategory(categoryName);
        setActiveBtn(categoryName);
      }}
    >
      <div style={{ paddingLeft: "2px" }}>
        <img className="step-page-place-icon" src={img} />
      </div>
      <h2>{categoryName}</h2>
    </button>
  );
}
