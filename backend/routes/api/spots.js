const express = require("express");
const router = express.Router();
const { requireAuth } = require("../../utils/auth");
const {
  Spot,
  Review,
  SpotImage,
  User,
  ReviewImage,
  Booking,
} = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { check } = require("express-validator");

const validateReview = [
  check("stars")
    .exists({ checkFalsy: true })
    .withMessage("Stars must be an integer from 1 to 5"),
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),

  handleValidationErrors,
];

// Create a spot
router.post("/", requireAuth, async (req, res) => {
  const {
    address,
    zipcode,
    city,
    state,
    country,
    name,
    description,
    price,
    category,
    guests,
    beds,
    bedrooms,
    bathrooms,
    access,
    listed,
    previewImage,
  } = req.body;

  // Identify current user
  const currentUser = await User.findOne({
    where: {
      id: req.user.id,
    },
  });

  // Create the actual spot
  const createdSpot = await Spot.create({
    ownerId: currentUser.id,
    address: address,
    zipcode: zipcode,
    city: city,
    state: state,
    country: country,
    name: name,
    description: description,
    price: price,
    category: category,
    guests: guests,
    beds: beds,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    access: access,
    previewImage: previewImage,
    listed: listed,
  });

  res.json(createdSpot);
});

// Get all spots
router.get("/", async (req, res) => {
  // Pagination
  let { page, size } = req.query;
  const pagination = {};

  page = parseInt(page);
  size = parseInt(size);

  if ((!Number.isInteger(page) || page <= 0) && req.query.page) {
    res.status(400).json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        page: "Page must be greater than or equal to 1",
      },
    });
  }

  if ((!Number.isInteger(size) || size <= 0) && req.query.size) {
    res.status(400).json({
      message: "Validation Error",
      statusCode: 400,
      errors: {
        size: "Size must be greater than or equal to 1",
      },
    });
  }

  if (page > 10) {
    page = 1;
  }

  if (size > 20) {
    size = 20;
  }

  if (req.query.page) pagination.limit = size;
  if (req.query.size) pagination.offset = size * (page - 1);

  const spots = await Spot.findAll({
    ...pagination,
  });

  let spotsList = [];
  spots.forEach((spot) => {
    spotsList.push(spot.toJSON());
  });

  // For each spot:
  for (let spot of spotsList) {
    // Finding previewImage
    const previewImage = await SpotImage.findOne({
      where: {
        preview: true,
        spotId: spot.id,
      },
      raw: true,
    });

    const otherImages = await SpotImage.findAll({
      where: {
        preview: false,
        spotId: spot.id,
      },
      raw: true,
    });

    spot.otherImages = otherImages;

    if (previewImage !== null) {
      spot.previewImage = previewImage.url;
    }

    // Finding avgRating
    const reviews = await Review.findAll({
      where: {
        spotId: spot.id,
      },
      raw: true,
    });

    let sum = 0;
    let count = reviews.length;
    for (let review of reviews) {
      sum += review.stars;
    }

    spot.avgRating = sum / count;

    // Remove avgRating if page or size exists
    if (page || size) {
      delete spot.avgRating;
    }
  }

  // If page or size exist, include them in the final response object
  if (page || size) {
    res.json({
      Spots: spotsList,
      page,
      size,
    });

    // Otherwise, don't (prevents "page: null", for example)
  } else {
    res.json({
      Spots: spotsList,
    });
  }
});

