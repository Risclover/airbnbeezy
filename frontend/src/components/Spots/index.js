import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import SpotForm from "../SpotForm";
import SpotCategories from "./SpotCategories";
import "./Spots.css";
import Navigation from "../Navigation";
export default function Spots({ isLoaded }) {
  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
  const spotsList = useSelector((state) => Object.values(state.spots));
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);
  let content = null;

  const nav = document.querySelector(".nav");
  nav.style.position = "fixed";
  nav.style.paddingLeft = "40px";
  nav.style.paddingRight = "40px";

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
  if (!spotsList) return null;

  return (
    <div className="spots-body">
      <div className="spots-div">
        <div className="spots-list">
          {spotsList.map((spot) => (
            <Link to={`/spots/${spot.id}`} price={spot.price}>
              <div key={spot.id} className="spot-box">
                <div
                  className="spot-img"
                  style={{
                    backgroundImage: "url(" + spot.previewImage + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="spot-info">
                  <ul>
                    <li className="spotcard-location">
                      {spot.city}, {spot.state}
                    </li>

                    <li className="spotcard-subinfo">Added 5 weeks ago</li>
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
