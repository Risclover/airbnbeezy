import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { BsCheckSquareFill, BsSquare } from "react-icons/bs";
import { deleteSpot, getAllSpots } from "../../../store/spots";
import { getUsers } from "../../../store/users";

export default function ConfirmDeleteSpot({ setShowDeleteModal, spotId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fakeCheck, setFakeCheck] = useState(false);
  const handleChangeCheck = () => {
    setFakeCheck(!fakeCheck);
  };

  const handleSpotDeletion = async (e) => {
    e.preventDefault();
    await dispatch(deleteSpot(spotId));
    await dispatch(getAllSpots());
    setShowDeleteModal(false);
    history.push("/my-listings");
    dispatch(getUsers());
  };

  return (
    <div className="confirm-delete-spot">
      <div className="confirm-delete-spot-header">
        <button
          className="close-delete-spot-modal"
          onClick={() => setShowDeleteModal(false)}
        >
          <MdOutlineClose />
        </button>
      </div>
      <div className="confirm-delete-spot-body">
        <h1>Are you sure?</h1>
        <p>
          Listing deacivation is permanent, so if you want to keep your info,
          you should press the 'Cancel' button and unlist your listing instead.
        </p>
        <p className="fake-check-p" onClick={() => setFakeCheck(!fakeCheck)}>
          <span className="fake-checkbox" onClick={handleChangeCheck}>
            {!fakeCheck && <BsSquare />}
            {fakeCheck && <BsCheckSquareFill />}
          </span>{" "}
          I understand that I'll no longer have access to my listing and listing
          information.
        </p>
      </div>
      <div className="confirm-delete-spot-button-bar">
        <button
          className="confirm-delete-spot-cancel"
          onClick={() => setShowDeleteModal(false)}
        >
          Cancel
        </button>
        {fakeCheck && (
          <button
            className="confirm-delete-spot-confirm"
            onClick={handleSpotDeletion}
          >
            Permanently deactivate
          </button>
        )}
        {!fakeCheck && (
          <button className="confirm-delete-spot-confirm" disabled>
            Permanently deactivate
          </button>
        )}
      </div>
    </div>
  );
}
