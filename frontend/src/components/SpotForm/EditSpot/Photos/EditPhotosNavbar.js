import React, { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";

import "./EditPhotos.css";

export default function EditPhotosNavbar({
  setPhotos,
  coverPhotoRef,
  allPhotosRef,
}) {
  const [active, setActive] = useState("Cover photo");

  const coverPhotoScroll = () =>
    coverPhotoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const allPhotosScroll = () =>
    allPhotosRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="edit-photos-navbar-wrapper">
      <div className="edit-photos-navbar">
        <ul className="edit-photos-nav">
          <li className="edit-photos-navtitle">
            <p onClick={() => setPhotos(false)}>
              <RxChevronLeft /> Photos
            </p>
            <ol className="edit-photos-inner-nav">
              <li
                className={
                  active === "Cover photo"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  coverPhotoScroll();
                  setActive("Cover photo");
                }}
              >
                Cover photo
              </li>
              <li
                className={
                  active === "All photos"
                    ? "inner-nav-selected"
                    : "edit-spot-navitem"
                }
                onClick={() => {
                  allPhotosScroll();
                  setActive("All photos");
                }}
              >
                All photos
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
