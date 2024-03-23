const { getLicenseDetailsAPI, addAppointments } = require("../controller/g");

const express = require("express");
const router = express.Router();

router.route("/fetch").post(getLicenseDetailsAPI);
router.route("/generate").post(addAppointments);

module.exports.gRouter = router;
