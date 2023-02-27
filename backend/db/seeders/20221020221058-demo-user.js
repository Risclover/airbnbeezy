"use strict";
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "demo@user.com",
        username: "Demolition",
        firstName: "Demo",
        lastName: "Lition",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "sara091592@gmail.com",
        username: "Risclover",
        firstName: "Sara",
        lastName: "Dunlop",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "seldunlop@gmail.com",
        username: "sarabara916",
        firstName: "Sarah",
        lastName: "Dunlap",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "sara@aa.io",
        username: "Sara",
        firstName: "Sara",
        lastName: "Dunlop",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "jojo@aa.io",
        username: "JoJo",
        firstName: "John",
        lastName: "Ervin",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "topher@aa.io",
        username: "Topher",
        firstName: "Topher",
        lastName: "Cohen",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "matty@aa.io",
        username: "Matty",
        firstName: "Matty",
        lastName: "Kleinsmith",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "jermyjerm@aa.io",
        username: "JermyJerm",
        firstName: "Jeremy",
        lastName: "Ervin",
        hashedPassword: bcrypt.hashSync("password"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", {
      username: {
        [Op.in]: [
          "Demolition",
          "Risclover",
          "sarabara916",
          "Sara",
          "JoJo",
          "Topher",
          "Matty",
          "JermyJerm",
        ],
      },
    });
  },
};
