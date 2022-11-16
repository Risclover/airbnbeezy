import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SpotForm from '../SpotForm';
import { getSpots, getAllSpots, addSpot } from '../../store/spots';
import './Spots.css';

export default function Spots() {
    const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
    const spotsList = useSelector(getSpots);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSpots());

      }, [dispatch]);

let content = null;

const handleClick = () => {
    if(sessionUser) {
        setShowCreateSpotForm(true);
    }
}

const openSingleSpot = (id) => {
    return <Redirect to={`/spots/${id}`} />
}

if(showCreateSpotForm) {
    content = <SpotForm showCreateSpotForm={showCreateSpotForm}
    setShowCreateSpotForm={setShowCreateSpotForm} />
}

return (
    <div>
        <button className="create-spot" onClick={handleClick}>Create Spot</button>
        {content}
        <h2>All Spots:</h2>
        <div className="spots-list">
          {spotsList.map((spot) => (
            <Link to={`/spots/${spot.id}`}>
                <div key={spot.id} className="spot-box" onClick={openSingleSpot}>
                    <ul>
                        <li>{spot.name} ${spot.price}</li>
                        <li>{spot.description}</li>
                        <li>{spot.address}</li>
                        <li>{spot.city}</li>
                        <li>{spot.state}</li>
                        <li>{spot.country}</li>
                        <li><img src={spot.url}/></li>
                    </ul>
                    <button className="edit-spot">Edit</button>
                </div>
            </Link>
        ))}
        </div>
    </div>
    )
}
