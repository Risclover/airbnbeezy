import { csrfFetch } from "./csrf";

const initialState = {};

const LOAD = "users/LOAD";

const load = (users) => ({
  type: LOAD,
  users,
});

export const getUsers = () => async (dispatch) => {
  const response = await csrfFetch("/api/users");
  if (response.ok) {
    const users = await response.json();
    dispatch(load(users));
    return users;
  }
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return action.users.Users.reduce((users, user) => {
        users[user.id] = user;
        return users;
      }, {});
    default:
      return state;
  }
}
