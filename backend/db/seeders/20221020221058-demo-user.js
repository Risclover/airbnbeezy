"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "demo@user.com",
        username: "UserGuy",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "sara091592@gmail.com",
        username: "Risclover",
        hashedPassword: bcrypt.hashSync("Kirkland11"),
      },
      {
        email: "seldunlop@gmail.com",
        username: "sarabara916",
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
