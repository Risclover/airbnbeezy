import { csrfFetch } from './csrf';

const initialState = {};

const ADD = "spots/ADD";
const ADD_IMAGE = "spots/ADD_IMAGE";
const POPULATE = "spots/POPULATE";
const UPDATE = "spots/UPDATE";
const REMOVE = 'spots/REMOVE';
const RESET = "spots/RESET"
const OWNER_SPOTS = 'spots/OWNER_SPOTS'
const OWNER = "spots/OWNER";

const add = (spots) => ({
    type: ADD,
    spots
});

const addImage = (spots) => ({
    type: ADD_IMAGE,
    spots
})

export const reset = () => {
    return {
      type: RESET
    };
  };

const getOwner = (spots) => {
    return {
        type: OWNER,
        spots
    }
}

const update = (spots) => {
    return {
        type: UPDATE,
        spots
    }
}

export const getSpots = (state) => {
    return Object.values(state.spots);
  };

export const populateSpots = (spots) => {
    return {
        type: POPULATE,
        spots
    }
}

export const populateOwnerSpots = (spots, ownerId) => {
    return {
        type: OWNER_SPOTS,
        spots,
        ownerId
    }
}

// export const getSpotOwner = (spotId) => async dispatch => {
//     const response = await csrfFetch(`/api/spots/${spotId}`);
//     if(response.ok) {
//         const spots = await response.json();
//         dispatch(getOwner(spots));
//         return spots;
//     }
// }

export const getAllSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    if(response.ok) {
        const spots = await response.json();
        dispatch(populateSpots(spots));
        return spots;
    }
}

export const getSpotById = id => state => state.spots[id];

export const getSpotsByOwnerId = ownerId => state => state.spots[ownerId];

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

export const updateSpot = data => async dispatch => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if(response.ok) {
        const spots = await response.json();
        dispatch(update(spots));
        return spots;
  };
}

export const removeSpot = (spotId) => {
    return {
      type: REMOVE,
      spotId
    };
};

export const deleteSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const spot = await response.json();
      dispatch(removeSpot(spot.id));
      return spot;
    }
  };


export default function spotsReducer(state = initialState, action) {
    switch(action.type) {
        case OWNER:
            let spotOwner = {};
            action.spots.Spots.forEach(spot => {
                if(spotOwner[spot.ownerId] === action.ownerId) {
                    spotOwner = spotOwner[spot.Owner]
                }
            })
            console.log(spotOwner);
            return spotOwner;
        case ADD:
            return { ...state, spots: {[action.spots.id]: action.spots }};
        case UPDATE:
            return { ...state, spots: {[action.spots.id]: action.spots }};
        case POPULATE:
            const newState = {};
            action.spots.Spots.forEach(spot => {
                newState[spot.id] = spot;
            })
            return newState;
        case OWNER_SPOTS:
            const ownerState = {};
            action.spots.Spots.forEach(spot => {
                if(ownerState[spot.ownerId] === action.ownerId) {
                    ownerState[spot.id] = spot;
                }
            })
            return ownerState;
        case REMOVE:
            let removeState = {...state};
            delete removeState[action.itemId];
            return removeState;
        case RESET:
            let resetState = {};
            resetState = initialState;
            return resetState;
        default:
            return state;
    }
}
