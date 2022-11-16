import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import { getSpotById, deleteSpot } from '../../store/spots';
import './SingleSpotPage.css';
import EditSpot from '../SpotForm/EditSpot';


export default function SingleSpotPage() {
    const [editSpotId, setEditSpotId] = useState(null);
    const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);
    const spotToEdit = useSelector(state => state.spots[editSpotId]);

    const { spotId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const spot = useSelector(getSpotById(spotId));
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        setEditSpotId(null);
    }, [setEditSpotId]);

    const handleEdit = (e, id) => {
        e.preventDefault();
        setEditSpotId(id);
        setShowCreateSpotForm(true);
    }


    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteSpot(id))
        history.replace('/')
    }

    let content = null;

    if(showCreateSpotForm) {
    content =
    <div className="create-spot-stuff">
    <EditSpot spotToEdit={spotToEdit} showCreateSpotForm={showCreateSpotForm}
            setShowCreateSpotForm={setShowCreateSpotForm} />
    </div>

    }


    return (
    <div className="single-spot">
        {content}
        <div key={spot.id} className="spot">
            <ul>
                <li>{spot.name} ${spot.price}</li>
                <li>{spot.description}</li>
                <li>{spot.address}</li>
                <li>{spot.city}</li>
                <li>{spot.state}</li>
                <li><img src={spot.url}/></li>
            </ul>
            {spot.ownerId === sessionUser.id ?
            <div className="owner-buttons">
              <button className="edit-spot" onClick={(e) => handleEdit(e, spot.id)}>Edit</button>
              <button className="delete-spot" onClick={(e) =>  handleDelete(e, spot.id)}>Delete</button>
          </div> : ""}
        </div>
    </div>
    )
}
