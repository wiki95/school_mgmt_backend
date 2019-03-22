const Schedule = require("../../models/schedule");

const mongoose = require("mongoose");

const UPDATE_SCHEDULE = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			let ids = [];
			req.body.forEach(element => {
				ids.push(element._id);
			});
			const rs = await Schedule.find({
				class: req.params.class,
				section: req.params.section
			});
			rs.forEach((prevRow, index) => {
				req.body.forEach(async (updRow, ind) => {
					if (prevRow._id.toString() === updRow._id.toString()) {
						const res = await Schedule.updateOne({ _id: updRow._id }, updRow);
						console.log(res);
					}
				});
			});

			return res.status(200).json({
				message: "result updated"
			});
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

module.exports = UPDATE_SCHEDULE;
