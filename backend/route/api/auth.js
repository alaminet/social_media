const express = require("express");
const userRegistrationController = require("../../controllers/userRegistrationController");
const userLoginController = require("../../controllers/userLoginController");
const userOTPVerifyController = require("../../controllers/userOTPVerifyController");
const route = express.Router();

route.post("/registration", userRegistrationController);
route.post("/login", userLoginController);
route.post("/otpverify", userOTPVerifyController);

module.exports = route;
