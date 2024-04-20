const express = require("express");
const router = express.Router();
const {
  index,
  login,
  g2,
  g,
  error,
  register,
  appointment,
  tests,
  testFail,
  testPass
} = require("../controller/home");

router.route("/").get(index);
router.route("/login").get(login);
router.route("/g2").get(g2);
router.route("/g").get(g);
router.route("/error").get(error);
router.route("/register").get(register);
router.route("/appointment").get(appointment);
router.route("/tests").get(tests);
router.route('/tests/fail/:id').get(testFail);
router.route('/tests/pass/:id').get(testPass);

module.exports.navigationRouter = router;
