import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { AiFillStar } from "react-icons/ai";
import Spot from "./Spot/Spot";
import SpotCategories from "./SpotCategories";
import moment from "moment";
import "./Spots.css";

export default function Spots({ setIsCreatePage }) {
  setIsCreatePage(false);

  const dispatch = useDispatch();

  const [showBorder, setShowBorder] = useState(false);
  const [loader, setLoader] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Ne");

  const usersList = useSelector((state) => state.users);
  const spotsList = useSelector((state) => Object.values(state.spots));

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

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

  if (!spotsList) return null;

  spotsList.sort((a, b) => {
    let aSpot = new Date(a.createdAt);
    let bSpot = new Date(b.createdAt);

    return bSpot - aSpot;
  });

  setTimeout(() => {
    setLoader(false);
  }, 800);

  return (
    <>
      {loader && (
        <div className="css-loader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="spots-body">
        <div
          className={
            showBorder
              ? "spots-categories-bar bottom-border"
              : "spots-categories-bar"
          }
        >
          <SpotCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        <div className="spots-div">
          <div className="spots-list">
            {activeCategory === "Ne"
              ? spotsList.map(
                  (spot) =>
                    spot.listed && (
                      <NavLink to={`/spots/${spot.id}`}>
                        <div className="spot-box">
                          <Spot key={spot.id} spot={spot} />
                          <div className="spot-info">
                            <ul>
                              <li className="spotcard-location">
                                <div className="spotcard-location-left">
                                  {spot.city}, {spot.state && spot.state + ", "}{" "}
                                  {spot.country}
                                </div>
                                <div className="spotcard-location-right">
                                  <AiFillStar />
                                  {spot.avgRating
                                    ? spot?.avgRating?.toFixed(2)
                                    : "New"}
                                </div>
                              </li>
                              <li className="spotcard-subinfo">
                                Hosted by {usersList[spot.ownerId]?.firstName}
                              </li>
                              <li className="spotcard-subinfo">
                                Added {moment(spot.createdAt).fromNow()}
                              </li>
                              <li className="spotcard-priceline">
                                <span className="spotcard-price">
                                  ${spot.price}
                                </span>{" "}
                                night
                              </li>
                            </ul>
                          </div>
                        </div>
                      </NavLink>
                    )
                )
              : spotsList
                  .filter((spot) => spot.category === activeCategory)
                  .map(
                    (spot) =>
                      spot.listed && (
                        <NavLink to={`/spots/${spot.id}`}>
                          <div className="spot-box">
                            <Spot key={spot.id} spot={spot} />
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
                                  <span className="spotcard-price">
                                    ${spot.price}
                                  </span>{" "}
                                  night
                                </li>
                              </ul>
                            </div>
                          </div>
                        </NavLink>
                      )
                  )}
          </div>
        </div>
      </div>
    </>
  );
}
