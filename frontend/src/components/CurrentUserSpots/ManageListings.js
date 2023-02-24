import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpots, getAllSpots } from "../../store/spots";
import "./CurrentUserSpots.css";
import Listing from "./Listing";

export default function ManageListings() {
  const dispatch = useDispatch();
  const spotsList = useSelector(getSpots);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllSpots());
  }, []);

  return (
    <div className="user-listings manage">
      <div className="listings">
        {spotsList.map((spot) =>
          spot.ownerId === sessionUser.id ? <Listing spot={spot} /> : ""
        )}
      </div>
    </div>
  );
}
