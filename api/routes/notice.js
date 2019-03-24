const express = require("express");
const router = express.Router();

const ADD_NOTICE = require("../controllers/notice/add");

router.post("/", ADD_NOTICE);

module.exports = router;
