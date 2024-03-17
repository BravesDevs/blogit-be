const { User } = require("../db/models/User");
const { hashData } = require("../common/helpers/helpers");

const jwt = require("jsonwebtoken");

const loginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return {
      error: "User not found",
    };
  }

  if (user.password !== password) {
    return {
      error: "Password is incorrect",
    };
  }

  return {
    ok: true,
    token: jwt.sign({ email }, "secretKey", {
      expiresIn: "1h",
    }),
    message: "User Login Successful",
  };
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
