import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./CreateSpot.css";

export default function CreateSpotTitle({ title, setTitle, category }) {
  const history = useHistory();
  const [step1, setStep1] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (title) {
      setDone(true);
    }
  }, [title]);

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/description");
  };
  return (
    <div className="create-spot-title-page">
      <Helmet>
        <title>Give your place a title - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-title">
        <div className="create-spot-title-header">
          <h1>Now, let's give your {category.toLowerCase()} a title.</h1>
          <p>
            Short titles work best. Have fun with it—you can always change it
            later.
          </p>
        </div>
        <div className="create-spot-title-input-box">
          <div className="create-spot-title-input">
            <textarea
              className="input-create-spot-title"
              maxLength={32}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></textarea>
            <span className="create-spot-title-chars">{title.length}/32</span>
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
                transform: "translateX(59%)",
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
