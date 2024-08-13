const express = require("express");
const postCreateController = require("../../controllers/postCreateController");
const route = express.Router();

route.post("/newpost", postCreateController);

module.exports = route;
