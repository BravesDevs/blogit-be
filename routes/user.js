const express = require("express");
const { loginApi } = require("../api/user");
const router = express.Router();

router.route("/login").post(loginApi);

module.exports.userRouter = router;
