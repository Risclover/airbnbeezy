const express = require("express");
const { ReviewImage } = require("../../db/models");
const router = express.Router();

// Delete a review image
router.delete("/:imageId", async (req, res, next) => {
  const img = await ReviewImage.findByPk(req.params.imageId);

  if (!img) {
    return res.status(404).json({
      message: "Review Image couldn't be found",
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
