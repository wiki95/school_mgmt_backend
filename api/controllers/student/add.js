const Student = require("../../models/student");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const moment = require("moment");

const ADD = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			const password = await bcrypt.hash(req.body.password, 10);
			if (password) {
				const student = new Student({
					_id: new mongoose.Types.ObjectId(),
					gr_num: req.body.gr_num,
					name: req.body.name,
					father_name: req.body.father_name,
					gender: req.body.gender,
					age: req.body.age,
					class: req.body.class,
					section: req.body.section,
					address: req.body.address,
					admission_date: moment(new Date()).format("LL"),
					nic: req.body.nic,
					password: password
				});
				const record = await student.save();
				if (record) {
					res.status(201).json({
						message: "Item added",
						addedItem: {
							_id: record._id,
							gr_num: req.body.gr_num,
							name: record.name,
							father_name: record.father_name,
							gender: record.gender,
							age: record.age,
							class: record.class,
							section: record.section,
							address: record.address,
							admission_date: record.admission_date
						}
					});
				}
			}
		} catch (err) {
			console.log(err);
			res.status(500).json({
				error: err
			});
		}
	} else {
		res.status(500).json({
			message: "you are not authenticated"
		});
	}
};

module.exports = ADD;
