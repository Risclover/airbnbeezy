import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./CreateSpot.css";
import EditSpotPhotos from "../EditSpot/EditSpotPhotos";

export default function CreateSpotPhotos({
  category,
  imgUrl,
  imgUrl2,
  imgUrl3,
  imgUrl4,
  imgUrl5,
  setImgUrl,
  setImgUrl2,
  setImgUrl3,
  setImgUrl4,
  setImgUrl5,
}) {
  const history = useHistory();

  const [step1, setStep1] = useState("part5");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (imgUrl && imgUrl2 && imgUrl3 && imgUrl4 && imgUrl5) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [imgUrl, imgUrl2, imgUrl3, imgUrl4, imgUrl5]);

  console.log("category:", category);

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
            You'll need at least 5 photos to get started. You can add more or
            make changes later.
          </p>
        </div>
        <EditSpotPhotos />
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
