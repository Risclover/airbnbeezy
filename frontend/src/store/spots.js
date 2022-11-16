import { csrfFetch } from './csrf';

const initialState = {};

const ADD = "spots/ADD";
const POPULATE = "spots/POPULATE";
const UPDATE = "spots/UPDATE";

const add = (spots) => ({
    type: ADD,
    spots
});

// const update = (spotId) => {
//     return {
//         type: UPDATE,
//         spotId
//     }
// }

export const getSpots = (state) => {
    return Object.values(state.spots);
  };

export const populateSpots = (spots) => {
    return {
        type: POPULATE,
        spots
    }
}

export const getAllSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    if(response.ok) {
        const spots = await response.json();
        dispatch(populateSpots(spots));
        return spots;
    }
}

export const getSpotById = id => state => state.spots[id];

export const addSpot = (formData) => async dispatch => {
    const response = await csrfFetch("/api/spots/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if(response.ok) {
	const spots = await response.json();
	dispatch(add(spots));
	return spots;
    }
};


export default function spotsReducer(state = initialState, action) {
    switch(action.type) {
        // case UPDATE:
        //     const newerState = {};
        //     action.spots.Spots.forEach(spot => {
        //         if(newerState[spot.id] === action.spotId) {
        //             console.log(newerState[spot.id]);
        //         }
        //     })
        //     return newerState;
        case POPULATE:
            console.log(action);
            const newState = {};
            action.spots.Spots.forEach(spot => {
                newState[spot.id] = spot;
            })
            return newState;
        case ADD:
            return { ...state, spots: {[action.spots.id]: action.spots }};
        default:
            return state;
    }
}
