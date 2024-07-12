const User = require("../model/userModel");

const userFindController = async (req, res) => {
  const { email } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(200).send({
        userInfo: {
          email: userExist.email,
          profilePic: userExist.profilePic,
        },
        message: "Find user",
      });
    } else {
      res.status(401).send({ message: "Email is not Exist" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = userFindController;
