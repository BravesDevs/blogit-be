const express = require("express");
const router = express.Router();

const { index, contact, about, post } = require("../api/home");

router.route("/").get(index);
router.route("/contact").get(contact);
router.route("/about").get(about);
router.route("/post").get(post);

module.exports = {
  router,
};
