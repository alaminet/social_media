const User = require("../model/userModel");
const otpGenerator = require("otp-generator");
var jwt = require("jsonwebtoken");
const regEmail = require("../helpers/regEmail");

const userResendOTPController = async (req, res) => {
  const { email } = req.body;

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      jwt.sign(
        { email: email },
        process.env.PRIVATE_KEY,
        { expiresIn: "5m" },
        async function (err, token) {
          const otp = otpGenerator.generate(5, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
          });
          const newOTP = await User.findOneAndUpdate(
            { email: email },
            { $set: { otp: otp, token: token } },
            { new: true }
          );

          // OTP send to email
          regEmail(newOTP.email, newOTP.otp, newOTP.token, newOTP.lname);
          res.status(200).send({ message: "OTP Send, Check your mail" });
          //   restOTP
          setTimeout(async () => {
            await User.findOneAndUpdate(
              { email: newUser.email },
              { $set: { otp: "" } },
              { new: true }
            );
          }, 600000);
        }
      );
    } else {
      res.status(401).send({ message: "Invalid Email" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = userResendOTPController;
