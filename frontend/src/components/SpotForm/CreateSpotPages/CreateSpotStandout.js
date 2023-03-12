import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./CreateSpot.css";

export default function CreateSpotStandout() {
  const history = useHistory();
  const [step1, setStep1] = useState("");

  useEffect(() => {
    setStep1("part4");
  }, [step1]);

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/photos");
  };

  return (
    <div className="create-spot-page">
      <Helmet>
        <title>Part 2: Make your place stand out - Airbnbeezy</title>
      </Helmet>
      <div className="step-1-page">
        {step1 === "part4" && (
          <div className="step-1-part-1">
            <div className="step-page-left">
              <div className="step">Step 2</div>
              <h1>Make your place stand out</h1>
              <p>
                In this step, you’ll add some of the amenities your place
                offers, plus 5 or more photos. Then, you’ll create a title and
                description.
              </p>
            </div>
            <div className="step-page-video-box">
              <video
                className="step-page-video"
                autoPlay
                crossOrigin="anonymous"
                playsInline
                preload="auto"
                style={{ objectFit: "cover" }}
              >
                <source src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high" />
              </video>
            </div>
          </div>
        )}
      </div>
      <div className="create-spot-button-bar">
        <div className="button-bar-step-bars">
          <div className="button-bar-step">
            {step1 === "part4" && (
              <div
                className="button-bar-stepstep"
                style={{
                  transition: "transform 600ms linear 0s",
                  transform: "translateX(100%)",
                }}
              ></div>
            )}
          </div>
          <div className="button-bar-step"></div>
          <div className="button-bar-step"></div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/floorplan")}
          >
            Back
          </button>
          {step1 === "part4" && (
            <button className={"button-bar-next"} onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
