import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateSpot.css";

import { Helmet } from "react-helmet";
import Home from "../../../images/places/home.png";
import Apartment from "../../../images/places/apartment.png";
import Barn from "../../../images/places/barn.png";
import BnB from "../../../images/places/bnb.png";
import Boat from "../../../images/places/boat.png";
import Cabin from "../../../images/places/cabin.png";
import Camper from "../../../images/places/camper.png";
import Casa from "../../../images/places/casa.png";
import Castle from "../../../images/places/castle.png";
import Cave from "../../../images/places/cave.png";
import Container from "../../../images/places/container.jpg";
import Cycladic from "../../../images/places/cycladic.jpg";
import Dome from "../../../images/places/dome.jpg";
import Dammuso from "../../../images/places/dammuso.jpg";
import EarthHome from "../../../images/places/earth-home.jpg";
import Farm from "../../../images/places/farm.jpg";
import Guesthouse from "../../../images/places/guesthouse.png";
import Hotel from "../../../images/places/hotel.png";
import Houseboat from "../../../images/places/houseboat.png";
import Mansion from "../../../images/places/mansion.png";
import Minsu from "../../../images/places/minsu.jpg";
import Riad from "../../../images/places/riad.jpg";
import Ryokan from "../../../images/places/ryokan.jpg";
import ShepherdsHut from "../../../images/places/shepherds-hut.jpg";
import Tent from "../../../images/places/tent.png";
import TinyHome from "../../../images/places/tiny-home.jpg";
import Tower from "../../../images/places/tower.png";
import Treehouse from "../../../images/places/treehouse.png";
import Trullo from "../../../images/places/trullo.jpg";
import Windmill from "../../../images/places/windmill.png";
import Yurt from "../../../images/places/yurt.png";
import CategoryBtn from "./CategoryBtn";

const categories = [
  { category: "House", img: Home },
  { category: "Apartment", img: Apartment },
  { category: "Barn", img: Barn },
  { category: "Bed & breakfast", img: BnB },
  { category: "Boat", img: Boat },
  { category: "Cabin", img: Cabin },
  { category: "Camper", img: Camper },
  { category: "Casa particular", img: Casa },
  { category: "Castle", img: Castle },
  { category: "Cave", img: Cave },
  { category: "Container", img: Container },
  { category: "Cycladic home", img: Cycladic },
  { category: "Dammuso", img: Dammuso },
  { category: "Dome", img: Dome },
  { category: "Earth home", img: EarthHome },
  { category: "Farm", img: Farm },
  { category: "Guesthouse", img: Guesthouse },
  { category: "Hotel", img: Hotel },
  { category: "Houseboat", img: Houseboat },
  { category: "Mansion", img: Mansion },
  { category: "Minsu", img: Minsu },
  { category: "Riad", img: Riad },
  { category: "Ryokan", img: Ryokan },
  { category: "Shepherd's Hut", img: ShepherdsHut },
  { category: "Tent", img: Tent },
  { category: "Tiny home", img: TinyHome },
  { category: "Tower", img: Tower },
  { category: "Treehouse", img: Treehouse },
  { category: "Trullo", img: Trullo },
  { category: "Windmill", img: Windmill },
  { category: "Yurt", img: Yurt },
];

export default function CreateSpot({ category, setCategory }) {
  const history = useHistory();

  let [step1, setStep1] = useState("part1");
  const [activeBtn, setActiveBtn] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (step1 === "part1") {
      setStep1("part2");
    }
    if (step1 === "part2") {
      history.push("/create-spot/location");
    }
  };

  const handleClick = (e) => {
    setCategory(e.target.textContent);
    console.log("category:", category);
  };

  console.log("category:", category);

  return (
    <div className="create-spot-page">
      {step1 === "part1" && (
        <Helmet>
          <title>Step 1: Tell us about your place - Airbnbeezy</title>
        </Helmet>
      )}
      {step1 === "part2" && (
        <Helmet>
          <title>Choose your property type - Airbnbeezy</title>
        </Helmet>
      )}
      <div className="step-1-page">
        {step1 === "part1" && (
          <div className="step-1-part-1">
            <div className="step-page-left">
              <div className="step">Step 1</div>
              <h1>Tell us about your place</h1>
              <p>
                In this step, we'll ask you which type of property you have and
                if guests will book the entire place or just a room. Then let us
                know the location and how many guests can stay.
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
                <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high" />
              </video>
            </div>
          </div>
        )}
        {step1 === "part2" && (
          <div className="step-1-part-2">
            <div className="step-page-single">
              <h1>Which of these best describes your place?</h1>
              <div className="step-page-place-grid">
                {categories.map((cat) => (
                  <CategoryBtn
                    onClick={(e) => handleClick(e)}
                    setCategory={setCategory}
                    categoryName={cat["category"]}
                    img={cat["img"]}
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="create-spot-button-bar">
        <div className="button-bar-step-bars">
          <div className="button-bar-step">
            {step1 === "part2" && (
              <div
                className="button-bar-stepstep"
                style={{
                  transition: "transform 600ms linear 0s",
                  transform: "translateX(20%)",
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
            onClick={() => history.push("/create-spot")}
          >
            Back
          </button>
          {step1 === "part1" && (
            <button className={"button-bar-next"} onClick={handleNext}>
              Next
            </button>
          )}
          {step1 === "part2" && (
            <button
              className={
                category === "" || category === null || !category
                  ? "button-bar-next button-next-disabled"
                  : "button-bar-next"
              }
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
