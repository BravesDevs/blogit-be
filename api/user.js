const { loginService } = require("../services/user");

const loginApi = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = await loginService(email, password);
  if (user.error) {
    return res.status(400).json({ error: user.error });
  }
  res.status(200).json({ message: "ok", data: user.user });
};

module.exports = { loginApi };
