const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Student = require("../../models/student");

const STUDENT_LOGIN = async (req, res, next) => {
	try {
		const student = await Student.findOne({ nic: req.body.nic });
		if (student) {
			const isEqual = await bcrypt.compare(req.body.password, student.password);
			if (isEqual) {
				const token = jwt.sign(
					{ studentId: student.id, nic: user.nic },
					process.env.TOKEN_KEY,
					{
						expiresIn: "1h"
					}
				);
				return res.status(200).json({
					_id: student._id,
					gr_num: student.gr_num,
					name: student.name,
					father_name: student.father_name,
					gender: student.gender,
					age: student.age,
					class: student.class,
					section: student.section,
					address: student.address,
					nic: student.nic,
					admission_date: new Date(student.admission_date)
						.toString()
						.substr(0, 10),
					token: token,
					tokenExpiration: 1
				});
			} else {
				res.status(400).json({
					message: "password is incorrect"
				});
			}
		} else {
			return res.status(404).json({
				message: "No user Found"
			});
		}
	} catch (err) {
		res.status(404).json({
			error: err,
			message: err.message
		});
	}
};

module.exports = STUDENT_LOGIN;
