const { User } = require("../db/models/User");
const { hashData } = require("../common/helpers/helpers");

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
    message: "User Login Successful",
  };
};

const registerService = async (email, password) => {
  const user = await User.findOne({ email });

  if (user) {
    return {
      error: "User already exists",
    };
  }

  await User.create({
    email,
    password: await hashData(password),
  });

  return {
    user,
  };
};

module.exports = { loginService, registerService };
