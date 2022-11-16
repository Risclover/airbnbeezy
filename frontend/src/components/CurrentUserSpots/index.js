import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { getAllSpots, getSpots, deleteSpot } from '../../store/spots';
import './CurrentUserSpots.css';

export default function CurrentUserSpots() {
  const spotsList = useSelector(getSpots);

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteSpot(id))
    history.replace('/spots/current')
}

  return (
    <div className="spots">
      {spotsList.map(spot => (
        spot.ownerId === sessionUser.id ?
        <Link to={`/spots/${spot.id}`}>
        <div key={spot.id} className="spot-box">
          <ul>
              <li className="spotcard-location">{spot.city}, {spot.state}</li>
              <li className="spotcard-host">Hosted by</li>
              <li className="spotcard-priceline"><span className="spotcard-price">${spot.price}</span> night</li>
              <li><img src={spot.url}/></li>
          </ul>
        </div>
        </Link>
        : ""
      ))}

    </div>
  )
}
