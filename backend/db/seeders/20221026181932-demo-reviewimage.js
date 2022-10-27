"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ReviewImages", [
      {
        reviewId: 1,
        url: "image url",
      },
      {
        reviewId: 2,
        url: "image url",
      },
      {
        reviewId: 3,
        url: "image url",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ReviewImages", {
      reviewId: { [Op.in]: [1, 2, 3] },
    });
  },
};
