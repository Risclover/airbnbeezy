const express = require("express");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");
const { SpotImage } = require("../../db/models");
const router = express.Router();

// Create spot image
router.post("/", singleMulterUpload("image"), async (req, res) => {
  const { preview, spotId } = req.body;

  const url = await singlePublicFileUpload(req.file);

  const createdImg = await SpotImage.create({
    url: url,
    preview: preview,
    spotId: spotId,
  });

  return res.json({ createdImg });
});

// Get all spot images
router.get("/", async (req, res) => {
  const spotImgs = await SpotImage.findAll();

  let imgList = [];
  spotImgs.forEach((img) => {
    imgList.push(img.toJSON());
  });

  res.json({ SpotImages: imgList });
});

// Update spot image
router.put("/:imageId", async (req, res) => {
  const { preview, url } = req.body;

  const img = await SpotImage.findByPk(req.params.imageId);

  if (!img) {
    return res.status(404).json({
      message: "Spot Image couldn't be found",
      statusCode: 404,
    });
  }

  img.update({
    preview: preview,
    url: url,
  });

  res.json(img);
});

// Delete spot image
router.delete("/:imageId", async (req, res, next) => {
  const img = await SpotImage.findByPk(req.params.imageId);

  if (!img) {
    return res.status(404).json({
      message: "Spot Image couldn't be found",
      statusCode: 404,
    });
  }

  await img.destroy();

  res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
