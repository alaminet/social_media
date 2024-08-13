const fs = require("fs");

module.exports = async (req, res, next) => {
  try {
    console.log(Object.values(req.files).flat());
    if (!req.files || Object.values(req.files).flat().length === 0) {
      return res.status(404).send({ message: "File Not Selected" });
    }
    const files = Object.values(req.files).flat();
    files.forEach((element) => {
      if (
        element.mimetype !== "image/jpg" &&
        element.mimetype !== "image/jpeg" &&
        element.mimetype !== "image/png" &&
        element.mimetype !== "image/webp" &&
        element.mimetype !== "image/gif" &&
        element.mimetype !== "image/svg+xml"
      ) {
        const filePath = element.tempFilePath;
        fs.unlink(filePath, (err) => {
          if (err) {
            return res.status(404).send({ message: err.message });
          }
          return res.status(404).send({
            message: `File ${element.name} has not Supported.`,
          });
        });
      }

      if (element.size > 1024 * 1024 * 5) {
        const filePath = element.tempFilePath;
        fs.unlink(filePath, (err) => {
          if (err) {
            return res.status(404).send({ message: err.message });
          }
          return res.status(404).send({
            message: `File ${element.name} Size more than 5MB.`,
          });
        });
      }
    });
    next();
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};
