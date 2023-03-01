import { csrfFetch } from "./csrf";
const initialState = {};

const CREATE = "spot-images/CREATE";
const LOAD = "spot-images/LOAD";

const create = (data) => ({
  type: CREATE,
  payload: data,
});

const load = (images) => ({
  type: LOAD,
  images,
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

export default function spotImagesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return { ...state, image: action.payload };
    case LOAD:
      return action.images.SpotImages.reduce((images, image) => {
        images[image.id] = image;
        return images;
      }, {});
    default:
      return state;
  }
}
