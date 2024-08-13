const User = require("../model/userModel");

const userOTPVerifyController = async (req, res) => {
  const { otp, email } = req.body;

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      if (!userExist.verify) {
        if (userExist.otp !== "") {
          if (userExist.otp === otp) {
            const verifyUser = await User.findOneAndUpdate(
              { email: userExist.email },
              { $set: { otp: "", verify: true, token: "" } },
              { new: true }
            );
            res.status(200).send({ verifyUser, message: "OTP Matched" });
          } else {
            res.status(401).send({ message: "OTP Not Matched" });
          }
        } else {
          res.status(401).send({ message: "OTP Expaired" });
        }
      } else {
        res.status(401).send({ message: "Email Verifyed, Try to login" });
      }
    } else {
      res.status(401).send({ message: "Email not Matched" });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = userOTPVerifyController;
