const Schedule = require("../../models/schedule");

const mongoose = require("mongoose");

const FETCH_ALL_SCHEDULE = async (req, res, next) => {
	try {
		const schedules = await Schedule.find({});
		if (schedules.length === 0) {
			return res.status(404).json({ message: "no schedule found" });
		}

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

module.exports = FETCH_ALL_SCHEDULE;
