import React, { useState, useEffect } from "react";
import moment from "moment";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotById } from "../../../store/spots";

import "./SingleSpotAbout.css";

export default function SingleSpotReservation() {
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const [days, setDays] = useState(0);
  const { spotId } = useParams();
  const spot = useSelector(getSpotById(spotId));
  moment().format();

  const startDate = moment(checkinDate);
  const timeEnd = moment(checkoutDate);
  const diff = timeEnd.diff(startDate);
  const diffDuration = moment.duration(diff);

  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);

  let count = 0;

  reviews.forEach((review) => {
    if (review) {
      count++;
    }
  });

  return (
    <div className="single-spot-reservation">
      <div className="single-spot-reservation-box">
        <div className="reservation-head">
          <div className="reservation-head-left">
            <span className="reservation-head-left-price">${spot.price}</span>{" "}
            night
          </div>
          <div className="reservation-head-right">
            <i className="fa-solid fa-star"></i>
            {count === 0 ? (
              "New"
            ) : (
              <div className="rat">
                {Number(spot.avgRating).toFixed(1)}
                <span className="dot">•</span>
                <a href="#Reviews">{count} reviews</a>
              </div>
            )}
          </div>
        </div>
        <div className="reservation-form">
          <div className="reservation-form-top">
            <div className="input-group">
              <label className="input-label">check-in</label>
              <input
                type="date"
                onChange={(e) => {
                  setCheckinDate(e.target.value);
                  console.log(checkinDate);
                }}
                className="input-group-input-left"
              />
            </div>
            <div className="input-group">
              <label className="input-label">check-out</label>
              <input
                type="date"
                onChange={(e) => {
                  setCheckoutDate(e.target.value);
                }}
                className="input-group-input-right"
              />
            </div>
          </div>
          <div className="input-group-two">
            <label className="input-label">Guests</label>
            <select className="reservation-form-guests">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
              <option>5 guests</option>
              <option>6 guests</option>
              <option>7 guests</option>
              <option>8 guests</option>
            </select>
          </div>
          <button className="reservation-form-submit">Reserve</button>
          <p className="no-charge">You won't be charged yet.</p>
          <div className="reservation-fees">
            <div className="fee">
              <div className="fees-left">
                ${spot.price} x {diffDuration.days() ? diffDuration.days() : 0}{" "}
                nights
              </div>
              <div className="fees-right">
                ${spot.price * diffDuration.days()}
              </div>
            </div>
            <div className="fee">
              <div className="fees-left">Cleaning fee</div>
              <div className="fees-right">$17</div>
            </div>
            <div className="fee">
              <div className="fees-left">Service fee</div>
              <div className="fees-right">$399</div>
            </div>
          </div>
          <div className="total-fees">
            <div className="fees-left">Total before taxes</div>
            <div className="fees-right">
              ${spot.price * diffDuration.days() + 17 + 399}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
