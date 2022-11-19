import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import SpotForm from "../SpotForm";
import "./Spots.css";

export default function Spots() {
  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
  const spotsList = useSelector((state) => Object.values(state.spots));
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);
  let content = null;

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
    <div className="spots-div">
      {sessionUser ? (
        <button className="create-spot" onClick={handleClick}>
          Create Spot
        </button>
      ) : null}
      {content}
      <div className="spots-list">
        {spotsList.map((spot) => (
          <Link to={`/spots/${spot.id}`}>
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
                  <li className="spotcard-host">
                    Hosted by <span className="spotcard-hostname"></span>
                  </li>
                  <li className="spotcard-priceline">
                    <span className="spotcard-price">${spot.price}</span> night
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
