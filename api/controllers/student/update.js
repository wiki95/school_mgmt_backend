const Student = require("../../models/student");
const bcrypt = require("bcryptjs");
const UPDATE_STUDENT = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			const hash = await bcrypt.hash(req.body.password, 10);

			const student = {
				gr_num: req.body.gr_num,
				name: req.body.name,
				father_name: req.body.father_name,
				gender: req.body.gender,
				age: req.body.age,
				class: req.body.class,
				section: req.body.section,
				address: req.body.address,
				nic: req.body.nic,
				admission_date: req.body.admission_date,
				password: hash
			};
			const updated = await Student.updateOne({ _id: req.body._id }, student);
			if (updated) {
				console.log(updated);
				return res.status(201).json({
					message: "record updated"
				});
			}
		} catch (err) {
			return res.status(500).json({
				error: err
			});
		}
	} else {
		res.status(500).json({
			message: "you are not authenticated"
		});
	}
};

module.exports = UPDATE_STUDENT;
