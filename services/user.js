const { User } = require("../db/models/User");

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

module.exports = { loginService };
