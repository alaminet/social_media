const User = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      bcrypt.compare(password, userExist.password, function (err, result) {
        if (result) {
          jwt.verify(
            userExist.token,
            process.env.PRIVATE_KEY,
            function (err, decoded) {
              if (err) {
                res.status(401).send({
                  message: "Your Token Expaired, Please Verify Again",
                });
              } else {
                res
                  .status(200)
                  .send({ userExist, message: "Login Successful" });
              }
            }
          );
        } else {
          res.status(401).send({ message: "Password not matched" });
        }
      });
    } else {
      res.status(401).send({ message: "Email is not Exist" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = userLoginController;
