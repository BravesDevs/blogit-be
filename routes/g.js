const { getLicenseDetailsAPI } = require("../api/g");

const express = require("express");
const router = express.Router();

router.route("/fetch").post(getLicenseDetailsAPI);

module.exports.gRouter = router;