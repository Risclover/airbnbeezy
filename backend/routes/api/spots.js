const express = require("express");
const router = express.Router();
const { Spot, Review, SpotImage, User } = require("../../db/models");
const Sequelize = require("sequelize");
const user = require("../../db/models/user");

router.get("/", async (req, res) => {
  const spots = await Spot.findAll({});

  let spotsList = [];
  spots.forEach((spot) => {
    spotsList.push(spot.toJSON());
  });

  for (let spot of spotsList) {
    const previewImage = await SpotImage.findOne({
      where: {
        preview: true,
        spotId: spot.id,
      },
      raw: true,
    });

    spot.previewImage = previewImage.url;

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
    const previewImage = await SpotImage.findOne({
      where: {
        preview: true,
        spotId: spot.id,
      },
      raw: true,
    });

    spot.previewImage = previewImage.url;

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

router.get("/:spotId", async (req, res) => {
  const { spotId } = req.params;
  let currentSpot = await Spot.findByPk(spotId);

  currentSpot = currentSpot.toJSON();

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

module.exports = router;
