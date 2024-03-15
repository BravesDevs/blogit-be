const { User } = require("../db/models/G2");

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
    user,
  };
};

const registerService = async (email, password) => {
  const user = await User.findOne({
    email,
  });

  if (user) {
    return {
      error: "User already exists",
    };
  }

  await User.create({
    email,
    password,
  });

  return {
    user,
  };
};

module.exports = { loginService, registerService };
