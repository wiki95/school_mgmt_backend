const express = require("express");
const router = express.Router();

const ADD_NOTICE = require("../controllers/notice/add");
const GET_NOTICE = require("../controllers/notice/get");
const DELETE_NOTICE = require("../controllers/notice/delete");

router.post("/", GET_NOTICE);
router.post("/add", ADD_NOTICE);
router.post("/:id", DELETE_NOTICE);

module.exports = router;
