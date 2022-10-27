const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
// ...
const { User } = require("../../db/models");

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

// Sign up
router.post("/", validateSignup, async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body;
  let user = await User.signup({
    email,
    username,
    firstName,
    lastName,
    password,
  });

  // const allUsers = await User.findAll({
  //   raw: true,
  // });

  // for (let userObj of allUsers) {
  //   if (userObj.username === username) {
  //     const err = new Error("User with that username already exists");
  //     err.status = 403;
  //     err.message = "User already exists";
  //   }
  // }

  await setTokenCookie(res, user);
  user = user.toJSON();

  delete user.createdAt;
  delete user.updatedAt;

  return res.json(user);
});

module.exports = router;
