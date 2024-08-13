const express = require("express");
const uploadMediaController = require("../../controllers/uploadMediaController");
const uploadMiddleware = require("../../middleware/uploadMiddleware");
const route = express.Router();

route.post("/photos", uploadMiddleware, uploadMediaController);

module.exports = route;
