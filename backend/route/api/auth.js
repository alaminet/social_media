const express = require("express");
const userRegistrationController = require("../../controllers/userRegistrationController");
const userLoginController = require("../../controllers/userLoginController");
const userOTPVerifyController = require("../../controllers/userOTPVerifyController");
const userResendOTPController = require("../../controllers/userResendOTPController");
const userTokenVerifyController = require("../../controllers/userTokenVerifyController");
const route = express.Router();

route.post("/registration", userRegistrationController);
route.post("/login", userLoginController);
route.post("/otpverify", userOTPVerifyController);
route.post("/resendotp", userResendOTPController);
route.post("/token", userTokenVerifyController);

module.exports = route;
