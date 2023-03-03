import React from "react";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { deleteBooking, getBookings } from "../../store/bookings";

export default function ConfirmDeleteBooking({
  setShowDeleteBooking,
  bookingId,
}) {
  const dispatch = useDispatch();

  const handleDeletion = async (e) => {
    e.preventDefault();
    await dispatch(deleteBooking(bookingId));
    setShowDeleteBooking(false);
    dispatch(getBookings());
  };

  return (
    <div className="confirm-delete-spot">
      <div className="confirm-delete-spot-header">
        <button
          className="close-delete-spot-modal"
          onClick={() => setShowDeleteBooking(false)}
        >
          <MdOutlineClose />
        </button>
      </div>
      <div className="confirm-delete-spot-body">
        <h1>Are you sure?</h1>
        <p>Are you sure you want to delete this booking?</p>
      </div>
      <div className="confirm-delete-spot-button-bar">
        <button
          className="confirm-delete-spot-cancel"
          onClick={() => setShowDeleteBooking(false)}
        >
          Cancel
        </button>
        <button
          className="confirm-delete-spot-confirm"
          onClick={handleDeletion}
        >
          Delete Booking
        </button>
      </div>
    </div>
  );
}
