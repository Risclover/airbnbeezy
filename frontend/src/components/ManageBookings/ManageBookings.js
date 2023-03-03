import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBookings } from "../../store/bookings";
import { getAllSpots } from "../../store/spots";
import { getUsers } from "../../store/users";
import "./ManageBookings.css";

export default function ManageBookings() {
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [nameModified, setNameModified] = useState(false);
  const [priceModified, setPriceModified] = useState(false);
  const [guestsModified, setGuestsModified] = useState(false);
  const [checkinModified, setCheckinModified] = useState(false);
  const [checkoutModified, setCheckoutModified] = useState(false);
  const [nameSort, setNameSort] = useState(false);
  const [priceSort, setPriceSort] = useState(false);
  const [guestsSort, setGuestsSort] = useState(false);
  const [checkinSort, setCheckinSort] = useState(false);
  const [checkoutSort, setCheckoutSort] = useState(false);

  let bookings = useSelector((state) => Object.values(state.bookings));
  const spots = useSelector((state) => Object.values(state.spots));

  let spotsList = [];

  const currentUser = useSelector((state) => state.session.user);
  bookings = bookings.filter((booking) => booking.userId === currentUser.id);
  const users = useSelector((state) => Object.values(state.users));

  useEffect(() => {
    dispatch(getBookings());
    dispatch(getAllSpots());
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    for (let spot of spots) {
      for (let booking of bookings) {
        if (spot.id === booking.spotId) {
          //   obj = [booking, spot];
          for (let user of users) {
            if (user.id === spot.ownerId) {
              spotsList.push({
                id: booking.id,
                spotImg: spot.previewImage,
                startDate: booking.startDate,
                endDate: booking.endDate,
                name: spot.name,
                guests: booking.guests,
                owner: user.firstName,
                spotId: spot.id,
              });
            }
          }
        }
      }
    }
    setList(spotsList);
  }, []);

  const [sorted, setSorted] = useState([...list]);

  const clearModifieds = () => {
    setNameModified(false);
    setGuestsModified(false);
    setCheckinModified(false);
    setCheckoutModified(false);
  };

  const sortByGuests = () => {
    let sorted = [...list];

    sorted.sort((a, b) => {
      if (guestsSort) return b.guests - a.guests;
      if (!guestsSort) return a.guests - b.guests;
    });

    setSorted(sorted);
    clearModifieds();
    setGuestsModified(true);
    setGuestsSort(!guestsSort);
  };

  const sortByName = () => {
    let sorted = [...list];

    sorted.sort((a, b) => {
      if (!nameSort) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      if (nameSort) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      }
    });

    setSorted(sorted);
    clearModifieds();
    setNameModified(true);
    setNameSort(!nameSort);
  };

  const sortByCheckin = () => {
    let sorted = [...list];

    sorted.sort((a, b) => {
      let sortA = new Date(a.startDate);
      let sortB = new Date(b.startDate);

      if (checkinSort) return sortB - sortA;
      if (!checkinSort) return sortA - sortB;
    });

    setSorted(sorted);
    clearModifieds();
    setCheckinModified(true);
    setCheckinSort(!checkinSort);
  };

  const sortByCheckout = () => {
    let sorted = [...list];

    sorted.sort((a, b) => {
      let sortA = new Date(a.endDate);
      let sortB = new Date(b.endDate);

      if (checkoutSort) return sortB - sortA;
      if (!checkoutSort) return sortA - sortB;
    });

    setSorted(sorted);
    clearModifieds();
    setCheckoutModified(true);
    setCheckoutSort(!checkoutSort);
  };

  const deleteBooking = async (e) => {
    e.preventDefault();
    await dispatch(deleteBooking());
  };

  return (
    <div className="manage-bookings-page">
      <div className="manage-bookings">
        <div className="manage-bookings-header">
          <h1>{list.length} Bookings</h1>
        </div>
        <table className="bookings-table">
          <thead>
            <tr>
              <th className="column-type-1">
                <button
                  className="bookings-table-head-btn"
                  onClick={sortByName}
                >
                  Location
                  {!nameModified && (
                    <div className="sort-icons">
                      <i className="fa-solid fa-sort"></i>
                    </div>
                  )}
                  {nameModified && nameSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-up"></i>
                    </div>
                  )}
                  {nameModified && !nameSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-down"></i>
                    </div>
                  )}
                </button>
              </th>
              <th className="column-type-1">
                <button
                  className="bookings-table-head-btn"
                  onClick={sortByName}
                >
                  Price
                  {!nameModified && (
                    <div className="sort-icons">
                      <i className="fa-solid fa-sort"></i>
                    </div>
                  )}
                  {nameModified && nameSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-up"></i>
                    </div>
                  )}
                  {nameModified && !nameSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-down"></i>
                    </div>
                  )}
                </button>
              </th>
              <th className="column-type-3">
                <button
                  className="bookings-table-head-btn"
                  onClick={sortByGuests}
                >
                  Guests
                  {!guestsModified && (
                    <div className="sort-icons">
                      <i className="fa-solid fa-sort"></i>
                    </div>
                  )}
                  {guestsModified && guestsSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-up"></i>
                    </div>
                  )}
                  {guestsModified && !guestsSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-down"></i>
                    </div>
                  )}
                </button>
              </th>
              <th className="column-type-2">
                <button
                  className="bookings-table-head-btn"
                  onClick={sortByCheckin}
                >
                  Check-In Date
                  {!checkinModified && (
                    <div className="sort-icons">
                      <i className="fa-solid fa-sort"></i>
                    </div>
                  )}
                  {checkinModified && checkinSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-up"></i>
                    </div>
                  )}
                  {checkinModified && !checkinSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-down"></i>
                    </div>
                  )}
                </button>
              </th>
              <th className="column-type-2">
                <button
                  className="bookings-table-head-btn"
                  onClick={sortByCheckout}
                >
                  Check-Out Date
                  {!checkoutModified && (
                    <div className="sort-icons">
                      <i className="fa-solid fa-sort"></i>
                    </div>
                  )}
                  {checkoutModified && checkoutSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-up"></i>
                    </div>
                  )}
                  {checkoutModified && !checkoutSort && (
                    <div className="sort-icons icon-black">
                      <i className="fa-solid fa-sort-down"></i>
                    </div>
                  )}
                </button>
              </th>
              <th className="column-type-2">Contact Host</th>
            </tr>
          </thead>
          <tbody>
            {sorted.length > 0
              ? sorted.map((booking) => (
                  <tr>
                    <td>
                      <NavLink to={`/spots/${booking.spotId}`}>
                        <div className="booking-name-info">
                          <img
                            src={booking.spotImg}
                            className="booking-spot-img"
                          />
                          {booking.name}
                        </div>
                      </NavLink>
                    </td>
                    <td>{booking.guests}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td className="contact-host-col">
                      <button className="contact-host-btn">
                        <i className="fa-solid fa-envelope"></i> Contact{" "}
                        {booking.owner}
                      </button>
                    </td>
                  </tr>
                ))
              : list.map((booking) => (
                  <tr>
                    <td>
                      <NavLink to={`/spots/${booking.spotId}`}>
                        <div className="booking-name-info">
                          <img
                            src={booking.spotImg}
                            className="booking-spot-img"
                          />
                          {booking.name}
                        </div>
                      </NavLink>
                    </td>
                    <td>{booking.guests}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td className="contact-host-col">
                      <button className="contact-host-btn">
                        <i className="fa-solid fa-envelope"></i> Contact{" "}
                        {booking.owner}
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
