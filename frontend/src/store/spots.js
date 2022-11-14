
const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';

const getAllSpots = spots => ({
    type: GET_ALL_SPOTS,
    spots
});

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
      const spots = await response.json();
      dispatch(getAllSpots(spots));
      return spots;
    }
};

const spotsReducer = (state, action) => {
    switch(action.type) {
        case GET_ALL_SPOTS:
            const allSpots = {};
            action.spots.forEach(spot => {
                allSpots[spot.id] = spot;
            });
            return {
                ...state,
                spots: allSpots
            }
        default:
            return state;
    }
}
