import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots, getSpotById, getSpots } from "../../../store/spots";
import { BsFillCircleFill } from "react-icons/bs";

import "./EditSpot.css";
import EditSpotNavbar from "./EditSpotNavbar";
import EditSpotMain from "./EditSpotMain";
import EditPhotos from "./Photos/EditPhotos";
import EditPhotosNavbar from "./Photos/EditPhotosNavbar";

export default function EditSpot() {
  const photosRef = useRef(null);
  const listingRef = useRef(null);
  const locationRef = useRef(null);
  const propertyRef = useRef(null);
  const pricingRef = useRef(null);
  const statusRef = useRef(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const [isOwner, setIsOwner] = useState(false);
  const [openListed, setOpenListed] = useState(false);

  const [photos, setPhotos] = useState(false);

  const currentUser = useSelector((state) => state.session.user);
  const spot = useSelector(getSpotById(spotId));

  useEffect(() => {
    dispatch(getAllSpots());
    if (spot?.ownerId === currentUser.id) setIsOwner(true);
  }, []);

  const statusScroll = () => {
    statusRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="edit-spot-page">
      {isOwner && (
        <div className="edit-spot">
          <div className="edit-spot-header">
            <div className="edit-spot-header-left">
              <h1>{spot?.name}</h1>
            </div>
            <div className="edit-spot-header-right">
              <span onClick={statusScroll}>
                <div
                  className={
                    spot?.listed
                      ? "edit-spot-list-status list-status-green"
                      : "edit-spot-list-status list-status-red"
                  }
                >
                  <BsFillCircleFill /> {spot?.listed ? "Listed" : "Unlisted"}
                </div>
              </span>
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
          {photos && <EditPhotosNavbar setPhotos={setPhotos} />}
          {!photos && (
            <EditSpotNavbar
              pricingRef={pricingRef}
              propertyRef={propertyRef}
              locationRef={locationRef}
              listingRef={listingRef}
              photosRef={photosRef}
              setPhotos={setPhotos}
            />
          )}
          {!photos && (
            <EditSpotMain
              openListed={openListed}
              setOpenListed={setOpenListed}
              setPhotos={setPhotos}
              spot={spot}
              pricingRef={pricingRef}
              propertyRef={propertyRef}
              locationRef={locationRef}
              listingRef={listingRef}
              photosRef={photosRef}
              statusRef={statusRef}
            />
          )}
          {photos && <EditPhotos spot={spot} />}
        </div>
      )}
      {!isOwner && (
        <div className="edit-spot-illegal">
          <h1>You aren't the owner of this listing.</h1>
        </div>
      )}
    </div>
  );
}
