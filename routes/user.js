const express = require("express");
const { loginApi, registerApi } = require("../controller/user");
const router = express.Router();

router.route("/login").post(loginApi);
router.route("/register").post(registerApi);

module.exports.userRouter = router;
