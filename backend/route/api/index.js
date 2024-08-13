const express = require("express");
const route = express.Router();
const auth = require("./auth.js");
const post = require("./post.js");
const upload = require("./upload.js");

route.use("/auth", auth);
route.use("/post", post);
route.use("/upload", upload);

module.exports = route;
