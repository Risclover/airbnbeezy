import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import Countries from "../../../APIs/countries.json";
import SpotMap from "../../SingleSpotPage/SpotMap";
import "./CreateSpot.css";

export default function CreateSpotLocation({
  address,
  aptsuite,
  zipcode,
  city,
  state,
  country,
  setAddress,
  setAptSuite,
  setZipcode,
  setCity,
  setState,
  setCountry,
}) {
  const history = useHistory();

  const [step1, setStep1] = useState("");
  const [done, setDone] = useState(false);

  const countries = [];

  for (let i = 0; i < Countries.length; i++) {
    countries.push(`${Countries[i].name} - ${Countries[i].iso2}`);
  }

  useEffect(() => {
    setStep1("part2");
  }, [step1]);

  useEffect(() => {
    if (address && city && country) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [address, city, country]);

  const handleNext = async (e) => {
    e.preventDefault();
    history.push("/create-spot/floorplan");
  };

  return (
    <div className="create-spot-location-page">
      <div className="create-spot-location">
        <Helmet>
          <title>Enter the location - Airbnbeezy</title>
        </Helmet>
        <div className="create-spot-location-header">
          <h1>Where's your place located?</h1>
          <p>
            Your address is only shared with guests after they've made a
            reservation.
          </p>
        </div>
        <div className="create-spot-location-form">
          <form>
            <div className="create-spot-field spot-field-address">
              <input
                type="text"
                name="address"
                autoComplete="off"
                onChange={(e) => setAddress(e.target.value)}
                placeholder=" "
                value={address}
                className="create-spot-input"
              />
              <label
                onClick={(e) => e.target.parentElement.children[0].focus()}
              >
                Street
              </label>
            </div>
            <div className="create-spot-field">
              <input
                type="text"
                name="aptsuite"
                autoComplete="off"
                onChange={(e) => setAptSuite(e.target.value)}
                placeholder=" "
                value={aptsuite}
                className="create-spot-input"
              />
              <label
                onClick={(e) => e.target.parentElement.children[0].focus()}
              >
                Apt, suite, etc. (Optional)
              </label>
            </div>
            <div className="create-spot-field">
              <input
                type="text"
                name="city"
                autoComplete="off"
                onChange={(e) => setCity(e.target.value)}
                placeholder=" "
                value={city}
                className="create-spot-input"
              />
              <label
                onClick={(e) => e.target.parentElement.children[0].focus()}
              >
                City
              </label>
            </div>
            <div className="create-spot-field">
              <input
                type="text"
                name="state"
                autoComplete="off"
                onChange={(e) => setState(e.target.value)}
                placeholder=" "
                value={state}
                className="create-spot-input"
              />
              <label
                onClick={(e) => e.target.parentElement.children[0].focus()}
              >
                State (Optional)
              </label>
            </div>
            <div className="create-spot-field">
              <input
                type="text"
                name="zipcode"
                autoComplete="off"
                onChange={(e) => setZipcode(e.target.value)}
                placeholder=" "
                value={zipcode}
                className="create-spot-input"
              />
              <label
                onClick={(e) => e.target.parentElement.children[0].focus()}
              >
                Zip code (Optional)
              </label>
            </div>
            <div className="create-spot-field spot-field-last">
              <select onChange={(e) => setCountry(e.target.value)}>
                <option defaultValue selected disabled>
                  Choose country
                </option>
                {Countries.map((country) => (
                  <option value={country.name}>
                    {country.name} - {country.iso2}
                  </option>
                ))}
              </select>
              <label
                onClick={(e) => e.target.parentElement.children[0].focus()}
              >
                Country / Region
              </label>
            </div>
          </form>
          <div className="create-spot-location-spot-map">
            <SpotMap
              city={city}
              country={country}
              state={state}
              width="100%"
              height="280px"
            />
          </div>
        </div>
        <div className="create-spot-button-bar">
          <div className="button-bar-step-bars">
            <div className="button-bar-step">
              {step1 === "part2" && (
                <div
                  className="button-bar-stepstep"
                  style={{
                    transition: "transform 600ms linear 0s",
                    transform: "translateX(59%)",
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
              onClick={() => history.push("/create-spot/access")}
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
    </div>
  );
}
