const express = require("express");
const router = express.Router();
const { index, login, g2, g, error } = require("../api/home");

router.route("/").get(index);
router.route("/login").get(login);
router.route("/g2").get(g2);
router.route("/g").get(g);
router.route("/error").get(error);

module.exports.navigationRouter = router;
