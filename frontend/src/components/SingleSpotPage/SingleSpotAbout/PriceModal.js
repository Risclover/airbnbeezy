import React from "react";
import "./SingleSpotAbout.css";

export default function PriceModal({ dates, price, setShowPriceModal }) {
  return (
    <div className="price-container">
      {dates.length > 7 ? (
        <div className="price-container-header">
          {" "}
          <button
            onClick={() => setShowPriceModal(false)}
            className="loginform-close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          Average nightly rate is rounded.
        </div>
      ) : (
        <>
          <div className="loginform-header">
            <button
              onClick={() => setShowPriceModal(false)}
              className="loginform-close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <p>Base Price Breakdown</p>
            <div></div>
          </div>
          <div className="price-modal-content">
            <div className="price-breakdown-box">
              {dates.map((date) => (
                <div className="price-breakdown-line">
                  <div className="price-breakdown-left">{date}</div>
                  <div className="price-breakdown-right">${price}</div>
                </div>
              ))}
            </div>
            <div className="total-base-price-box">
              <div className="total-base-price-left">Total Base Price</div>
              <div className="total-base-price-right">
                ${price * dates.length}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
