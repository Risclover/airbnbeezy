import { csrfFetch } from "./csrf";
const initialState = {};

const ADD = "bookings/ADD";
const POPULATE = "bookings/POPULATE";
const UPDATE = "bookings/UPDATE";
const REMOVE = "bookings/REMOVE";

const add = (bookings) => ({
  type: ADD,
  bookings,
});

const update = (bookings) => {
  return {
    type: UPDATE,
    bookings,
  };
};

const remove = (bookingId) => {
  return {
    type: REMOVE,
    bookingId,
  };
};

const populate = (bookings) => {
  return {
    type: POPULATE,
    bookings,
  };
};

export const getBookings = (state) => Object.values(state.bookings);
export const getBookingById = (id) => (state) => state.bookings[id];
export const getBookingsByOwnerId = (ownerId) => (state) =>
  state.bookings[ownerId];

export const addBooking = (formData) => async (dispatch) => {
  const response = await csrfFetch("/api/bookings/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const bookings = await response.json();
    dispatch(add(bookings));
    return bookings;
  }
};

export default function BookingsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE:
      return action.bookings.Bookings.reduce((bookings, booking) => {
        bookings[booking.id] = booking;
        return bookings;
      }, {});
    case ADD:
      return { ...state, bookings: { [action.bookings.id]: action.bookings } };
    case UPDATE:
      return { ...state, bookings: { [action.bookings.id]: action.bookings } };
    case REMOVE:
      let removeState = { ...state };
      delete removeState[action.itemId];
      return removeState;
    default:
      return state;
  }
}
