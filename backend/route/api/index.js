const express = require("express");
const route = express.Router();
const auth = require("./auth.js");

route.use("/auth", auth);

module.exports = route;
