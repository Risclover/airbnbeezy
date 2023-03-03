import React from "react";
import { RxChevronLeft } from "react-icons/rx";

import "./EditPhotos.css";

export default function EditPhotosNavbar({ setPhotos }) {
  return (
    <div className="edit-photos-navbar-wrapper">
      <div className="edit-photos-navbar">
        <ul className="edit-photos-nav">
          <li className="edit-photos-navtitle">
            <p onClick={() => setPhotos(false)}>
              <RxChevronLeft /> Photos
            </p>
            <ol className="edit-photos-inner-nav">
              <a href="#Cover">
                <li className="inner-nav-selected">Cover photo</li>
              </a>
              <a href="#All">
                <li className="edit-photos-navitem">All photos</li>
              </a>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
