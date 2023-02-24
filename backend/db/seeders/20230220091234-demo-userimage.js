"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserImages", [
      {
        userId: 1,
        url: "https://a0.muscache.com/im/pictures/user/37bd416a-ddd2-4aaf-9bff-1e1db2dd11f3.jpg",
      },
      {
        userId: 2,
        url: "https://a0.muscache.com/im/pictures/user/1b824701-242d-40da-8bf5-df3c9a540555.jpg",
      },
      {
        userId: 3,
        url: "https://a0.muscache.com/im/pictures/user/b2e8510d-2d2e-4a34-93c2-a1398fbfdb95.jpg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserImages", {
      userId: { [Op.in]: [1, 2, 3] },
    });
  },
};
