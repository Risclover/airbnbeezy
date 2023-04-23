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
        about:
          "'Ello, I'm Demo! I host places with my hubby bubby, Omed. We love Airbnbeezy, and we love hosting!!",
        location: "CA, USA",
        work: "Airbnbeezy hosts",
        profileImageUrl:
          "https://a0.muscache.com/im/pictures/user/37bd416a-ddd2-4aaf-9bff-1e1db2dd11f3.jpg",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "sara091592@gmail.com",
        username: "Risclover",
        firstName: "Sara",
        lastName: "Dunlop",
        profileImageUrl:
          "https://a0.muscache.com/im/pictures/user/1b824701-242d-40da-8bf5-df3c9a540555.jpg",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "seldunlop@gmail.com",
        username: "sarabara916",
        firstName: "Sarah",
        lastName: "Dunlap",
        about:
          "Come stay in one of our many locations - we love having guests every single day of the year. Already visited? Drop a review telling us about your experience - we constantly strive to do better.",
        location: "Missouri, USA",
        work: "Law Education",
        profileImageUrl:
          "https://a0.muscache.com/im/pictures/user/b2e8510d-2d2e-4a34-93c2-a1398fbfdb95.jpg",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "sara@aa.io",
        username: "Sara",
        firstName: "Sara",
        lastName: "Dunlop",
        about:
          "I live in Florida, but I want to go everywhere! I'm 23 and a student.",
        location: "Sunnydale, Florida, USA",
        work: "Student",
        profileImageUrl:
          "https://cdn.discordapp.com/attachments/1010335882378739793/1059298694178029689/659EBC15-4B26-4835-AE73-0AD466808969.JPG",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "jojo@aa.io",
        username: "JoJo",
        firstName: "John",
        lastName: "Ervin",
        profileImageUrl:
          "https://scontent.fsac1-2.fna.fbcdn.net/v/t1.18169-9/970699_690761850950378_1578849464_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SiUg3-WqG9EAX8g-MwP&_nc_ht=scontent.fsac1-2.fna&oh=00_AfB8tblB4y_GITpzoeHI0f91r2ZhBdDSQ2hN1Di1lbRS1w&oe=646C3399",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "topher@aa.io",
        username: "Topher",
        firstName: "Topher",
        lastName: "Cohen",
        profileImageUrl:
          "https://media.discordapp.net/attachments/1010335882378739793/1049490135080767540/IMG_5275.jpg?width=927&height=905",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "matty@aa.io",
        username: "Matty",
        firstName: "Matty",
        lastName: "Kleinsmith",
        profileImageUrl: "https://mattkleinsmith.github.io/images/pfp.png",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "jermyjerm@aa.io",
        username: "JermyJerm",
        firstName: "Jeremy",
        lastName: "Ervin",
        profileImageUrl:
          "https://scontent.fsac1-2.fna.fbcdn.net/v/t1.18169-9/534998_10201633422628172_1738461989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=cEmlNpxItzgAX8XSzNI&_nc_ht=scontent.fsac1-2.fna&oh=00_AfA1BNu25N6Sv5cbEBFOyAn1urobGmyvvPyNMdloyyr8Sw&oe=646C2B99",
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
