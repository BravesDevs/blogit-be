const { g2RegisterAPI } = require("../api/g2");

const express = require("express");
const router = express.Router();

router.route("/register").post(g2RegisterAPI);

module.exports.g2Router = router;
