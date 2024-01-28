const path = require("path");

const index = (req, res, next) => {
  console.log("index");
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

const contact = (req, res, next) => {
  console.log("contact");
  res.sendFile(path.join(__dirname, "../public/contact.html"));
};

const about = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
};

module.exports = {
  index,
  contact,
  about,
};
