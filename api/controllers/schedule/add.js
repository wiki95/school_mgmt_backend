const Schedule = require("../../models/schedule");

const mongoose = require("mongoose");

const ADD_SCHEDULE = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			const schedules = await Schedule.find({});
			let isError = false;
			schedules.forEach(schedule => {
				if (
					schedule.class === req.body.class &&
					schedule.section === req.body.section &&
					schedule.day === req.body.day
				) {
					isError = true;
				}
			});
			if (isError) {
				return res.status(409).json({
					message: "cannot add two entries for same day and class"
				});
			}

			const schedule = new Schedule({
				_id: new mongoose.Types.ObjectId(),
				class: req.body.class,
				subjects: req.body.subjects,
				day: req.body.day,
				section: req.body.section
			});
			const result = await schedule.save();
			if (result) {
				res.status(201).json({
					message: "schedule added",
					schedule: result
				});
			}
		} catch (err) {
			res.status(500).json({
				error: err
			});
		}
	} else {
		res.status(500).json({
			message: "you are not authenticated!"
		});
	}
};

module.exports = ADD_SCHEDULE;
