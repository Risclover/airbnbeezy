const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {
  Spot,
  Review,
  SpotImage,
  User,
  ReviewImage,
} = require("../../db/models");
const router = express.Router();

const validateReview = [
  check("stars")
    .exists({ checkFalsy: true })
    .withMessage("Stars must be an integer from 1 to 5"),
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),

  handleValidationErrors,
];

// Get all reviews
router.get("/", async (req, res) => {
  const allReviews = await Review.findAll();

  const reviewsList = [];
  allReviews.forEach((review) => {
    reviewsList.push(review.toJSON());
  });

  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
  });

  user.reviews = reviewsList;

  res.json({ Reviews: reviewsList });
});

// Get all Reviews of the Current User
router.get("/current", async (req, res) => {
  const allReviews = await Review.findAll({
    where: {
      userId: req.user.id,
    },
  });

  const reviewsList = [];
  allReviews.forEach((review) => {
    reviewsList.push(review.toJSON());
  });

  for (let review of reviewsList) {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: ["id", "firstName", "lastName"],
    });

    review.User = user;

    const spot = await Spot.findOne({
      where: {
        id: review.spotId,
      },
      attributes: [
        "id",
        "ownerId",
        "address",
        "city",
        "state",
        "country",
        "name",
        "price",
      ],
      raw: true,
    });

    const previewImage = await SpotImage.findOne({
      where: {
        preview: true,
        spotId: spot.id,
      },
      raw: true,
    });

    spot.previewImage = previewImage.url;

    review.Spot = spot;

    const reviewImgs = await ReviewImage.findAll({
      where: {
        reviewId: review.id,
      },
      attributes: ["id", "url"],
    });

    review.ReviewImages = reviewImgs;
  }

  res.json({ Reviews: reviewsList });
});

// Add an Image to a Review based on the Review's id
router.post("/:reviewId/images", async (req, res, next) => {
  const { reviewId } = req.params;
  const { url } = req.body;

  const review = await Review.findByPk(reviewId);

  if (!review) {
    const err = new Error("reviewId invalid");
    err.status = 404;
    err.title = "reviewId invalid";
    err.errors = ["Review couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  let newImage = await ReviewImage.create({
    reviewId: reviewId,
    url: url,
  });

  newImage = newImage.toJSON();
  delete newImage.reviewId;
  delete newImage.createdAt;
  delete newImage.updatedAt;
  res.json(newImage);
});

// Edit a Review
router.put("/:reviewId", validateReview, async (req, res, next) => {
  const { reviewId } = req.params;
  const { review, stars, hasResponse } = req.body;

  const currentReview = await Review.findByPk(reviewId);

  if (!currentReview) {
    const err = new Error("reviewId invalid");
    err.status = 404;
    err.title = "reviewId invalid";
    err.errors = ["Review couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  currentReview.update({
    id: reviewId,
    userId: req.user.id,
    spotId: currentReview.id,
    review: review,
    stars: stars,
    hasResponse: hasResponse,
  });

  res.json(currentReview);
});

// Delete a Review
router.delete("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;

  const myReview = await Review.findByPk(reviewId);

  if (!myReview) {
    return res.status(404).json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  await myReview.destroy();

  res
    .json({
      message: "Successfully deleted",
      statusCode: 200,
    })
    .status(200);
});

module.exports = router;
