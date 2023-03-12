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
    history.push("/create-spot/price");
  };

  return (
    <div className="create-spot-page">
      <Helmet>
        <title>Step 3: Finish your listing - Airbnbeezy</title>
      </Helmet>
      <div className="step-1-page">
        {step1 === "part4" && (
          <div className="step-1-part-1">
            <div className="step-page-left">
              <div className="step">Step 3</div>
              <h1>Finish up and publish</h1>
              <p>
                Finally, you'll set your nightly price. Answer a few quick
                questions and publish when you're ready.
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
                <source src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" />
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
          <div className="button-bar-step">
            {" "}
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(100%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step"></div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/description")}
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
