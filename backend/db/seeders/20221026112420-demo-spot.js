"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Spots", [
      {
        ownerId: 1,
        address: "10 Testing Avenue",
        zipcode: "95811",
        city: "Los Angeles",
        state: "California",
        country: "United States of America",
        lat: 34.0522,
        lng: 118.2437,
        name: "The Villa",
        description: "A beautiful house with a pool",
        price: 200,
        category: "House",
        guests: 6,
        beds: 3,
        bedrooms: 3,
        bathrooms: 1,
      },
      {
        ownerId: 2,
        address: "7000 Delta Drive",
        zipcode: "95831",
        city: "Sacramento",
        state: "California",
        country: "United States of America",
        lat: 38.5816,
        lng: 121.4944,
        name: "A Regular House",
        description: "A regular suburban house",
        price: 180,
        category: "House",
        guests: 4,
        beds: 3,
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        ownerId: 3,
        address: "2 Silly Circle",
        city: "San Jose",
        zipcode: "48215",
        state: "California",
        country: "United States of America",
        lat: 37.3387,
        lng: 121.8853,
        name: "Castle Maximilla",
        description: "A gorgeous mansion nicknamed 'The Castle'.",
        price: 520,
        category: "Mansion",
        guests: 8,
        beds: 6,
        bedrooms: 5,
        bathrooms: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Spots", {
      ownerId: { [Op.in]: [1, 2, 3] },
    });
  },
};
