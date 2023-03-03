import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots, getSpotById, getSpots } from "../../../store/spots";
import { BsFillCircleFill } from "react-icons/bs";

import "./EditSpot.css";
import EditSpotNavbar from "./EditSpotNavbar";
import EditSpotMain from "./EditSpotMain";

export default function EditSpot() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const spot = useSelector(getSpotById(spotId));

  useEffect(() => {
    dispatch(getAllSpots());
  }, []);

  return (
    <div className="edit-spot-page">
      <div className="edit-spot">
        <div className="edit-spot-header">
          <div className="edit-spot-header-left">
            <h1>{spot?.name}</h1>
          </div>
          <div className="edit-spot-header-right">
            <div
              className={
                spot?.listed
                  ? "edit-spot-list-status list-status-green"
                  : "edit-spot-list-status list-status-red"
              }
            >
              <BsFillCircleFill /> {spot?.listed ? "Listed" : "Unlisted"}
            </div>
            <div className="edit-spot-preview-btn">
              <div
                className="edit-spot-preview"
                onClick={() => history.push(`/spots/${spotId}`)}
              >
                View listing
              </div>
            </div>
          </div>
        </div>
        <EditSpotNavbar />
        <EditSpotMain spot={spot} />
      </div>
    </div>
  );
}
