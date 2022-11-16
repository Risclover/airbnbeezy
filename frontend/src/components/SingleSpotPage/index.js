import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getSpotById } from '../../store/spots';

export default function SingleSpotPage() {
    const { spotId } = useParams();
    const spot = useSelector(getSpotById(spotId));

    return (
        <div key={spot.id} className="spot">
        <ul>
            <li>{spot.name} ${spot.price}</li>
            <li>{spot.description}</li>
            <li>{spot.address}</li>
            <li>{spot.city}</li>
            <li>{spot.state}</li>
            <li>{spot.country}</li>
            <li><img src={spot.url}/></li>
            <li>        <button className="edit-spot">Edit</button>
</li>
        </ul>
        <Link to="/">Go Back</Link>
    </div>
    )
}
