const Teacher = require("../../models/teacher");
const mongoose = require("mongoose");

const ADD_TEACHER = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			const regnum = await Teacher.findOne({ reg_num: req.body.reg_num });
			if (regnum) {
				return res.status(409).json({ message: "duplicate reg_num" });
			}

			const teacher = new Teacher({
				_id: new mongoose.Types.ObjectId(),
				reg_num: req.body.reg_num,
				name: req.body.name,
				father_name: req.body.father_name,
				gender: req.body.gender,
				age: req.body.age,
				subject: req.body.subject,
				class_teacher: req.body.class_teacher,
				address: req.body.address,
				salary: req.body.salary
			});
			const record = await teacher.save();
			if (record) {
				res.status(201).json({
					message: "Item added",
					addedItem: {
						_id: record._id,
						reg_num: req.body.reg_num,
						name: record.name,
						father_name: record.father_name,
						gender: record.gender,
						age: record.age,
						subject: record.subject,
						class_teacher: record.class_teacher,
						address: record.address,
						salary: record.salary
					}
				});
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

module.exports = ADD_TEACHER;
