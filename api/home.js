const path = require("path");

const ejs = require("ejs");

const index = (req, res, next) => {
  res.render("index", { title: "Dashboard" });
};

const login = (req, res, next) => {
  res.render("login", { title: "Login" });
};

const g2 = (req, res, next) => {
  res.render("g2", { title: "G2" });
};

const g = (req, res, next) => {
  res.render("g", { title: "G" });
};

module.exports = {
  index,
  login,
  g2,
  g,
};
