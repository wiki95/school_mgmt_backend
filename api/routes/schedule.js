const express = require("express");
const router = express.Router();

const ADD_SCHEDULE = require("../controllers/schedule/add");
const FETCH_SCHEDULE = require("../controllers/schedule/fetch");
const FETCH_ALL_SCHEDULE = require("../controllers/schedule/fetchAll");
const UPDATE_SCHEDULE = require("../controllers/schedule/update");

router.post("/", ADD_SCHEDULE);
router.post("/:class/:section", UPDATE_SCHEDULE);
router.get("/:class/:section", FETCH_SCHEDULE);
router.get("/", FETCH_ALL_SCHEDULE);

module.exports = router;
