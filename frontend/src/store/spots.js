import { csrfFetch } from "./csrf";

const initialState = {};

const ADD = "spots/ADD";
const ADD_IMAGE = "spots/ADD_IMAGE";
const ADD_IMG = "spots/ADD_IMG";
const POPULATE = "spots/POPULATE";
const UPDATE = "spots/UPDATE";
const REMOVE = "spots/REMOVE";

const add = (spots) => ({
  type: ADD,
  spots,
});

const addPreviewImg = (img, spot) => ({
  type: ADD_IMAGE,
  img,
  spot,
});

const addImg = (img, spot) => ({
  type: ADD_IMG,
  img,
  spot,
});

const update = (spots) => {
  return {
    type: UPDATE,
    spots,
  };
};

const remove = (spotId) => {
  return {
    type: REMOVE,
    spotId,
  };
};

export const populateSpots = (spots) => {
  return {
    type: POPULATE,
    spots,
  };
};

export const getAllSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots");
  if (response.ok) {
    const spots = await response.json();
    dispatch(populateSpots(spots));
    return spots;
  }
};

export const getSpots = (state) => Object.values(state.spots);
export const getSpotById = (id) => (state) => state.spots[id];
export const getSpotsByOwnerId = (ownerId) => (state) => state.spots[ownerId];

export const addSpot = (formData) => async (dispatch) => {
  const response = await csrfFetch("/api/spots/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const spots = await response.json();
    dispatch(add(spots));
    return spots;
  }
};

export const updateSpot = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const spots = await response.json();
    dispatch(update(spots));
    return spots;
  }
};

export const deleteSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(remove(spot.id));
    return spot;
  }
};

export const addPreviewImage = (payload, spot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spot.id}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const img = await response.json();
    dispatch(addPreviewImg(img, spot));
    return img;
  }
};

export const addImage = (payload, spot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spot.id}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const img = await response.json();
    dispatch(addImg(img, spot));
    return img;
  }
};

export default function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE:
      return action.spots.Spots.reduce((spots, spot) => {
        spots[spot.id] = spot;
        return spots;
      }, {});
    case ADD:
      return { ...state, spots: { [action.spots.id]: action.spots } };
    case UPDATE:
      return { ...state, spots: { [action.spots.id]: action.spots } };
    case ADD_IMAGE:
      return {
        ...state,
        [action.spot.id]: { ...action.spot, previewImage: action.img.url },
      };
    case ADD_IMG:
      return {
        ...state,
        [action.spot.id]: {
          ...action.spot,
          otherImages: [action.img.url],
        },
      };
    case REMOVE:
      let removeState = { ...state };
      delete removeState[action.itemId];
      return removeState;
    default:
      return state;
  }
}
