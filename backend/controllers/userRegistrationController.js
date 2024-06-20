const {
  validateEmail,
  validateName,
  validateUsername,
} = require("../helpers/validation");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const regEmail = require("../helpers/regEmail");

const userRegistrationController = async (req, res) => {
  try {
    const { fname, lname, email, password, birthDate, gender } = req.body;
    if (!validateEmail(email)) {
      return res.status(401).send({ message: "Invalid Email Address" });
    }

    if (validateName(fname, 3, 7)) {
      return res
        .status(401)
        .send({ message: "First name should be 4 to 6 characters" });
    }
    if (validateName(lname, 3, 7)) {
      return res
        .status(401)
        .send({ message: "Last name should be 4 to 6 characters" });
    }

    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(401).send({ message: "Email alread exist" });
    }

    let tempUsername = fname.toLowerCase() + lname.toLowerCase();
    let setUsername = await validateUsername(tempUsername);

    bcrypt.hash(password, 10, function (err, hash) {
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
          const newUser = await new User({
            fname: fname,
            lname: lname,
            email: email,
            gender: gender,
            username: setUsername,
            password: hash,
            birthDate: birthDate,
            token: token,
            otp: otp,
          }).save();

          // OTP send to email
          regEmail(newUser.email, newUser.otp, newUser.token, newUser.lname);
          res
            .status(200)
            .send({ newUser, message: "Registration Successfull" });
          // resetOTP
          setTimeout(async () => {
            await User.findOneAndUpdate(
              { email: newUser.email },
              { $set: { otp: "" } },
              { new: true }
            );
          }, 300000);
        }
      );
    });
  } catch (error) {
    res.status(401).send(error);
    console.log(error);
  }
};

module.exports = userRegistrationController;
