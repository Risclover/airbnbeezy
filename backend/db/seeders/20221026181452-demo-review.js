"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        spotId: 1,
        userId: 3,
        review: "5 stars, good job",
        stars: 5,
      },
      {
        spotId: 1,
        userId: 4,
        review: "Great location! Lovely home!",
        stars: 4,
      },
      {
        spotId: 1,
        userId: 5,
        review: "Perfect night there!",
        stars: 4,
      },
      {
        spotId: 1,
        userId: 6,
        review: "This home is absolutely beautiful, it’s in an ideal location",
        stars: 5,
      },
      {
        spotId: 2,
        userId: 1,
        review: "9/10, would go again",
        stars: 4,
      },
      {
        spotId: 2,
        userId: 3,
        review:
          "Sara is a fantastic host! She is so cheery and really takes the time to get to know the guests and she is a true gem!",
        stars: 3,
      },
      {
        spotId: 2,
        userId: 7,
        review:
          "Sara is a wonderful host! She was extraordinarily kind and accommodating, and was so thoughtful.",
        stars: 4,
      },
      {
        spotId: 3,
        userId: 2,
        review: "I enjoyed my stay. Ran out of toilet paper.",
        stars: 4,
      },
      {
        spotId: 3,
        userId: 1,
        review:
          "We had an such a great stay here! House was the perfect size for 8 of us and the kitchen was large with all the necessary utensils. Wish there was some additional spices, condiments, coffee, etc. so you didn’t have to purchase all that stuff from the store just to throw out after the stay. Other then that, would definitely recommend this place and would stay here again!",
        stars: 2,
      },
      {
        spotId: 3,
        userId: 6,
        review:
          "This is a beautiful place. Spacious and clean. Perfect for two families. We will be back!d",
        stars: 4,
      },
      {
        spotId: 3,
        userId: 5,
        review: "I had the worst night's sleep of my life.",
        stars: 1,
      },
      // {
      //   spotId: 4,
      //   userId: 7,
      //   review: "Great place! Super clean and great amenities!",
      //   stars: 5,
      // },
      // {
      //   spotId: 4,
      //   userId: 1,
      //   review: "Awesome!",
      //   stars: 5,
      // },
      // {
      //   spotId: 4,
      //   userId: 3,
      //   review: "Quite lovely",
      //   stars: 5,
      // },
      // {
      //   spotId: 5,
      //   userId: 4,
      //   review:
      //     "Great place to stay in Tahoe. Perfect for the family. John and his team were incredible.",
      //   stars: 4,
      // },
      // {
      //   spotId: 5,
      //   userId: 7,
      //   review:
      //     "Great stay for family getaway. Everything about home was just right. Didn’t miss my home at all. 😊",
      //   stars: 4,
      // },
      // {
      //   spotId: 5,
      //   userId: 1,
      //   review: "Was a great place to spend Thanksgiving!",
      //   stars: 4,
      // },
      // {
      //   spotId: 6,
      //   userId: 2,
      //   review:
      //     "Great location with mesmerizing view! :)\n\nVery responsive host.",
      //   stars: 3,
      // },
      // {
      //   spotId: 6,
      //   userId: 5,
      //   review:
      //     "Absolutely wonderful! The view of the lake from the living room was awesome.",
      //   stars: 4,
      // },
      // {
      //   spotId: 7,
      //   userId: 1,
      //   review:
      //     "Had a great time. Close enough to many biking and hiking trails. Felt more like a real neighborhood which we like rather than the hotel feel.",
      //   stars: 4,
      // },
      // {
      //   spotId: 7,
      //   userId: 7,
      //   review:
      //     "Me and my friends had a wonderful stay here at this rental. Equipped with all the necessary amenities needed (towels, cookings supplies, clean hot tub, and games!). Definitely will book again HOWEVER, we experienced an issued turning on the grill so unfortunately we were unable to grill during dinner. Slight bummer. This place should have deserve 5 stars",
      //   stars: 2,
      // },
      // {
      //   spotId: 7,
      //   userId: 4,
      //   review: "Great house",
      //   stars: 4,
      // },
      // {
      //   spotId: 10,
      //   userId: 6,
      //   review: "Great experience and Great Host!",
      //   stars: 4,
      // },
      // {
      //   spotId: 10,
      //   userId: 7,
      //   review:
      //     "We LOVE it here SO much, we try & stay here EVERY TIME we come.",
      //   stars: 4,
      // },
      // {
      //   spotId: 10,
      //   userId: 4,
      //   review:
      //     "Great place, jacuzzi never heated, but I’m completely satisfied!",
      //   stars: 5,
      // },
      // {
      //   spotId: 11,
      //   userId: 5,
      //   review:
      //     "Super clean, easy check in and out procedure. Perfect location. Recommended 10/10",
      //   stars: 5,
      // },
      // {
      //   spotId: 11,
      //   userId: 1,
      //   review: "Very helpful/ understanding. Would love to go back",
      //   stars: 3,
      // },
      // {
      //   spotId: 11,
      //   userId: 6,
      //   review:
      //     "not exactly as advertised, but overall a great place, within walking distance of many wineries. Will stay again.",
      //   stars: 3,
      // },
      // {
      //   spotId: 12,
      //   userId: 6,
      //   review:
      //     "I can not say enough amazing things about The Barn! We had 12 people that all fit comfortably for meals and sleeping. It was close to everything that we wanted to do including Brian Head and Cedar City. We took the kids sledding at the nearby High School and did shopping at Wal Mart to bring groceries to the house. Everyone loved their experience and we would totally go back!",
      //   stars: 4,
      // },
      // {
      //   spotId: 12,
      //   userId: 3,
      //   review:
      //     "It was perfect for the eight of us and the flexible temperature controls in each room and the bathrooms were fantastic. Also love that it was decorated for Christmas! It really made our stay special.",
      //   stars: 4,
      // },
      // {
      //   spotId: 12,
      //   userId: 2,
      //   review:
      //     "This was a wonderful place! We loved the spaciousness, the full kitchen with clothes washer and dryer, the quaint decor, the fun game room, the bunk beds, and more! The hosts were incredibly kind and responsive. ",
      //   stars: 4,
      // },
      // {
      //   spotId: 13,
      //   userId: 7,
      //   review: "Wonderful place with wonderful hosts.",
      //   stars: 5,
      // },
      // {
      //   spotId: 14,
      //   userId: 4,
      //   review:
      //     "This home is absolutely beautiful, it’s in an ideal location very close to everything in Moab. The bedroom was clean, and extremely comfortable. But the best part was breakfast, it was delicious and it was nice to be able to meet the host and get some tips about the surrounding area from her! Everything was clean and the directions for check in were super easy! This is a one of a kind stay and I would definitely love to come back. Thank you!!",
      //   stars: 5,
      // },
      // {
      //   spotId: 14,
      //   userId: 1,
      //   review: "Awful night, but host was kind.",
      //   stars: 2,
      // },
      // {
      //   userId: 14,
      //   userId: 3,
      //   review: "Host wouldn't give me their number. :(",
      //   stars: 3,
      // },
      // {
      //   spotId: 14,
      //   userId: 5,
      //   review:
      //     "Amazing place to stay , clean confortable , the breaks fast is delicious! Thanks",
      //   stars: 5,
      // },
      // {
      //   spotId: 15,
      //   userId: 2,
      //   review: "Meh",
      //   stars: 3,
      // },
      // {
      //   spotId: 15,
      //   userId: 7,
      //   review: "Good place, bad price",
      //   stars: 3,
      // },
      // {
      //   spotId: 15,
      //   userId: 4,
      //   review:
      //     "This home is magical...it is a wonderful mix of homey & beautiful, sophisticated experiences. It is a treasure that I want to both share & keep to myself at the same time.",
      //   stars: 5,
      // },
      // {
      //   spotId: 16,
      //   userId: 3,
      //   review:
      //     "TERRIBLE PLACE TO STAY. Super dirty. I think the owner was racist...",
      //   stars: 1,
      // },
      // {
      //   spotId: 16,
      //   userId: 6,
      //   review:
      //     "Bed was comfortable. The only positive thing I can say about this place.",
      //   stars: 2,
      // },
      // {
      //   spotId: 16,
      //   userId: 5,
      //   review: "I WANT MY MONEY BACK.",
      //   stars: 1,
      // },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Reviews", {
      userId: {
        [Op.in]: [1, 2, 3, 4, 5, 6, 7],
      },
    });
  },
};
