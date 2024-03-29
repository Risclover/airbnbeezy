import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllSpots, getSpotById } from "../../../store/spots";
import { addBooking, getBookings } from "../../../store/bookings";
import { getUsers } from "../../../store/users";
import { Modal } from "../../../context/Modal";
import AuthModal from "../../LoginFormModal/AuthModal";
import PriceModal from "./PriceModal";
import moment from "moment";
import "./SingleSpotAbout.css";
import "react-calendar/dist/Calendar.css";

function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var stopDate = moment(stopDate);

  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("M/D/YYYY"));
    currentDate = moment(currentDate).add(1, "days");
  }

  return dateArray;
}

export default function SingleSpotReservation({ reviewsRef }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();

  const [dates, setDates] = useState([]);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [booked, setBooked] = useState(false);
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const [guests, setGuests] = useState(1);
  const [guestList, setGuestlist] = useState([]);

  const spot = useSelector(getSpotById(spotId));
  const currentUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => Object.values(state.bookings));

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  useEffect(() => {
    setDates(getDates(checkinDate, checkoutDate));
  }, [checkinDate, checkoutDate]);

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

      await dispatch(addBooking(payload, spot?.id));
      await dispatch(getAllSpots());
      await dispatch(getBookings());
      await dispatch(getUsers());
      history.push("/my-bookings");
    }
  };

  const reviewsScroll = () =>
    reviewsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="single-spot-reservation">
      <div className="single-spot-reservation-box">
        <div className="reservation-head">
          <div className="reservation-head-left">
            <span className="reservation-head-left-price">
              ${spot.price.toLocaleString()}
            </span>{" "}
            night
          </div>
          <div className="reservation-head-right">
            {reviews.length < 3 ? (
              <span onClick={reviewsScroll} className="reviews-link">
                {reviews.length} reviews
              </span>
            ) : (
              <div className="rat">
                <i className="fa-solid fa-star"></i>
                {parseFloat(spot.avgRating?.toFixed(2))}
                <span className="dot">•</span>
                <span onClick={reviewsScroll} className="grey-reviews-link">
                  {reviews.length} reviews
                </span>
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
          <div className="reservation-fees">
            <div className="fee">
              <div
                className="fees-left"
                onClick={() => setShowPriceModal(true)}
              >
                ${spot.price.toLocaleString()} x{" "}
                {diffDuration.days() ? diffDuration.days() : 0} nights
              </div>
              <div className="fees-right">
                ${(spot.price * diffDuration.days()).toLocaleString()}
              </div>
              {showPriceModal && (
                <Modal onClose={() => setShowPriceModal(false)}>
                  <PriceModal
                    startDate={checkinDate}
                    endDate={checkoutDate}
                    setShowPriceModal={setShowPriceModal}
                    dates={dates}
                    price={spot.price}
                  />
                </Modal>
              )}
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
              ${(spot.price * diffDuration.days() + 17 + 399).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
