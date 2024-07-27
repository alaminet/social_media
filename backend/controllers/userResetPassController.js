const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const userResetPassController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      bcrypt.hash(password, 10, async function (err, hash) {
        await User.findOneAndUpdate(
          { email: emailExist.email },
          { $set: { password: hash } },
          { new: true }
        );
        res.status(200).send({ message: "Password updated, Now Login" });
      });
    } else {
      res.status(401).send({ message: "User Not matched" });
    }
  } catch (error) {
    res.status(401).send(error);
    console.log(error);
  }
};

module.exports = userResetPassController;
