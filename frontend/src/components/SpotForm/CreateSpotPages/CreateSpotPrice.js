import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { Helmet } from "react-helmet";
export default function CreateSpotPrice({ price, setPrice, category }) {
  const history = useHistory();
  const [done, setDone] = useState(false);
  const [step1, setStep1] = useState("");

  useEffect(() => {
    if (price) {
      setDone(true);
    } else {
      setDone(false);
    }
  });

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/receipt");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;

    if (e.target.value.startsWith("0")) {
      e.target.value = "";
    }
    if (
      (e.target.value === "" || re.test(e.target.value)) &&
      Number(e.target.value) <= 10000 &&
      Number(e.target.value) >= 0
    ) {
      setPrice(e.target.value);
    }
  };

  return (
    <div className="create-spot-price-page">
      <Helmet>
        <title>Set your price</title>
      </Helmet>
      <div className="create-spot-price">
        <div className="create-spot-price-header">
          <h1>Just one last step!</h1>
          <p>Set your price. You can change it anytime.</p>
        </div>
        <div className="create-spot-price-input-box">
          <div className="create-spot-price-input-wrapper">
            <button
              className="create-spot-price-btn"
              onClick={() => setPrice((prev) => (prev > 0 ? prev - 5 : 0))}
            >
              <BiMinus />
            </button>
            <div className="create-spot-price-input">
              <span className="dollar-sign">$</span>
              <input
                type="text"
                className="input-create-spot-price"
                onChange={handleChange}
                value={price}
              />
            </div>
            <button
              className="create-spot-price-btn"
              onClick={() => setPrice((prev) => prev + 5)}
            >
              <BiPlus />
            </button>
          </div>
          <p className="per-night">per night</p>
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
                transform: "translateX(100%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step">
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/finish")}
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
