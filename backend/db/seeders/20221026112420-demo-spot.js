"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Spots", [
      {
        ownerId: 1,
        address: "10 Testing Avenue",
        city: "Los Angeles",
        state: "California",
        country: "United States of America",
        lat: 34.0522,
        lng: 118.2437,
        name: "The Villa",
        description: "A beautiful house with a pool",
        price: 200,
      },
      {
        ownerId: 2,
        address: "7000 Delta Drive",
        city: "Sacramento",
        state: "California",
        country: "United States of America",
        lat: 38.5816,
        lng: 121.4944,
        name: "A Regular House",
        description: "A regular suburban house",
        price: 180,
      },
      {
        ownerId: 3,
        address: "2 Silly Circle",
        city: "San Jose",
        state: "California",
        country: "United States of America",
        lat: 37.3387,
        lng: 121.8853,
        name: "Castle Maximilla",
        description: "A gorgeous mansion nicknamed 'The Castle'.",
        price: 520,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Spots", {
      ownerId: { [Op.in]: [1, 2, 3] },
    });
  },
};
