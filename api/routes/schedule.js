const express = require("express");
const router = express.Router();

const ADD_SCHEDULE = require("../controllers/schedule/add");
const FETCH_SCHEDULE = require("../controllers/schedule/fetch");

router.post("/", ADD_SCHEDULE);
router.get("/:class/:section", FETCH_SCHEDULE);

module.exports = router;
