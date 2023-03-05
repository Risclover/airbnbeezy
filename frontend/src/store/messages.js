import { csrfFetch } from "./csrf";

const initialState = {};

const LOAD = "messages/LOAD";
const LOAD_SINGLE = "messages/LOAD_SINGLE";
const REMOVE = "messages/REMOVE";

// ----------------- ACTIONS ----------------- //

const loadSingle = (message) => ({
  type: LOAD_SINGLE,
  message,
});

const load = (messages) => ({
  type: LOAD,
  messages,
});

const remove = (messageId) => ({
  type: REMOVE,
  messageId,
});

// ----------------- THUNKS ----------------- //

export const getMessages = () => async (dispatch) => {
  const response = await csrfFetch("/api/messages");
  if (response.ok) {
    const messages = await response.json();
    dispatch(load(messages));
    return messages;
  }
};

export const getSingleMessage = (messageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/messages/${messageId}`);
  if (response.ok) {
    const message = await response.json();
    dispatch(loadSingle(message));
    return message;
  }
};

export const createMessage = (payload) => async (dispatch) => {
  const { content, seen, senderId, recipientId } = payload;
  const response = await csrfFetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, seen, senderId, recipientId }),
  });

  if (response.ok) {
    const message = await response.json();
    dispatch(loadSingle(message));
    return message;
  }
};

export const deleteMessage = (messageId) => async (dispatch) => {
  const response = await csrfFetch(`/api/messages/${messageId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const message = await response.json();
    dispatch(remove(messageId));
    return message;
  }
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return action.messages.Messages.reduce((messages, message) => {
        messages[message.id] = message;
        return messages;
      }, {});
    case LOAD_SINGLE:
      return {
        ...state,
        [action.message.id]: { ...action.message },
      };
    case REMOVE:
      let removeState = { ...state };
      delete removeState[action.messageId];
      return removeState;
    default:
      return state;
  }
}
