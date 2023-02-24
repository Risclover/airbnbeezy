import { csrfFetch } from "./csrf";

const initialState = {};

const LOAD = "users/LOAD";
const UPDATE = "users/UPDATE";

const load = (users) => ({
  type: LOAD,
  users,
});

const update = (user) => ({
  type: UPDATE,
  user,
});

export const getUsers = () => async (dispatch) => {
  const response = await csrfFetch("/api/users");
  if (response.ok) {
    const users = await response.json();
    dispatch(load(users));
    return users;
  }
};

export const updateUser = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(update(user));
    return user;
  }
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return action.users.Users.reduce((users, user) => {
        users[user.id] = user;
        return users;
      }, {});
    case UPDATE:
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
}
