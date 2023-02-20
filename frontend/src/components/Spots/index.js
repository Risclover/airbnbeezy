import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { getUsers } from "../../store/users";
import SpotForm from "../SpotForm";
import SpotCategories from "./SpotCategories";
import "./Spots.css";
import moment from "moment";

export default function Spots() {
  const dispatch = useDispatch();

  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const usersList = useSelector((state) => state.users);
  const spotsList = useSelector((state) => Object.values(state.spots));

  useEffect(() => {
    dispatch(getAllSpots());
    dispatch(getUsers());
  }, [dispatch]);

  let content = null;

  const nav = document.querySelector(".nav");
  nav.style.position = "fixed";
  nav.style.paddingLeft = "40px";
  nav.style.paddingRight = "40px";

  window.onscroll = function () {
    navbarScroll();
  };

  function navbarScroll() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setShowBorder(true);
    } else if (
      document.body.scrollTop < 11 ||
      document.documentElement.scrollTop < 11
    ) {
      setShowBorder(false);
    }
  }

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
  if (!spotsList) return null;

  return (
    <div className="spots-body">
      <div
        className={
          showBorder
            ? "spots-categories-bar bottom-border"
            : "spots-categories-bar"
        }
      >
        <SpotCategories />
      </div>
      <div className="spots-div">
        <div className="spots-list">
          {spotsList.map((spot) => (
            <Link to={`/spots/${spot.id}`} price={spot.price}>
              <div key={spot.id} className="spot-box">
                <div className="spot-img">
                  <img src={spot.previewImage} />
                </div>
                <div className="spot-info">
                  <ul>
                    <li className="spotcard-location">
                      {spot.city}, {spot.state}
                    </li>
                    <li className="spotcard-subinfo">
                      Hosted by {usersList[spot.ownerId]?.username}
                    </li>
                    <li className="spotcard-subinfo">
                      Added {moment(spot.createdAt).fromNow()}
                    </li>
                    <li className="spotcard-priceline">
                      <span className="spotcard-price">${spot.price}</span>{" "}
                      night
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
