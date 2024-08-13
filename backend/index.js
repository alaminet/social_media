require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const route = require("./route");
const cors = require("cors");
const app = express();
const mongoConfig = require("./config/mogoConfig");

// db
mongoConfig();

// middleware
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// router api
app.use(process.env.API_URL, route);

app.get("/", function (req, res) {
  res.send("Server home");
});

port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Port runing at ${port}`);
});
