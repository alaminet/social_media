const express = require("express");
const userRegistrationController = require("../../controllers/userRegistrationController");
const route = express.Router();

route.post("/registration", userRegistrationController);

module.exports = route;
