const express = require("express");
const router = express.Router();

const ADD_TEACHER = require("../controllers/teacher/add");
const UPDATE_TEACHER = require("../controllers/teacher/update");
const DELETE_TEACHERS = require("../controllers/teacher/delete");
const FETCH_TEACHERS = require("../controllers/teacher/fetch");

router.post("/", ADD_TEACHER);
router.put("/", UPDATE_TEACHER);
router.delete("/", DELETE_TEACHERS);
router.get("/", FETCH_TEACHERS);

module.exports = router;
