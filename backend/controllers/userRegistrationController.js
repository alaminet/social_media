const { validateEmail, validateName } = require("../helpers/validation");
const User = require("../model/userModel");
const bcrypt = require('bcrypt');
const userRegistrationController = async (req, res) => {
  try {
    const { fname, lname, username, email,password,birthDate } = req.body;

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
    if (validateName(username, 3, 8)) {
      return res
        .status(401)
        .send({ message: "Username should be 4 to 7 characters" });
    }
    const usernameExist = await User.findOne({ username: username });
    const emailExist = await User.findOne({ email: email });

    if (usernameExist) {
      return res.status(401).send({ message: "Username alread exist" });
    }
    if (emailExist) {
      return res.status(401).send({ message: "Email alread exist" });
    }

    bcrypt.hash(password, 10, async function(err, hash) {
        const newUser = await new User({
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: hash,
            birthDate: new Date(birthDate)
          }).save();
        res.status(200).send({ newUser, message: "Registration Successfull" });
    });
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = userRegistrationController;
