"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("SpotImages", [
      {
        spotId: 1,
        url: "https://imageio.forbes.com/specials-images/imageserve//62b2f5b1344d85edc17a1f0b/0x0.jpg",
        preview: true,
      },
      {
        spotId: 2,
        url: "https://www.boredpanda.com/blog/wp-content/uploads/2019/05/coolest-unique-best-rent-houses-airbnb-9-5cefe446e5727__700.jpg",
        preview: true,
      },
      {
        spotId: 3,
        url: "https://www.boredpanda.com/blog/wp-content/uploads/2019/05/coolest-unique-best-rent-houses-airbnb-20-5cefe466adb03__700.jpg",
        preview: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ReviewImages", {
      spotId: { [Op.in]: [1, 2, 3] },
    });
  },
};
