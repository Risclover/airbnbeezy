const express = require("express");
const { setTokenCookie } = require("../../utils/auth");
const { check } = require("express-validator");
const { requireAuth } = require("../../utils/auth");
const { singlePublicFileUpload } = require("../../awsS3");
const { singleMulterUpload } = require("../../awsS3");
const { handleValidationErrors } = require("../../utils/validation");
// ...
const { User, Spot, Review, Message } = require("../../db/models");
const user = require("../../db/models/user");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a first name"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a last name"),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Post /api/users ---Sign up
router.post(
  "/",
  singleMulterUpload("image"),
  validateSignup,
  async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;
    const profileImageUrl =
      "https://airbnbeezy.s3.us-west-1.amazonaws.com/1678151610351.png";
    const user = await User.signup({
      username,
      email,
      password,
      firstName,
      lastName,
      profileImageUrl,
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  }
);

// Get users
router.get("/", async (req, res, next) => {
  const users = await User.findAll();

  let usersList = [];
  users.forEach((user) => {
    usersList.push(user.toJSON());
  });

  res.json({ Users: usersList });
});

// Get user reviews
router.get("/:userId/reviews", async (req, res, next) => {
  const { userId } = req.params;

  const allReviews = await Review.findAll({
    where: {
      userId: userId,
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
      attributes: ["id", "firstName", "lastName", "profileImageUrl"],
    });

    review.User = user;

    const spot = await Spot.findOne({
      where: {
        ownerId: req.user.id,
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

// Edit user profile info
router.put("/:userId", singleMulterUpload("image"), async (req, res, next) => {
  const { userId } = req.params;
  const { about, location, work } = req.body;

  const url = await singlePublicFileUpload(req.file);
  const user = await User.findByPk(userId);

  if (!user) {
    const err = new Error("userId invalid");
    err.status = 404;
    err.title = "userId invalid";
    err.errors = ["User couldn't be found.", "statusCode: 404"];
    return next(err);
  }

  user.update({
    about: about,
    location: location,
    work: work,
    profileImageUrl: url,
  });

  res.json(user);
});

// Upload user photo

module.exports = router;
