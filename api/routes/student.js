const express = require("express");
const router = express.Router();

const ADD_STUDENT = require("../controllers/student/add");
const {
	FETCH_SELECTED_STUDENTS,
	FETCH_STUDENTS
} = require("../controllers/student/fetch");

router.get("/", FETCH_STUDENTS);
router.get("/:key/:value", FETCH_SELECTED_STUDENTS);
router.post("/add", ADD_STUDENT);

module.exports = router;
