import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { Helmet } from "react-helmet";
import "./CreateSpot.css";

export default function CreateSpotFloorplan({
  guests,
  beds,
  bedrooms,
  bathrooms,
  setGuests,
  setBeds,
  setBedrooms,
  category,
  setBathrooms,
}) {
  const history = useHistory();
  const [step1, setStep1] = useState("part3");
  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/standout");
  };

  return (
    <div className="create-spot-floorplan-page">
      <Helmet>
        <title>Select the total guests - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-floorplan">
        <div className="create-spot-floorplan-header">
          <h1>Share some basics about your place</h1>
          <p>You'll add more details later.</p>
        </div>
        <div className="create-spot-floorplan-list">
          <div className="create-spot-floorplan-listitem">
            <div className="create-spot-floorplan-listitem-left">Guests</div>
            <div className="create-spot-floorplan-listitem-right">
              {" "}
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() => setGuests((prev) => (guests > 0 ? prev - 1 : 0))}
              >
                <BiMinus />
              </button>
              <span className="create-spot-floorplan-listitem-num">
                {guests}
              </span>
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() => setGuests((prev) => prev + 1)}
              >
                <BiPlus />
              </button>
            </div>
          </div>
          <div className="create-spot-floorplan-listitem">
            <div className="create-spot-floorplan-listitem-left">Bedrooms</div>
            <div className="create-spot-floorplan-listitem-right">
              {" "}
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() =>
                  setBedrooms((prev) => (bedrooms > 0 ? prev - 1 : 0))
                }
              >
                <BiMinus />
              </button>
              <span className="create-spot-floorplan-listitem-num">
                {bedrooms}
              </span>
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() => setBedrooms((prev) => prev + 1)}
              >
                <BiPlus />
              </button>
            </div>
          </div>
          <div className="create-spot-floorplan-listitem">
            <div className="create-spot-floorplan-listitem-left">Beds</div>
            <div className="create-spot-floorplan-listitem-right">
              {" "}
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() => setBeds((prev) => (beds > 0 ? prev - 1 : 0))}
              >
                <BiMinus />
              </button>
              <span className="create-spot-floorplan-listitem-num">{beds}</span>
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() => setBeds((prev) => prev + 1)}
              >
                <BiPlus />
              </button>
            </div>
          </div>
          <div className="create-spot-floorplan-listitem">
            <div className="create-spot-floorplan-listitem-left">Bathrooms</div>
            <div className="create-spot-floorplan-listitem-right">
              {" "}
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() =>
                  setBathrooms((prev) => (bathrooms > 0 ? prev - 1 : 0))
                }
              >
                <BiMinus />
              </button>
              <span className="create-spot-floorplan-listitem-num">
                {bathrooms}
              </span>
              <button
                className="create-spot-floorplan-listitem-btn"
                onClick={() => setBathrooms((prev) => prev + 1)}
              >
                <BiPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="create-spot-button-bar">
        <div className="button-bar-step-bars">
          <div className="button-bar-step">
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(79%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step"></div>
          <div className="button-bar-step"></div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/location")}
          >
            Back
          </button>
          <button className={"button-bar-next"} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
