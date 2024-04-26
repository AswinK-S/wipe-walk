const express = require("express");
const router = express.Router();
const protect = require("../Middleware/authMiddleware");
const {
  RegisterUser,
  loginUser,
  bookingData
} = require("../Controllers/userController");

router.route("/signup").post(RegisterUser);

router.route("/login").post(loginUser);

router.route("/bookNow").post(bookingData)

module.exports = router;
