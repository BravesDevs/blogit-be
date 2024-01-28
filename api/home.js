const path = require("path");

const ejs = require("ejs");

const index = (req, res, next) => {
  res.render("index", { title: "Home" });
};

const contact = (req, res, next) => {
  res.render("contact", { title: "Contact" });
};

const about = (req, res, next) => {
  res.render("about", { title: "About" });
};

const post = (req, res, next) => {
  res.render("post", { title: "Post" });
};

module.exports = {
  index,
  contact,
  about,
  post,
};
