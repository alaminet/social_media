const User = require("../model/userModel");

exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

exports.validateName = (name, min, max) => {
  if (name > min || name < max) {
    return true;
  } else {
    return false;
  }
};

exports.validateUsername = async (username) => {
  let isTrue = false;
  do {
    let userExist = await User.findOne({ username: username });
    if (userExist) {
      username += (new Date() * Math.random()).toString().slice(0, 2);
      isTrue = true;
    } else {
      isTrue = false;
    }
  } while (isTrue);

  return username;
};
