const Schedule = require("../../models/schedule");

const mongoose = require("mongoose");

const FETCH_SCHEDULE = async (req, res, next) => {
	try {
		const schedules = await Schedule.find({
			class: req.params.class,
			section: req.params.section
		});
		if (schedules.length === 0) {
			return res.status(404).json({ message: "not found" });
		}
		// let array = [];
		// let maximumSubjectsOfSelectedClass = 0; //per day

		// for (let i = 0; i < schedules.length; i++) {
		// 	if (schedules[i].subjects.length > maximumSubjectsOfSelectedClass) {
		// 		maximumSubjectsOfSelectedClass = schedules[i].subjects.length;
		// 	}
		// }
		// console.log(schedules);
		// let obj = {};
		// schedules.forEach(val => {
		// 	if (val.day === "Monday") {
		// 		for (let j = 0; j < maximumSubjectsOfSelectedClass; j++) {
		// 			obj = {
		// 				_id: j,
		// 				sr_num: j + 1,
		// 				Monday: val.subjects[j] && val.subjects[j]
		// 			};
		// 		}
		// 	}
		// 	if (val.day === "Tuesday") {
		// 		for (let j = 0; j < maximumSubjectsOfSelectedClass; j++) {
		// 			obj = {
		// 				_id: j,
		// 				sr_num: j + 1,
		// 				Tuesday: val.subjects[j] && val.subjects[j]
		// 			};
		// 		}
		// 	}
		// });
		let array = [];
		schedules.forEach(schedule => {
			array.push(schedule);
		});
		return res.status(200).json(array);
	} catch (err) {
		res.status(500).json({
			error: err
		});
	}
};

module.exports = FETCH_SCHEDULE;
