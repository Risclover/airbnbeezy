"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        spotId: 1,
        userId: 1,
        review: "5 stars, good job",
        stars: 5,
      },
      {
        spotId: 2,
        userId: 2,
        review: "9/10, would go again",
        stars: 4,
      },
      {
        spotId: 3,
        userId: 3,
        review: "I enjoyed my stay. Ran out of toilet paper.",
        stars: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Reviews", {
      userId: { [Op.in]: [1, 2, 3] },
    });
  },
};
