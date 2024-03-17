const { g2RegisterAPI, redirectGAPI } = require("../controller/g2");

const express = require("express");
const router = express.Router();

router.route("/register").post(g2RegisterAPI);

module.exports.g2Router = router;
