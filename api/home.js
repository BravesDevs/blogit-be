const path = require("path");

const ejs = require("ejs");
const { fetchG2RegistrationsService } = require("../services/g2");

const index = async (req, res, next) => {
  // Get the License Registrations of G2
  try {
    let g2Registrations = await fetchG2RegistrationsService();
    res.render("index", { title: "Dashboard", g2Registrations });
  } catch (err) {
    res.render("error", { title: "Error" });
  }
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

const error = (req, res, next) => {
  res.render("error", { title: "Error" });
};

module.exports = {
  index,
  login,
  g2,
  g,
  error,
};
