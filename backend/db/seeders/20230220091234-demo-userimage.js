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
      {
        userId: 4,
        url: "https://cdn.discordapp.com/attachments/1010335882378739793/1059298694178029689/659EBC15-4B26-4835-AE73-0AD466808969.JPG",
      },
      {
        userId: 5,
        url: "https://scontent.fsac1-2.fna.fbcdn.net/v/t1.18169-9/970699_690761850950378_1578849464_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XSOrucdfnysAX_Hgd-2&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBGb3i5Trzv70v9qZ0VTmaWWAxaSjPhgAcPNNm9Tg7Jjg&oe=64225F99",
      },
      {
        userId: 6,
        url: "https://media.discordapp.net/attachments/1010335882378739793/1049490135080767540/IMG_5275.jpg?width=927&height=905",
      },
      {
        userId: 7,
        url: "https://mattkleinsmith.github.io/images/pfp.png",
      },
      {
        userId: 8,
        url: "https://scontent.fsac1-2.fna.fbcdn.net/v/t1.6435-9/134421989_400802391188670_7593452170124796361_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=GK8tSrU4e2oAX_Lfqgi&_nc_ht=scontent.fsac1-2.fna&oh=00_AfCRlbVeUSyo70NA0N2OOS7oNjI0JCOSXRF3LEj_D7JD-g&oe=64226E6D",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserImages", {
      userId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
    });
  },
};
