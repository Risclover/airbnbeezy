const express = require("express");
const { Spot, SpotImage, Booking } = require("../../db/models");
const router = express.Router();

// Get all of the current user's bookings
router.get("/current", async (req, res) => {
  const currentUserId = req.user.id;

  const allBookings = await Booking.findAll({
    where: {
      userId: currentUserId,
    },
    raw: true,
  });

  for (let booking of allBookings) {
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
        "lat",
        "lng",
        "name",
        "price",
      ],
      raw: true,
    });

    const previewImage = await SpotImage.findOne({
      where: {
        preview: true,
        spotId: booking.spotId,
      },
      raw: true,
    });

    spot.previewImage = previewImage.url;

    booking.Spot = spot;
  }

  res.json({ Bookings: allBookings });
});

// Edit a booking
router.put("/:bookingId", async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.bookingId);

  if (!booking) {
    res.status(404);
    return res.json({
      message: "Booking couldn't be found",
      statusCode: 404,
    });
  }

  const { startDate, endDate, guests } = req.body;

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  if (endDateObj <= startDateObj) {
    return res.status(400).json({
      message: "endDate cannot be on or before startDate",
    });
  }

  const now = Date.now();
  if (startDateObj < now) {
    return res.status(403).json({
      message: "Past bookings can't be modified",
      statusCode: 403,
    });
  }

  const allBookings = await Booking.findAll({
    where: {
      spotId: booking.spotId,
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

  booking.update({
    startDate,
    endDate,
    guests,
  });

  res.json(booking);
});

// Delete a Booking
router.delete("/:bookingId", async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.bookingId);

  if (!booking) {
    res.status(404);
    return res.json({
      message: "Booking couldn't be found",
      statusCode: 404,
    });
  }

  const startDateObj = new Date(booking.startDate);
  const now = Date.now();

  if (startDateObj < now) {
    res.status(403);
    return res.json({
      message: "Bookings that have been started can't be deleted",
      statusCode: 403,
    });
  }

  await booking.destroy();

  res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