// Get all spots owned by the current user
router.get("/current", async (req, res) => {
  const spots = await Spot.findAll({
    where: {
      ownerId: req.user.id,
    },
  });
  let spotsList = [];
  spots.forEach((spot) => {
    spotsList.push(spot.toJSON());
  });

  for (let spot of spotsList) {
    // Finding previewImage
    const previewImage = await SpotImage.findOne({
      where: {
        preview: true,
        spotId: spot.id,
      },
      raw: true,
    });

    spot.previewImage = previewImage.url;

    const otherImages = await SpotImage.findAll({
      where: {
        preview: false,
        spotId: spot.id,
      },
      raw: true,
    });

    // Remove avgRating if page or size exists
    const reviews = await Review.findAll({
      where: {
        spotId: spot.id,
      },
      raw: true,
    });

    let sum = 0;
    let count = reviews.length;
    for (let review of reviews) {
      sum += review.stars;
    }

    spot.avgRating = sum / count;
  }

  res.json({ Spots: spotsList });
});

// Get details of a spot from an id
router.get("/:spotId", async (req, res, next) => {
  const { spotId } = req.params;
  let currentSpot = await Spot.findByPk(spotId, {
    raw: true,
  });

  if (!currentSpot) {
    const err = new Error("spotId invalid");
    err.status = 404;
    err.title = "spotId invalid";
    err.errors = ["Spot couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  // Remove avgRating if page or size exists
  const reviews = await Review.findAll({
    raw: true,
  });

  let sum = 0;
  let count = reviews.length;
  for (let review of reviews) {
    sum += review.stars;
  }

  currentSpot.numReviews = reviews.length;
  currentSpot.avgStarRating = sum / count;

  const spotImagesAll = await SpotImage.findAll({
    where: {
      preview: true,
      spotId: spotId,
    },
    attributes: ["id", "url", "preview"],
  });

  currentSpot.SpotImages = spotImagesAll;

  const currentSpotOwner = await User.findOne({
    where: {
      id: currentSpot.ownerId,
    },
    attributes: ["id", "firstName", "lastName"],
  });

  currentSpot.Owner = currentSpotOwner;

  delete currentSpotOwner.username;
  res.json(currentSpot);
});

// Add an Image to a Spot based on the Spot's id
router.post("/:spotId/images", requireAuth, async (req, res, next) => {
  const { spotId } = req.params;
  const { url, preview } = req.body;

  let spot = await Spot.findByPk(spotId);

  if (!spot) {
    const err = new Error("spotId invalid");
    err.status = 404;
    err.title = "spotId invalid";
    err.errors = ["Spot couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  let createdImage = await SpotImage.create({
    spotId: spotId,
    url: url,
    preview: preview,
  });

  createdImage = createdImage.toJSON();
  delete createdImage.createdAt;
  delete createdImage.updatedAt;
  delete createdImage.spotId;

  res.json(createdImage);
});

// Edit a spot
router.put("/:spotId", async (req, res, next) => {
  const { spotId } = req.params;
  const {
    address,
    zipcode,
    city,
    state,
    country,
    name,
    description,
    price,
    category,
    guests,
    beds,
    bedrooms,
    bathrooms,
    access,
    listed,
    previewImage,
  } = req.body;

  const correctSpot = await Spot.findByPk(spotId);

  if (!correctSpot) {
    const err = new Error("spotId invalid");
    err.status = 404;
    err.title = "spotId invalid";
    err.errors = ["Spot couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  correctSpot.update({
    address: address,
    zipcode: zipcode,
    city: city,
    state: state,
    country: country,
    name: name,
    description: description,
    price: price,
    category: category,
    guests: guests,
    beds: beds,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    access: access,
    listed: listed,
    previewImage: previewImage,
  });

  res.json(correctSpot);
});

// Delete a spot
router.delete("/:spotId", async (req, res) => {
  const { spotId } = req.params;
  const correctSpot = await Spot.findByPk(spotId);

  if (!correctSpot) {
    return res.status(404).json({
      message: "Spot couldn't be found.",
      statusCode: 404,
    });
  }
  // Authorization
  if (correctSpot.ownerId !== req.user.id) {
    res.status(403).json({
      message: "Forbidden",
    });
  }

  await correctSpot.destroy();

  res
    .json({
      message: "Successfully deleted",
      statusCode: 200,
    })
    .status(200);
});

// Get all Reviews by a Spot's id
router.get("/:spotId/reviews", async (req, res, next) => {
  const { spotId } = req.params;

  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    const err = new Error("spotId invalid");
    err.status = 404;
    err.title = "spotId invalid";
    err.errors = ["Spot couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  const allReviews = await Review.findAll({
    where: {
      spotId: spotId,
    },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: ReviewImage,
        attributes: ["id", "url"],
      },
    ],
  });

  // for (let review of allReviews) {
  //   const reviewImgs = await ReviewImage.findAll({
  //     where: {
  //       reviewId: review.id,
  //     },
  //     attributes: ["id", "url"],
  //   });
  // }

  res.json({ Reviews: allReviews });
});

