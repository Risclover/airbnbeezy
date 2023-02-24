import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getSpotById, deleteSpot, getAllSpots } from "../../store/spots";

import "./SingleSpotPage.css";
import EditSpot from "../SpotForm/EditSpot/EditSpot";
import SingleSpotHead from "./SingleSpotHead";
import SingleSpotPhotos from "./SingleSpotPhotos";
import SingleSpotReviews from "./SingleSpotReviews";
import SingleSpotAbout from "./SingleSpotAbout/SingleSpotAbout";
import { Helmet } from "react-helmet";

export default function SingleSpotPage() {
  const [editSpotId, setEditSpotId] = useState(null);

  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const spot = useSelector(getSpotById(spotId));
  const sessionUser = useSelector((state) => state.session.user);

  let reviews = useSelector((state) => Object.values(state.reviews));
  reviews = reviews.filter((review) => review.spotId === spotId);

  useEffect(() => {
    setEditSpotId(null);
    dispatch(getAllSpots());
  }, [dispatch, setEditSpotId]);

  const nav = document.querySelector(".nav");
  nav.style.position = "static";
  nav.style.paddingLeft = "40px";
  nav.style.paddingRight = "40px";

  // const handleEdit = (e, id) => {
  //   e.preventDefault();
  //   setEditSpotId(id);
  //   setShowCreateSpotForm(true);
  // };

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   dispatch(deleteSpot(id));
  //   history.replace("/");
  // };

  let count = 0;

  reviews.forEach((review) => {
    if (review.spotId === spot.id) {
      count++;
    }
  });

  if (!spot) return null;

  return (
    <div className="single-spot">
      <Helmet>
        <title>{`${spot.name} - ${spot.category}s for rent in ${spot.city}, ${
          spot.state ? spot.state + "," : ""
        } ${spot.country} - Airbnbeezy`}</title>
      </Helmet>
      <SingleSpotHead count={count} />
      <SingleSpotPhotos />
      {/* <SingleSpotReservation /> */}
      <SingleSpotAbout spot={spot} />
      <SingleSpotReviews count={count} spot={spot} />
    </div>
  );
}
