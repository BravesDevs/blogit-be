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

  req.session.isLoggedIn = true;
  req.session.user = user._id;
  req.session.userType = user.userType;
  req.session.save();

  res.render("g2", {
    title: "Welcome",
    isLoggedIn: req.session.isLoggedIn || false,
    userType: req.session.userType,
  });
};

const registerApi = async (req, res) => {
  const { email, password, repeatPassword, userType } = req.body;
  if (!email || !password || !repeatPassword) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (password !== repeatPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const user = await registerService(email, password, userType);
  if (user.error) {
    return res.status(400).json({ error: user.error });
  }
  res.redirect("/login");
};

module.exports = { loginApi, registerApi };
