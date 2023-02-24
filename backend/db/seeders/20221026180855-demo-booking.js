"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Bookings", [
      {
        spotId: 1,
        userId: 1,
        startDate: "2022-10-25",
        endDate: "2022-10-30",
        guests: 1,
      },
      {
        spotId: 2,
        userId: 2,
        startDate: "2022-11-03",
        endDate: "2022-11-05",
        guests: 2,
      },
      {
        spotId: 3,
        userId: 3,
        startDate: "2022-10-27",
        endDate: "2022-10-29",
        guests: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Bookings", {
      userId: { [Op.in]: [1, 2, 3] },
    });
  },
};
