import { csrfFetch } from "./csrf";

const initialState = {};

const LOAD = "users/LOAD";
const LOAD_SINGLE = "users/LOAD_SINGLE";
const UPDATE = "users/UPDATE";

const load = (users) => ({
  type: LOAD,
  users,
});

const loadSingle = (user) => {
  return {
    type: LOAD_SINGLE,
    user,
  };
};

export const getUsers = () => async (dispatch) => {
  const response = await csrfFetch("/api/users");
  if (response.ok) {
    const users = await response.json();
    dispatch(load(users));
    return users;
  }
};

export const updateUser = (user, userId) => async (dispatch) => {
  const { about, location, work, image } = user;
  const formData = new FormData();

  if (about) formData.append("about", about);
  if (location) formData.append("location", location);
  if (work) formData.append("work", work);
  if (image) formData.append("image", image);

  const response = await csrfFetch(`/api/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(loadSingle(data.user));
  }
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return action.users.Users.reduce((users, user) => {
        users[user.id] = user;
        return users;
      }, {});
    case LOAD_SINGLE:
      return { ...state, [action.user.id]: action.user };
    case UPDATE:
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
}
