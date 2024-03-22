const { User } = require("../db/models/User");
const { hashData, comparePassword } = require("../common/helpers/helpers");

const jwt = require("jsonwebtoken");

const loginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return {
      error: "User not found",
    };
  }

  if (!(await comparePassword(password, user.password))) {
    return {
      error: "Password is incorrect",
    };
  }

  return user;
};

const registerService = async (email, password, userType) => {
  const user = await User.findOne({ email });

  if (user) {
    return {
      error: "User already exists",
    };
  }

  await User.create({
    email,
    password: await hashData(password),
    userType: userType,
  });

  return {
    user,
  };
};

module.exports = { loginService, registerService };
