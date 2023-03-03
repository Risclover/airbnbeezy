import React, { useEffect, useState } from "react";

export default function CategoryBtn({
  category,
  img,
  activeBtn,
  setActiveBtn,
  setActiveCategory,
}) {
  const [cname, setCname] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setActiveBtn(category);
    setActiveCategory(category.slice(0, -1));
  };

  useEffect(() => {
    if (activeBtn === category) {
      setCname("category category-clicked");
    } else {
      setCname("category");
    }
  });
  return (
    <button className={cname} onClick={handleClick}>
      <div className="category-icon">
        <img src={img} />
        <div className="category-name">{category}</div>
      </div>
    </button>
  );
}
