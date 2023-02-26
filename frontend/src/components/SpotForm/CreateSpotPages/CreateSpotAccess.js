import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Door from "../../../images/places/door.png";
import Office from "../../../images/places/office.png";
import House from "../../../images/places/home.png";
import AccessBtn from "./AccessBtn";
import "./CreateSpot.css";

const accessBtns = [
  {
    title: "An entire place",
    desc: "Guests have the whole place to themselves",
    img: House,
    accessCode: "entire",
  },
  {
    title: "A private room",
    desc: "Guests sleep in a private room but some areas may be shared with you or others",
    img: Door,
    accessCode: "private",
  },
  {
    title: "A shared room",
    desc: "Guests sleep in a room or common area that may be shared with you or others",
    img: Office,
    accessCode: "shared",
  },
];
export default function CreateSpotAccess({ access, setAccess }) {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (access !== "") {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [access]);

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/create-spot/location");
  };
  return (
    <div className="create-spot-access-page">
      <Helmet>
        <title>Choose the type of place you have - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-access">
        <div className="create-spot-access-header">
          <h1>What type of place will guests have?</h1>
        </div>
        <div className="create-spot-access-list">
          {accessBtns.map((accessBtn) => (
            <AccessBtn
              access={access}
              setAccess={setAccess}
              accessCode={accessBtn.accessCode}
              active={active}
              setActive={setActive}
              title={accessBtn.title}
              desc={accessBtn.desc}
              icon={accessBtn.img}
            />
          ))}
        </div>
      </div>
      <div className="create-spot-button-bar">
        <div className="button-bar-step-bars">
          <div className="button-bar-step">
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(40%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step"></div>
          <div className="button-bar-step"></div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/category")}
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
