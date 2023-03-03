import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllSpots, getSpotById } from "../../../store/spots";
import {
  addBooking,
  getBookings,
  getBookingsByOwnerId,
  getBookingsBySpotId,
} from "../../../store/bookings";
import { isWithinInterval } from "date-fns";
import Calendar from "./Calendar.js";
import "./SingleSpotAbout.css";
import "react-calendar/dist/Calendar.css";
import CurrentUserReviews from "../../CurrentUserReviews";
import { getUsers } from "../../../store/users";
import { Modal } from "../../../context/Modal";
import LoginForm from "../../LoginFormModal/LoginForm";
import AuthModal from "../../LoginFormModal/AuthModal";

export default function SingleSpotReservation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [booked, setBooked] = useState(false);
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const [guests, setGuests] = useState(1);
  const [guestList, setGuestlist] = useState([]);
  const { spotId } = useParams();
  const spot = useSelector(getSpotById(spotId));
  const currentUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => Object.values(state.bookings));
  moment().format();

  useEffect(() => {
    dispatch(getBookings());
    dispatch(getAllSpots());
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    for (let booking of bookings) {
      let today = new Date();
      let startDate = new Date(booking.startDate);
      let endDate = new Date(booking.endDate);

      if (booking?.userId === currentUser?.id && booking?.spotId === +spotId) {
        if (
          today.getTime() > startDate.getTime() &&
          today.getTime() < endDate.getTime()
        ) {
          setBooked(true);
        }
      }
    }
  }, [booked]);
  const startDate = moment(checkinDate);
  const timeEnd = moment(checkoutDate);
  const diff = timeEnd.diff(startDate);
  const diffDuration = moment.duration(diff);

  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spot.id);

  useEffect(() => {
    const gustlist = [];
    if (spot?.guests > 0) {
      for (let i = 0; i < spot?.guests; i++) {
        if (i === 0) {
          gustlist.push("1 guest");
        } else if (i > 0) {
          gustlist.push(`${i + 1} guests`);
        }
      }
    }
    setGuestlist(gustlist);
  }, [spot?.guests]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      setShowModal(true);
    } else {
      let errors = [];
      if (new Date(checkoutDate).getTime() < new Date(checkinDate).getTime()) {
        errors.push("Check-out date must be after check-in date.");
      }
      if (!checkinDate) errors.push("Please select a check-in date.");
      if (!checkoutDate) errors.push("Please select a check-out date.");

      if (errors.length > 0) setErrors(errors);

      const payload = {
        startDate: checkinDate,
        endDate: checkoutDate,
        guests: guests,
      };
      const data = await dispatch(addBooking(payload, spot?.id));

      if (data) {
        console.log("data:", data);
      }
      await dispatch(getAllSpots());
      await dispatch(getBookings());
      await dispatch(getUsers());
      history.push("/my-bookings");
    }
  };

  return (
    <div className="single-spot-reservation">
      <div className="single-spot-reservation-box">
        {/* <Calendar /> */}
        <div className="reservation-head">
          <div className="reservation-head-left">
            <span className="reservation-head-left-price">${spot.price}</span>{" "}
            night
          </div>
          <div className="reservation-head-right">
            <i className="fa-solid fa-star"></i>
            {reviews.length <= 3 ? (
              "New"
            ) : (
              <div className="rat">
                {+spot.avgRating?.toFixed(2)}
                <span className="dot">•</span>
                <a href="#Reviews">{reviews.length} reviews</a>
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
                }}
                value={checkinDate}
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
                value={checkoutDate}
                className="input-group-input-right"
              />
            </div>
          </div>
          <div className="input-group-two">
            <label className="input-label-guests">Guests</label>
            <select
              className="reservation-form-guests"
              onChange={(e) => setGuests(e.target.value)}
              value={guests}
            >
              {guestList.map((item, idx) => (
                <option value={idx + 1}>{item}</option>
              ))}
            </select>
          </div>
          {booked && currentUser && (
            <div className="reservation-btn">
              <button className="reservation-form-submit" disabled>
                Reserve
              </button>
              <span className="reservation-error">
                You've already booked this location. You may book again once
                your booking has lapsed.
              </span>
            </div>
          )}
          {!booked && currentUser && (
            <div className="reservation-btn">
              <button
                className="reservation-form-submit"
                onClick={handleBooking}
              >
                Reserve
              </button>
              <div className="errors-box">
                {errors.length > 0 &&
                  errors.map((error) => (
                    <p className="reservation-error">{error}</p>
                  ))}
              </div>
            </div>
          )}
          {!currentUser && (
            <div className="reservation-btn">
              <button className="reservation-form-submit res-login" disabled>
                Reserve
              </button>
              <span className="reservation-login">
                <button
                  className="switch-login-btn"
                  onClick={() => {
                    setLogin(true);
                    setShowModal(true);
                  }}
                >
                  Log in
                </button>{" "}
                to make a reservation.
              </span>
            </div>
          )}
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <AuthModal
                setShowModal={setShowModal}
                showModal={showModal}
                login={login}
                setLogin={setLogin}
              />
            </Modal>
          )}
          {/* <p className="no-charge">Feature coming soon.</p> */}
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
