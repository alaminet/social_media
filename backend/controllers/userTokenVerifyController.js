const User = require("../model/userModel");
var jwt = require("jsonwebtoken");

const userTokenVerifyController = async (req, res) => {
  const { token, email } = req.body;

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      jwt.verify(token, process.env.PRIVATE_KEY, async function (err, decoded) {
        if (decoded?.email === userExist.email) {
          const verifyUser = await User.findOneAndUpdate(
            { email: decoded.email },
            { $set: { otp: "", verify: true, token: "" } },
            { new: true }
          );
          res.status(200).send({ verifyUser, message: "Account Verifyed" });
        }
        if (err?.message) {
          res.status(401).send({ message: "Token Invalid, Send Again?" });
        }
      });
    } else {
      res.status(401).send({ message: "Invalid Email?" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = userTokenVerifyController;
