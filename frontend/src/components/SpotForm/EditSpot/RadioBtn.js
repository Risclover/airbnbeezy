import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";

export default function RadioBtn({ name, id, value, onChange, checked, text }) {
  return (
    <label htmlFor={id} className="radio-label">
      {(text === "Listed" || text === "Unlisted") && (
        <input
          className="radio-input"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      )}
      {text === "Deactivate" && <input type="text" className="radio-input" />}
      <span className="custom-radio" />
      {text === "Listed" && (
        <div className="radio-text">
          <p className="radio-listed">
            <BsFillCircleFill /> {text}
          </p>
          Guests can find your listing in search results and request or book
          available dates.
        </div>
      )}
      {text === "Unlisted" && (
        <div className="radio-text">
          <p className="radio-unlisted">
            <BsFillCircleFill /> {text}
          </p>
          Guests can’t book your listing or find it in search results.
        </div>
      )}
      {text === "Deactivate" && (
        <div className="radio-text">
          <p className="radio-deactivate">
            <TiCancel /> {text}
          </p>
          Permanently remove your listing from Airbnb
        </div>
      )}
    </label>
  );
}
