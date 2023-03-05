const express = require("express");
const router = express.Router();
const { Message, User } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");

// Create a message
router.post("/", requireAuth, async (req, res) => {
  const { content, seen, recipientId } = req.body;

  // Identify current user
  const currentUser = await User.findOne({
    where: {
      id: req.user.id,
    },
  });

  // Create the message
  const createdMsg = await Message.create({
    content: content,
    seen: seen,
    senderId: currentUser.id,
    recipientId: recipientId,
  });

  res.json(createdMsg);
});

// Get all messages for logged-in user
router.get("/", requireAuth, async (req, res) => {
  // Identify current user
  const currentUser = await User.findOne({
    where: {
      id: req.user.id,
    },
  });

  // Find all messages where the recipient is the logged-in user
  const userMessages = await Message.findAll({
    where: {
      recipientId: currentUser.id,
    },
  });

  let messages = [];
  userMessages.forEach((message) => {
    messages.push(message.toJSON());
  });

  res.json({
    Messages: messages,
  });
});

// Get a single, specific message
router.get("/:messageId", requireAuth, async (req, res) => {
  const { messageId } = req.params;
  const message = await Message.findByPk(messageId, {
    raw: true,
  });

  if (!message) {
    const err = new Error("messageId invalid");
    err.status = 404;
    err.title = "messageId invalid";
    err.errors = ["Message couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  res.json(message);
});

// Delete a message
router.delete("/:messageId", async (req, res) => {
  const { messageId } = req.params;
  const message = await Message.findByPk(messageId);

  // Error if no message found with that id
  if (!message) {
    return res.status(404).json({
      message: "Message couldn't be found.",
      statusCode: 404,
    });
  }

  // Authorization error (i.e. not logged in, incorrect user logged in)
  if (message.recipientId !== req.user.id) {
    req.status(403).json({
      message: "Log in to handle your messages.",
    });
  }

  await message.destroy();

  res
    .json({
      message: "Successfully deleted",
      statusCode: 200,
    })
    .status(200);
});

module.exports = router;
