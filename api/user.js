const { loginService, registerService } = require("../services/user");

const loginApi = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = await loginService(email, password);
  if (user.error) {
    return res.status(400).json({ error: user.error });
  }
  // Set the token in the cookie and render the G2 Page
  res.cookie("token", user.token, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  });
  res.redirect("/g2");
};

const registerApi = async (req, res) => {
  const { email, password, repeatPassword } = req.body;
  if (!email || !password || !repeatPassword) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (password !== repeatPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const user = await registerService(email, password);
  if (user.error) {
    return res.status(400).json({ error: user.error });
  }
  res.redirect("/login");
};

module.exports = { loginApi, registerApi };
