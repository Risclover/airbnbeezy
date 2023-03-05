import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, getMessages } from "../../store/messages";
import { getUsers } from "../../store/users";
import "./Messages.css";

import moment from "moment";

export default function Messages() {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));
  const currentUser = useSelector((state) => state.session.user);
  const [content, setContent] = useState("");
  const [seen, setSeen] = useState(false);
  const [recipientId, setRecipientId] = useState();
  const [senderId, setSenderId] = useState(currentUser.id);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    dispatch(getMessages());
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    for (let user of users) {
      if (user.id === currentUser.id) {
        if (user.receivedMessages.length > 0) {
          setMessages(user.receivedMessages);
        }
      }
    }
  }, []);

  const handleMessage = async (e, recipientId) => {
    e.preventDefault();
    setRecipientId(recipientId);
    const payload = { content, seen, recipientId, senderId };
    await dispatch(createMessage(payload));
    dispatch(getMessages());
    setContent("");
  };

  return (
    <div className="messages-page">
      <div className="messages">
        {messages.map((message) => (
          <div className="message">
            <div className="message-sender">
              <strong>From:</strong> {users[message.senderId].username}{" "}
              <strong>To:</strong> {users[message.recipientId].username}
            </div>
            <div className="message-recipient">
              <strong>Sent:</strong>{" "}
              {moment(message.createdAt).format("DD/MM/YYYY - hh:mma")}
            </div>
            <div className="message-content">
              <strong>Message:</strong> {message.content}
            </div>
            <div className="message-reply">
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></textarea>
              <button
                className="reply-btn"
                onClick={(e) => handleMessage(e, message.senderId)}
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
