const router = require("express").Router();

const { restoreUser } = require("../../utils/auth.js");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const spotsRouter = require("./spots.js");
const reviewsRouter = require("./reviews.js");
const bookingsRouter = require("./bookings.js");
const spotImagesRouter = require("./spot-images.js");
const reviewImagesRouter = require("./review-images.js");
const messagesRouter = require("./messages.js");

router.use(restoreUser);
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotsRouter);
router.use("/reviews", reviewsRouter);
router.use("/bookings", bookingsRouter);
router.use("/spot-images", spotImagesRouter);
router.use("/review-images", reviewImagesRouter);
router.use("/messages", messagesRouter);

module.exports = router;
