const express = require("express");
const router = express.Router();

const SIGNUP = require("../controllers/auth/signup");
const LOGIN = require("../controllers/auth/login");
const VERIFY = require("../controllers/auth/verify");
const FORGOT = require("../controllers/auth/forgot");

////////------- sign up route-------/////////
router.post("/signup", SIGNUP);
router.post("/login", LOGIN);
router.post("/verify", VERIFY);
router.post("/forgot", FORGOT);

module.exports = router;
