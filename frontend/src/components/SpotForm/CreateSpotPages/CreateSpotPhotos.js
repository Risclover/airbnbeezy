import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./CreateSpot.css";

export default function CreateSpotPhotos({ category, imgUrl, setImgUrl }) {
  const history = useHistory();

  const [step1, setStep1] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setStep1("part5");
  }, [step1]);

  useEffect(() => {
    if (imgUrl) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [imgUrl]);

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/title");
  };

  return (
    <div className="create-spot-photos-page">
      <Helmet>
        <title>Add some photos - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-photos">
        <div className="create-spot-photos-header">
          <h1>Add some photos of your {category.toLowerCase()}</h1>
          <p>
            You'll need at least 1 photo to get started. You can add more or
            make changes later.
          </p>
        </div>
        <label for="input-spot-photo">
          <div className="create-spot-photos-input">
            <input
              id="input-spot-photo"
              className="input-create-spot-photo"
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
              type="text"
            />
          </div>
        </label>
      </div>
      <div className="create-spot-button-bar">
        <div className="button-bar-step-bars">
          {step1 === "part5" && (
            <div className="button-bar-step">
              <div
                className="button-bar-stepstep"
                style={{
                  transition: "transform 600ms linear 0s",
                  transform: "translateX(100%)",
                }}
              ></div>
            </div>
          )}
          <div className="button-bar-step">
            {" "}
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(40%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step"></div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/standout")}
          >
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
