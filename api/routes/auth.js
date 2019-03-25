const express = require("express");
const router = express.Router();

const SIGNUP = require("../controllers/auth/signup");
const LOGIN = require("../controllers/auth/login");
const VERIFY = require("../controllers/auth/verify");
const FORGOT = require("../controllers/auth/forgot");
const STUDENT_LOGIN = require("../controllers/auth/studentLogin");

////////------- sign up route-------/////////
router.post("/signup", SIGNUP);
router.post("/login", LOGIN);
router.post("/verify", VERIFY);
router.post("/forgot", FORGOT);
router.post("/stdlogin", STUDENT_LOGIN);

module.exports = router;
