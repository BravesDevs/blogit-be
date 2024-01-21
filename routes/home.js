const express = require("express");
const router = express.Router();

const app = require("../api/home");

router.route("/").get(app);

module.exports = {
  router,
};
