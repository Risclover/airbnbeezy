import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SpotForm from '../SpotForm';
import { getSpots, getAllSpots } from '../../store/spots';
import './Spots.css';

export default function Spots() {
    const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
    const spotsList = useSelector(getSpots);
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSpots());

      }, [dispatch]);

const openSingleSpot = (id) => {
    return <Redirect to={`/spots/${id}`} />
}

let content = null;

const handleClick = () => {
    setShowCreateSpotForm(true);
}

if(showCreateSpotForm) {
    content =
    <div className="create-spot-stuff">
    <SpotForm showCreateSpotForm={showCreateSpotForm}
            setShowCreateSpotForm={setShowCreateSpotForm} />
    </div>

}

return (
    <div>
        {sessionUser ? <button className="create-spot" onClick={handleClick}>Create Spot</button> : null}
        {content}
        <h2>All Spots:</h2>
        <div className="spots-list">
          {spotsList.map((spot) => (
            <Link to={`/spots/${spot.id}`}>
                <div key={spot.id} className="spot-box" onClick={openSingleSpot}>
                    <ul>
                        <li className="spotcard-location">{spot.city}, {spot.state}</li>
                        <li className="spotcard-host">Hosted by <span className="spotcard-hostname">{sessionUser.name}</span></li>
                        <li className="spotcard-priceline"><span className="spotcard-price">${spot.price}</span> night</li>

                        <li><img src={spot.url}/></li>
                    </ul>
                </div>
            </Link>
        ))}
        </div>
    </div>
    )
}
