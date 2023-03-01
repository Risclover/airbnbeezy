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
      {
        spotId: 22,
        url: "https://a0.muscache.com/im/pictures/d3b70278-91b9-4bb1-a0c2-7c709c204aae.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 22,
        url: "https://a0.muscache.com/im/pictures/03e1e7ab-2a31-46f0-bf1f-9aaad8005031.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 22,
        url: "https://a0.muscache.com/im/pictures/f964ba5c-ef78-4e76-946d-b23e92adfab8.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 22,
        url: "https://a0.muscache.com/im/pictures/e5869f27-d35c-40d0-b52c-81f35965f1bb.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 22,
        url: "https://a0.muscache.com/im/pictures/b8246a0f-eab7-453d-b4eb-5bbeabcc983f.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 23,
        url: "https://a0.muscache.com/im/pictures/7cc10af4-14c9-42c6-bf22-c22c5364d954.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 23,
        url: "https://a0.muscache.com/im/pictures/2a0a8543-a4e0-4f13-84f5-a01facfe640f.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 23,
        url: "https://a0.muscache.com/im/pictures/bdde3943-aaea-4270-834c-191f9cac5d36.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 23,
        url: "https://a0.muscache.com/im/pictures/4067329c-ff09-4e7b-9dff-5d8de7afc91b.jpg?im_w=1200",
        preview: false,
      },
      {
        spotId: 23,
        url: "https://a0.muscache.com/im/pictures/6124cc7d-1440-402c-8414-b731c2160dc7.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 24,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-644901375864690848/original/9731127f-c586-485c-82c8-369b2c0d4a92.jpeg?im_w=720",
        preview: true,
      },
      {
        spotId: 24,
        url: "https://a0.muscache.com/im/pictures/5253cd6c-a883-4a57-ba7e-b2008628ab64.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 24,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-644901375864690848/original/76913ef5-7aea-43b6-a6fc-c8819e0a4bb2.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 24,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-644901375864690848/original/949919b6-bcab-4671-9bb0-ebdbb1dc5817.jpeg?im_w=1200",
        preview: false,
      },
      {
        spotId: 24,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-644901375864690848/original/514dfa28-c352-4b8e-85df-a256da65d4a6.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 25,
        url: "https://a0.muscache.com/im/pictures/bc591aad-0271-4f34-8e14-8fcae8226400.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 25,
        url: "https://a0.muscache.com/im/pictures/1b39f58e-d46e-43d8-8f7b-6757a55d25a7.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 25,
        url: "https://a0.muscache.com/im/pictures/1f8fe824-923d-43f5-b2cb-c138944ba70a.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 25,
        url: "https://a0.muscache.com/im/pictures/d740e3ae-f69f-4c7d-a153-4d1fc9a99d52.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 25,
        url: "https://a0.muscache.com/im/pictures/f702576a-3fd0-40c6-8576-57b5e62a5451.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 26,
        url: "https://a0.muscache.com/im/pictures/43ba6bf7-4f76-43f1-bee8-6f30c4a7085d.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 26,
        url: "https://a0.muscache.com/im/pictures/eea4832e-d96e-4618-ace1-7f8b920bdb39.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 26,
        url: "https://a0.muscache.com/im/pictures/ce503840-1150-402e-8361-dd0a50ff62fe.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 26,
        url: "https://a0.muscache.com/im/pictures/ce0f748d-6118-400d-96db-26ecef5c3901.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 26,
        url: "https://a0.muscache.com/im/pictures/076238d8-8b9a-4440-96da-212665a80a12.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 27,
        url: "https://a0.muscache.com/im/pictures/cdc0cc75-54e0-4fd8-816b-c82dbb048536.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 27,
        url: "https://a0.muscache.com/im/pictures/27817425-8ca8-4b94-9ae1-e9502c1a5317.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 27,
        url: "https://a0.muscache.com/im/pictures/cbab685a-e399-4dd8-a640-e6ff017e415b.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 27,
        url: "https://a0.muscache.com/im/pictures/fe391a6a-7aaa-438f-b296-2ed00f6fb96a.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 27,
        url: "https://a0.muscache.com/im/pictures/a16ea431-c156-48aa-a0e4-5c233b49dc7c.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 28,
        url: "https://a0.muscache.com/im/pictures/8b29bbe1-fe0a-4a32-9dba-1af15dbde880.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 28,
        url: "https://a0.muscache.com/im/pictures/5d9c39cc-2f2d-4ac5-a5a7-b817757ae239.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 28,
        url: "https://a0.muscache.com/im/pictures/df409169-55ee-4e66-aad4-b9c46f6ca2f1.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 28,
        url: "https://a0.muscache.com/im/pictures/4acf5848-3e7d-4866-bf9a-ed36ab335e38.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 28,
        url: "https://a0.muscache.com/im/pictures/ad906eb4-9108-4e47-bd60-a4122ba460e4.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 29,
        url: "https://a0.muscache.com/im/pictures/960b5511-f4bb-445f-9867-25cd6c064f32.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 29,
        url: "https://a0.muscache.com/im/pictures/9e05440e-3ca4-4881-9eeb-276120f7033d.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 29,
        url: "https://a0.muscache.com/im/pictures/84cc5637-9ac2-4242-b116-9f5f704de840.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 29,
        url: "https://a0.muscache.com/im/pictures/0618ead5-1cb7-4667-b30d-3364e05dcf0f.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 29,
        url: "https://a0.muscache.com/im/pictures/039c2b76-bd17-4199-a0b3-386e18213fb8.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 30,
        url: "https://a0.muscache.com/im/pictures/1f8a41f2-380c-46ed-97c8-602cd73cfb2f.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 30,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21959683/original/00f9ca18-a368-45d3-b5dc-82bdf5163592.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 30,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21959683/original/bc1712a7-9577-4b9a-8a49-a1bbb9adf4a6.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 30,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21959683/original/cef9b693-ab7a-4679-a208-c7909a4aeb4d.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 30,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21959683/original/0af1d913-64c4-4355-bd74-fdc6575e96bf.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 31,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-670963147649554434/original/d107e564-d188-44d3-aa64-835af1630204.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 31,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-670963147649554434/original/7dcd0b81-2c47-4d07-8f52-c16f9a82e9f2.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 31,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-670963147649554434/original/190f3035-2f8b-417a-8db7-509cfc3d061e.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 31,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-670963147649554434/original/bbb2d882-b1da-4db2-aa2e-f08d01e74d7d.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 31,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-670963147649554434/original/23d359a3-2b6b-42b0-9854-8d87e964408d.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 32,
        url: "https://a0.muscache.com/im/pictures/6e49eba3-4a94-4fac-9582-aa89102288b1.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 32,
        url: "https://a0.muscache.com/im/pictures/c6c78d33-a623-435b-a765-98c607da3df6.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 32,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-42037058/original/38e955be-ec96-4276-a620-dc52142cd80c.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 32,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-42037058/original/40faa92d-2b63-4348-a4fc-7055d7f274f0.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 32,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-42037058/original/f110f45a-bff6-4d2c-97d0-3430658f78fc.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 33,
        url: "https://a0.muscache.com/im/pictures/38c050ca-cf3d-4af5-b91f-6cb9c149f9a6.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 33,
        url: "https://a0.muscache.com/im/pictures/d0155b42-1ad6-45cd-9eeb-059400ce2eab.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 33,
        url: "https://a0.muscache.com/im/pictures/7918e3c7-fc07-45ab-936d-15b7387ba88d.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 33,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44910916/original/2706b2e2-b03c-4138-970f-917f1a3503f6.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 33,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44910916/original/3b1f32c4-6230-47ee-aadb-2e33e355cd46.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 34,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-728091517814307485/original/d769a6bd-6d28-46f4-a2e1-e7ba9ded66d8.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 34,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-728091517814307485/original/ec7821fa-ca01-4a97-aef3-c010eaaeea86.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 34,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-728091517814307485/original/bf2f260e-a51c-45e3-96c6-77d3713bb4e3.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 34,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-728091517814307485/original/bbed7e0c-e04b-4a08-b3bc-3f036d758656.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 34,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-728091517814307485/original/aa43775a-1ee3-448c-8514-c2836754cd98.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 35,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53309020/original/8e83db7c-adb1-4acd-9b09-9664ac40fd7f.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 35,
        url: "https://a0.muscache.com/im/pictures/09859e1e-4b2b-4bbe-a4e8-df7c373a5023.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 35,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53309020/original/cd21e1b2-de90-4cd5-8096-aaa3ec2472fb.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 35,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53309020/original/dc4d2ee9-2f51-4631-8961-b01e6737b456.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 35,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53309020/original/14f2c624-6f2f-4a34-9a1f-ad0219dcd99c.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 36,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50118769/original/b1ae01c8-5868-41b3-ad39-40a2a2f2415f.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 36,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50118769/original/7af243d7-09c9-41ca-a5a5-cf1c3ec755a6.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 36,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50118769/original/99511d1b-7c73-43d0-a7e5-4c1a7a17d896.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 36,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50118769/original/408f5bed-1851-481f-af9d-37600f086819.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 36,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50118769/original/63fcee21-33a3-4c28-8144-306154e03716.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 37,
        url: "https://a0.muscache.com/im/pictures/706513f1-4ab8-436a-88af-e3c16258f1fe.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 37,
        url: "https://a0.muscache.com/im/pictures/82e90a53-d7a9-4f79-8fce-e3c97b4f9b37.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 37,
        url: "https://a0.muscache.com/im/pictures/40b5781f-0682-465e-9bc2-adece6ad6137.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 37,
        url: "https://a0.muscache.com/im/pictures/d0307e81-a748-4e35-b640-0c095177cf58.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 37,
        url: "https://a0.muscache.com/im/pictures/dee6b2ba-90c0-43b1-97f4-fcf2c3317a79.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 38,
        url: "https://a0.muscache.com/im/pictures/bef14485-c2a2-44a4-b3e3-3928a328d7f9.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 38,
        url: "https://a0.muscache.com/im/pictures/44c147c7-98e3-4361-9229-2cd73759235c.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 38,
        url: "https://a0.muscache.com/im/pictures/c2ba3126-25e8-4e3a-b45e-f6c465abb168.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 38,
        url: "https://a0.muscache.com/im/pictures/478ef389-0132-45c5-a85f-0d6674f4e878.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 38,
        url: "https://a0.muscache.com/im/pictures/ea820780-05b8-4d06-afed-856a7c43fd11.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 39,
        url: "https://a0.muscache.com/im/pictures/7ad80cd3-a383-4e07-8e8b-4438ff759adc.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 39,
        url: "https://a0.muscache.com/im/pictures/7f93632d-8fa4-4988-bfbe-f7cef9ba2331.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 39,
        url: "https://a0.muscache.com/im/pictures/bc77bc77-41a4-4308-891f-b9fe5132a9a1.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 39,
        url: "https://a0.muscache.com/im/pictures/23db93ec-9cee-4ec2-b15c-53aa40d334f8.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 39,
        url: "https://a0.muscache.com/im/pictures/5dffc8d9-e8eb-44d3-9c24-f87894c899d4.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 40,
        url: "https://a0.muscache.com/im/pictures/984046cd-7a07-4310-ac9f-8c2513c47977.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 40,
        url: "https://a0.muscache.com/im/pictures/af5c211d-c4ab-4158-bc74-73acc01104b2.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 40,
        url: "https://a0.muscache.com/im/pictures/eb59a6f3-cc02-4395-a562-b555fc489fd2.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 40,
        url: "https://a0.muscache.com/im/pictures/411a7a19-87bb-49b8-8c5c-0d7950976229.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 40,
        url: "https://a0.muscache.com/im/pictures/61fc798d-8e42-40c2-8362-d5f1e4e4b6c9.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 41,
        url: "https://a0.muscache.com/im/pictures/85f3e81f-27ba-4e92-9c59-77b9143cf0aa.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 41,
        url: "https://a0.muscache.com/im/pictures/21055d8f-9b07-4156-9d16-bf927d9b9203.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 41,
        url: "https://a0.muscache.com/im/pictures/8974fd58-e556-4a27-b2a6-50ed99720df0.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 41,
        url: "https://a0.muscache.com/im/pictures/11ba9895-20db-4870-9a6a-27725934c97e.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 41,
        url: "https://a0.muscache.com/im/pictures/8d99e9de-1b93-47e5-8ba5-c5f58fa98fd5.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 42,
        url: "https://a0.muscache.com/im/pictures/2651dc08-a6ee-44d6-b6fc-62fcf80c632f.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 42,
        url: "https://a0.muscache.com/im/pictures/5b16b6fe-3b88-462b-8106-2820908fc6b9.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 42,
        url: "https://a0.muscache.com/im/pictures/6afee7c4-8d9a-4732-9dfe-ae157e0cbfce.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 42,
        url: "https://a0.muscache.com/im/pictures/7cf7e6e4-0daf-420b-b020-6fa6ac56768b.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 42,
        url: "https://a0.muscache.com/im/pictures/d12f3315-896d-4c7b-8eef-052256b5c9fb.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 43,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-715783467194797469/original/3fa86942-450e-42de-af33-b12b1e8d44f1.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 43,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-715783467194797469/original/9ca20a65-5bb8-471b-9e21-a475699fd61c.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 43,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-715783467194797469/original/e3fe6356-d5df-4eda-8905-672fb8f74c81.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 43,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-715783467194797469/original/349a9f51-6e04-4d41-9d1e-68d7438f663b.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 43,
        url: "https://a0.muscache.com/im/pictures/e3045e85-1b3c-4f53-997e-24f498110b20.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 44,
        url: "https://a0.muscache.com/im/pictures/32f70c36-d906-41d8-bdfe-b299584cc041.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 44,
        url: "https://a0.muscache.com/im/pictures/9fbb2f89-9620-4ec2-8320-e8502b9cce68.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 44,
        url: "https://a0.muscache.com/im/pictures/523fec1c-29e0-4c59-be59-2a4030b31137.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 44,
        url: "https://a0.muscache.com/im/pictures/55c92c6c-0269-4ee2-b088-f5733f840df0.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 44,
        url: "https://a0.muscache.com/im/pictures/46950937-3da2-4ffb-9344-e031e57a1d36.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 45,
        url: "https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 45,
        url: "https://a0.muscache.com/im/pictures/3a840c69-634a-414f-9800-cda805858f95.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 45,
        url: "https://a0.muscache.com/im/pictures/84ec6770-ac8f-4738-bd31-c0bd8b09edd1.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 45,
        url: "https://a0.muscache.com/im/pictures/c9187b3a-0d9d-4308-8e42-17a56511afac.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 45,
        url: "https://a0.muscache.com/im/pictures/2362094f-ab42-483c-a928-284cee60abc8.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 46,
        url: "https://a0.muscache.com/im/pictures/6f661499-126e-4228-b9a6-4e023c2933a4.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 46,
        url: "https://a0.muscache.com/im/pictures/7b19aea3-0728-4c7b-8afa-a964e1f78f34.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 46,
        url: "https://a0.muscache.com/im/pictures/92989ae2-f7f6-42b6-bf56-101d94053f8c.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 46,
        url: "https://a0.muscache.com/im/pictures/cfb4ccbd-704b-44f2-a8a3-fb42354c1cee.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 46,
        url: "https://a0.muscache.com/im/pictures/f252c738-cd1e-4104-9728-f226efaae520.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 47,
        url: "https://a0.muscache.com/im/pictures/228e9151-97c8-4e44-83fc-52993da09761.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 47,
        url: "https://a0.muscache.com/im/pictures/de954b9f-9f5a-483a-8cac-ec63f3e2b334.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 47,
        url: "https://a0.muscache.com/im/pictures/5641cb6e-2477-4a93-b471-cf34e8972e8e.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 47,
        url: "https://a0.muscache.com/im/pictures/9f23b388-d955-41d7-9e0a-8eb2daa23be7.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 47,
        url: "https://a0.muscache.com/im/pictures/45990e66-e5a1-4334-8351-2a8be18b44c2.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 48,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44170361/original/41344fbd-9bb6-4d55-96d6-98382c012859.png?im_w=1200",
        preview: true,
      },
      {
        spotId: 48,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44170361/original/ecf2b655-7512-44d4-a80c-9b676496bcfe.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 48,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44170361/original/a4b49ae6-1c4f-469a-bee7-c14cd41ba70b.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 48,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44170361/original/4b18c3ff-9645-487c-8eba-5b74c054c97b.png?im_w=720",
        preview: false,
      },
      {
        spotId: 48,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-44170361/original/cd697cde-0b52-4515-9382-0b8fefe0af8d.png?im_w=720",
        preview: false,
      },
      {
        spotId: 49,
        url: "https://a0.muscache.com/im/pictures/d842151d-8e9d-4bd4-86d6-a34c22b3a2bb.jpg?im_w=1200",
        preview: true,
      },
      {
        spotId: 49,
        url: "https://a0.muscache.com/im/pictures/33143dbe-78b3-46b6-b94c-acdcfebaceee.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 49,
        url: "https://a0.muscache.com/im/pictures/77edd934-352b-49bd-98b2-dc3975197824.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 49,
        url: "https://a0.muscache.com/im/pictures/b74097bf-8409-4b03-9133-9538d7a79948.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 49,
        url: "https://a0.muscache.com/im/pictures/00c3fc8a-10b9-4e40-8f24-bc612c1cc6f9.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 50,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-40669209/original/b9566a8b-a399-43b3-877d-1b4dfdb39168.jpeg?im_w=1200",
        preview: true,
      },
      {
        spotId: 50,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-40669209/original/9014e0e1-3a3f-4987-81f1-1db7bc0366a5.jpeg?im_w=720",
        preview: false,
      },
      {
        spotId: 50,
        url: "https://a0.muscache.com/im/pictures/cfb0f34f-53f3-42a7-b352-38e46dadf6b5.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 50,
        url: "https://a0.muscache.com/im/pictures/acd26bdc-af60-47e6-8fa0-7128a0e48afc.jpg?im_w=720",
        preview: false,
      },
      {
        spotId: 50,
        url: "https://a0.muscache.com/im/pictures/d5fcd1f0-6a96-4cd9-a315-162294fd1b03.jpg?im_w=720",
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
