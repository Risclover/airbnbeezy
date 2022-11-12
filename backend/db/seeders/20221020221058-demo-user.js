"use strict";
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "demo@user.com",
        username: "Demo-lition",
        firstName: "User",
        lastName: "Guy",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "sara091592@gmail.com",
        username: "Risclover",
        firstName: "Sara",
        lastName: "Dunlop",
        hashedPassword: bcrypt.hashSync("samplepass"),
      },
      {
        email: "seldunlop@gmail.com",
        username: "sarabara916",
        firstName: "Sarah",
        lastName: "Dunlap",
        hashedPassword: bcrypt.hashSync("Sarabara12!"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", {
      username: { [Op.in]: ["UserGuy", "Risclover", "sarabara916"] },
    });
  },
};
