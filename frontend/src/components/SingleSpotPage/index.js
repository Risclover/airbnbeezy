import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getSpotById, deleteSpot, getAllSpots } from "../../store/spots";
import "./SingleSpotPage.css";
import EditSpot from "../SpotForm/EditSpot";
import SingleSpotHead from "./SingleSpotHead";
import SingleSpotPhotos from "./SingleSpotPhotos";
import SingleSpotReviews from "./SingleSpotReviews";

export default function SingleSpotPage() {
  const [editSpotId, setEditSpotId] = useState(null);
  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
  const spotToEdit = useSelector((state) => state.spots[editSpotId]);

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
      <SingleSpotHead count={count} />
      <SingleSpotPhotos />
      <SingleSpotReviews count={count} spot={spot} />
      {/* <div key={spot.id} className="spot">
            <ul>
                <li>{spot.name} ${spot.price}</li>
                <li>{spot.description}</li>
                <li>{spot.address}</li>
                <li>{spot.city}</li>
                <li>{spot.state}</li>
                <li><img src={spot.previewImage}/></li>
            </ul>
            {sessionUser && spot.ownerId === sessionUser.id ?
            <div className="owner-buttons">
              <button className="edit-spot" onClick={(e) => handleEdit(e, spot.id)}>Edit</button>
              <button className="delete-spot" onClick={(e) =>  handleDelete(e, spot.id)}>Delete</button>
          </div> : null}
        </div> */}
    </div>
  );
}
