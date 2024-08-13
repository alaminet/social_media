const cloudinary = require("cloudinary");
const fs = require("fs");

// Configuration
cloudinary.config({
  cloud_name: process.env.COLUD_NAME,
  api_key: process.env.COLUD_API_KEY,
  api_secret: process.env.COLUD_API_SECRET,
});

const uploadMediaController = async (req, res) => {
  try {
    const { path } = req.body;
    const files = Object.values(req.files).flat();
    const imgUrl = [];
    for (const file of files) {
      const url = await uploadToCloudinary(file, path);
      imgUrl.push(url);
      removeFile(file.tempFilePath);
    }

    res.status(200).send({ imgUrl, message: "Media Post" });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

module.exports = uploadMediaController;

// uploadToCloudinary
const uploadToCloudinary = (file, path) => {
  return new Promise(async (resolve) => {
    await cloudinary.v2.uploader.upload(
      file.tempFilePath,
      {
        folder: path,
      },
      (err, res) => {
        if (err) {
          removeFile(file.tempFilePath);
          return res.status(404).send({ message: "File Upload Failed" });
        }
        resolve({ url: res.secure_url });
      }
    );
  });
};

// remove file
const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
