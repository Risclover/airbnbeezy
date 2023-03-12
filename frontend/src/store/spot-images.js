import { csrfFetch } from "./csrf";
const initialState = {};

const CREATE = "spot-images/CREATE";
const LOAD = "spot-images/LOAD";
const LOAD_SINGLE = "spot-images/LOAD_SINGLE";
const DELETE = "spot-images/DELETE";

const create = (data) => ({
  type: CREATE,
  payload: data,
});

const load = (images) => ({
  type: LOAD,
  images,
});

const loadSingle = (image) => ({
  type: LOAD_SINGLE,
  payload: image,
});

const remove = (imageId) => ({
  type: DELETE,
  payload: imageId,
});

export const addSpotImg = (data) => async (dispatch) => {
  const { image, preview, spotId } = data;
  const formData = new FormData();
  formData.append("preview", preview);
  formData.append("spotId", spotId);
  if (image) formData.append("image", image);
  const response = await csrfFetch(`/api/spot-images`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(create(data.data));
    return data;
  }
};

export const getSpotImgs = () => async (dispatch) => {
  const response = await csrfFetch("/api/spot-images");
  if (response.ok) {
    const images = await response.json();
    dispatch(load(images));
    return images;
  }
};

export const editSpotImg = (image, imageId) => async (dispatch) => {
  const { preview, url } = image;
  const response = await csrfFetch(`/api/spot-images/${imageId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      preview,
      url,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(loadSingle(data));
    return data;
  }
  const data = await response.json();
  return data;
};

export const deleteSpotImg = (imageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spot-images/${imageId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const msg = await response.json();
    dispatch(remove(imageId));
    return msg;
  }
};

export default function spotImagesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return { ...state, image: action.payload };
    case LOAD:
      return action.images.SpotImages.reduce((images, image) => {
        images[image.id] = image;
        return images;
      }, {});
    case LOAD_SINGLE:
      return {
        ...state,
        [action.image.id]: { ...action.image },
      };
    case DELETE:
      let removeState = { ...state };
      delete removeState[action.imageId];
      return removeState;
    default:
      return state;
  }
}
