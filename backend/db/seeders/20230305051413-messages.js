"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Messages", [
      {
        content: "Hey!",
        senderId: 1,
        recipientId: 2,
        seen: true,
      },
      {
        content: "What's up?",
        senderId: 2,
        recipientId: 1,
        seen: true,
      },
      {
        content: "Not much, what's up with you?",
        senderId: 1,
        recipientId: 2,
        seen: false,
      },
      {
        content: "Hello? You there?",
        senderId: 2,
        recipientId: 1,
        seen: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Messages", {
      senderId: {
        [Op.in]: [1, 2],
      },
    });
  },
};