// Create a Review for a Spot based on the Spot's id
router.post("/:spotId/reviews", validateReview, async (req, res, next) => {
  const { spotId } = req.params;
  const { review, stars } = req.body;

  const spot = await Spot.findByPk(spotId);
  if (!spot) {
    const err = new Error("spotId invalid");
    err.status = 404;
    err.title = "spotId invalid";
    err.errors = ["Spot couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  const allReviews = await Review.findAll({
    where: {
      spotId: spotId,
    },
    raw: true,
  });

  for (let review of allReviews) {
    if (review.userId === req.user.id) {
      const err = new Error("User already has a review for this spot");
      err.status = 403;
      err.title = "Review invalid";
      err.errors = [
        "User already has a review for this spot",
        "statusCode: 403",
      ];
      return next(err);
    }
  }

  const createdReview = await Review.create({
    userId: req.user.id,
    spotId: spotId,
    spotName: spot.name,
    review: review,
    stars: stars,
    hasResponse: false,
  });

  res.json(createdReview);
});

// Create a booking from a spot based on the spot's id
router.post("/:spotId/bookings", async (req, res) => {
  const { spotId } = req.params;
  const { startDate, endDate, guests, price } = req.body;

  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({
      message: "Spot couldn't be found",
      statusCode: 404,
    });
  }

  const startDateObj = new Date(startDate);

  const endDateObj = new Date(endDate);

  if (endDateObj <= startDateObj) {
    return res.status(400).json({
      message: "endDate cannot be on or before startDate",
    });
  }

  const allBookings = await Booking.findAll({
    where: {
      spotId: spotId,
    },
    raw: true,
  });

  const errors = {};
  for (let booking of allBookings) {
    const currentStartDate = new Date(booking.startDate);
    const currentEndDate = new Date(booking.endDate);
    if (currentStartDate <= startDateObj && currentEndDate >= startDateObj) {
      errors.startDate = "Start date conflicts with an existing booking";
    }
    if (currentStartDate <= endDateObj && currentEndDate >= endDateObj) {
      errors.endDate = "End date conflicts with an existing booking";
    }
  }

  if (Object.keys(errors).length) {
    return res.status(403).json({
      message: "Sorry, this spot is already booked for the specified dates",
      errors,
    });
  }

  const newBooking = await Booking.create({
    spotId: +spotId,
    userId: req.user.id,
    startDate: startDate,
    endDate: endDate,
    guests: guests,
  });

  newBooking.price = spot.price;

  newBooking.spot = spot;

  res.json(newBooking);
});

// Get all bookings for a spot based on the spot's id
router.get("/:spotId/bookings", async (req, res) => {
  const { spotId } = req.params;

  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({
      message: "Spot couldn't be found",
      statusCode: 404,
    });
  }

  if (spot.ownerId !== req.user.id) {
    const allBookings = await Booking.findAll({
      where: {
        spotId: spotId,
      },
      attributes: ["spotId", "startDate", "endDate", "price"],
    });

    res.json({ Bookings: allBookings });
  } else {
    const allBookings = await Booking.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
      where: {
        spotId: spotId,
      },
    });

    res.json({ Bookings: allBookings });
  }
});

module.exports = router;
