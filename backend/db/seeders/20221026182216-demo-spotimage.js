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
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46276206/original/792df85b-83ba-4805-a113-15f9dd7558fd.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46276206/original/61c4df3b-5c44-43e0-94c9-19cc43683e6e.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46276206/original/c7c1cc87-1d06-48e4-9621-4d3e511927dc.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://www.airbnb.com/rooms/46276206?adults=1&category_tag=Tag%3A8144&children=0&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-03-12&check_out=2023-03-19&federated_search_id=2f3bb33c-890b-4654-a4a6-415a349d8e9f&source_impression_id=p3_1677350481_fwTXT20U6Z2mW8%2FH&modal=PHOTO_TOUR_SCROLLABLE&modalItem=1202275556",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46276206/original/258438bf-1c13-4c79-b591-072b38890997.jpeg?im_w=1440",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-52777713/original/59d52802-1e24-4d9d-bbc3-b5836bb46942.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-52777713/original/10a3b5be-93b1-4787-a78d-9da83b4024af.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-52777713/original/872afe93-4ca9-4687-8755-192f3df4f082.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-52777713/original/27b4f7d6-55b2-427a-b237-10ffb9954c8a.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-52777713/original/5d58feb1-9f2f-4dcf-ac3c-5745b3569c70.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/d7e6f3b3-03f5-46bc-b8d9-7df86fa4935b.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/a8834544-65ff-42b1-89cb-ad2d6057455f.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/45775adc-68d5-4937-a2e6-82a8d1161d94.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/55a4ca13-3a25-46ad-82c7-01ff49fa43c9.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/8b5d450c-8de3-44e9-9b71-fd8094aa9c9d.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/9ef9dcbd-0fc6-451a-add5-c5d7687d70db.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/7e0be406-de64-44bc-acab-88c56e833268.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/3794fa4c-f973-4175-b4c6-02bc1d5eaaa9.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/9c641f5b-8e40-4606-bbb8-d96556c56fbe.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/f3a6da9a-2733-432b-9b6c-0e587ffec5c7.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-669273643745734507/original/9ece0fd0-159a-4fbd-922e-ccc28697ce96.jpeg?im_w=720",
        preview: true,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-669273643745734507/original/e87093ac-2e06-408c-944c-dab17d7adc07.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-783065761003529976/original/2751d7c2-1bba-451c-b305-4f933bbc6065.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-669273643745734507/original/ed7d6de5-4adb-4f3f-b312-2aef7dca3dfa.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-783065761003529976/original/a2b5794d-a4e7-43a1-b88d-7dcb32b43ac5.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-771959047594997155/original/6f3bd5a8-e8cf-4cce-b158-147bc916c998.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-771959047594997155/original/0482cafc-9af9-4c5d-a6b1-da68dafe1df2.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-771959047594997155/original/713d481c-adf8-437e-8376-a0a8b43b583a.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-771959047594997155/original/a470c518-b338-4204-b7d2-6c117e69f7b6.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-771959047594997155/original/51128ba2-135b-49c5-adec-5348982ac959.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-829088632845593617/original/6f87ffb4-506b-458b-ba4d-f0f7868b45a4.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-829088632845593617/original/ec31fe0c-2890-4ca5-ac32-3f2c296c16f3.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-829088632845593617/original/d8c38db0-dfb8-4882-a894-dfc8c86df69f.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-829088632845593617/original/d8ef37c4-85e7-4cbe-b6d7-f4fd0e546583.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-829088632845593617/original/d7b6f8de-3de3-463b-8331-383b81194fb3.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/76643112-0a64-4c6a-8c48-7fa4160bd74f.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/863a922c-c470-423b-93b6-c56aa69773ec.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/0412bbae-ccd4-4153-9d8a-e14df6bb1f8e.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/4437143b-7f49-4b6b-939f-6895ba4c8fb7.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/8cba6a16-9265-474a-b24d-ff99ca0e5965.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/68a96b9a-54fb-4112-b3b2-64e613138210.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/0b23973d-00d5-44e4-a46b-6b5122a411e4.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-35318624/original/0fbe1faa-dd97-44e1-a3af-828c6363c899.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/82f3013a-2ba9-48e7-8cdb-955c106af789.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-35318624/original/2a46f330-5c51-48da-a68b-a7971941ffb5.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/a4ede3d0-7be7-4c39-88fa-046aa3a35d2b.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/f5e1cf83-2c71-4b95-b9c5-e240c96554a3.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/cf41f8ca-aef1-42d6-906a-9a200896a06a.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/b13dd51f-2a69-4fe0-88e5-a32a90534a68.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/15c5d100-3bf9-498b-85f4-59cde4ba0fb4.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-689227365633765179/original/cc0dc74b-a156-419f-b6cb-275c6b774ead.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-689227365633765179/original/fcfe98ad-c9ec-474c-95fe-2aa0d7fc9f55.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-689227365633765179/original/d9091ff5-cdf8-4883-b1de-b638d2f4b358.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-689227365633765179/original/26fd1d1d-7c18-4a0b-b0a2-17338be10917.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-689227365633765179/original/b5c438ab-1747-450b-ab73-b918053792fb.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/47055262-be30-4a29-84fd-c4c1925b2861.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/e7f242fc-0dc5-4f14-ab85-f8d46c58bb20.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/3d09c75c-a758-46e7-8617-e02a12aee55a.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/5e9fb11f-11f2-4468-b30f-b4c05e17279f.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/a2012eb0-02a3-4d17-b1de-d3bd566049e9.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/fbb0cb48-9994-40fe-bfa1-c3c150dadf8a.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/10a09381-0a7f-405a-91ea-23ac9a8824c0.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/31a35b98-55ca-4d31-8995-ba86b2d4d938.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/4b4f59f1-111d-451c-a49e-aafbca22947a.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/086c5b89-4419-4b74-a98c-ff9e17af8a1e.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-739232315550368929/original/3284d702-87c5-4d4f-aadc-74ffb6fb818e.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-739232315550368929/original/efe5b128-830a-43c6-96f2-feed3049b3d5.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/adbe594d-5312-415d-b45a-3630221ae3d6.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-739232315550368929/original/36758482-942d-46af-9606-afc0c54cf053.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/d0e3c78b-8a4d-4727-b6c4-7847ffe9c1e3.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/53595fe4-a0cf-463e-a715-29218fe621e7.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/1fda0de9-6ea8-4fc4-aef3-4d7f78e712e1.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/fd014c55-2d30-4fda-9ff2-edde217de9a3.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/33d2dd36-d77d-46b4-a4e6-5d203fe2b6b4.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/8c7458e9-bfeb-42fe-ab09-ef14faf54668.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/ee141422-d121-426b-9e4e-94bbad3cb490.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/9223b17d-9828-4669-a83b-3c697cf3d647.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/ff79e707-aa40-49f5-ba75-7b1260761bc2.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/5649a116-6081-4a8f-b28c-1b574b521dc9.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/3bdec0ee-1b5c-423c-91d0-c6dba0739746.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/00888bd5-4c54-4d77-a6c7-80e094d4ef41.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/0e553a01-ea89-4ec0-9128-1d2720d91211.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/a90f2514-6af6-4e7d-bf18-2faa2727d3d1.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/cb45a9dc-0f6d-4e3e-a220-6328ebf320b0.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/d21e0927-f260-493f-af0c-b7fedd1c30eb.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 21,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48058860/original/145e1721-482a-4613-a8e1-6e4d3c95f566.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 21,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-48058860/original/e0caffc2-2a0b-4daf-9442-bcecd9a332fb.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 21,
        url: "https://a0.muscache.com/im/pictures/664b784d-aaf5-4a4d-98fa-bac35cc16876.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 21,
        url: "https://a0.muscache.com/im/pictures/c663536a-dcb3-4bce-aa14-e2158989cc23.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 21,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-48058860/original/215a81f5-3b73-483b-96ea-27b0a8885037.jpeg?im_w=720",
        preview: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("SpotImages", {
      spotId: {
        [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
    });
  },
};
