import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./CreateSpot.css";

export default function CreateSpotDescription({
  description,
  setDescription,
  category,
}) {
  const history = useHistory();
  const [step1, setStep1] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (description) {
      setDone(true);
    }
  }, [description]);

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/finish");
  };
  return (
    <div className="create-spot-title-page">
      <Helmet>
        <title>Describe your place - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-title">
        <div className="create-spot-title-header">
          <h1>Create your description</h1>
          <p>Share what makes your place special.</p>
        </div>
        <div className="create-spot-title-input-box">
          <div className="create-spot-title-input">
            <textarea
              className="input-create-spot-description"
              maxLength={500}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            >
              You'll always remember your time at this unique place to stay.
            </textarea>
            <span className="create-spot-title-chars">
              {description.length}/500
            </span>
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
                transform: "translateX(100%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step">
            {" "}
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(79%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step"></div>
        </div>
        <div className="button-bar-buttons-box">
          <button className="button-bar-back" onClick={() => history.goBack()}>
            Back
          </button>
          {done && (
            <button className={"button-bar-next"} onClick={handleNext}>
              Next
            </button>
          )}
          {!done && (
            <button
              className={
                !done
                  ? "button-bar-next button-next-disabled"
                  : "button-bar-next"
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
