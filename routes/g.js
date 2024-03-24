const {
  getLicenseDetailsAPI,
  addAppointments,
  getAppointments,
  bookAppointment,
} = require("../controller/g");

const express = require("express");
const router = express.Router();

router.route("/fetch").post(getLicenseDetailsAPI);
router.route("/generate").post(addAppointments);
router.route("/getAppointments").post(getAppointments);
router.route("/bookAppointment").post(bookAppointment);

module.exports.gRouter = router;
