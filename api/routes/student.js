const express = require("express");
const router = express.Router();

const ADD_STUDENT = require("../controllers/student/add");
const FETCH_STUDENTS = require("../controllers/student/fetch");
const DELETE_STUDENT = require("../controllers/student/delete");
const UDPATE_STUDENT = require("../controllers/student/update");

router.get("/", FETCH_STUDENTS);
router.post("/", ADD_STUDENT);
router.delete("/", DELETE_STUDENT);
router.put("/", UDPATE_STUDENT);

module.exports = router;
