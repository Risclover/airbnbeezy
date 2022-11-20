import React from "react";
import "./Spots.css";

export default function SpotCategories() {
  window.onscroll = function () {
    navbarScroll();
  };

  function navbarScroll() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      document.querySelector(".spot-categories").classList.add("bottom-border");
    } else if (
      document.body.scrollTop < 11 ||
      document.documentElement.scrollTop < 11
    ) {
      document
        .querySelector(".spot-categories")
        .classList.remove("bottom-border");
    }
  }

  return (
    <div className="spot-categories">
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg" />
        </div>
        <div className="category-name">New</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg" />
        </div>
        <div className="category-name">Top of the world</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" />
        </div>
        <div className="category-name">Trending</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg" />
        </div>
        <div className="category-name">Adapted</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg" />
        </div>
        <div className="category-name">Play</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg" />
        </div>
        <div className="category-name">Hanocks</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg" />
        </div>
        <div className="category-name">Private rooms</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" />
        </div>
        <div className="category-name">Mansions</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" />
        </div>
        <div className="category-name">Beachfront</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" />
        </div>
        <div className="category-name">Cabins</div>
      </div>
      <div className="category">
        <div className="category-icon">
          <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" />
        </div>
        <div className="category-name">Amazing views</div>
      </div>
    </div>
  );
}
