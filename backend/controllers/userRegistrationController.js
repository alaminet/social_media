const User = require("../model/userModel");
const userRegistrationController = async (req, res) => {
  const { fname, lname } = req.body;

  try {
    const newUser = await new User({
      fname: fname,
      lname: lname,
    }).save();
    res.status(200).send({ newUser, message: "Registration Successfull" });
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = userRegistrationController;
