const Student = require("../../models/student");

exports.FETCH_SELECTED_STUDENTS = async (req, res, next) => {
	const key = req.params.key;
	const value = req.params.value;
	try {
		const students = await Student.find({ [key]: value });
		if (students) {
			const data = students.map(student => {
				return {
					_id: student._id,
					gr_num: student.gr_num,
					name: student.name,
					father_name: student.father_name,
					gender: student.gender,
					age: student.age,
					class: student.class,
					section: student.section,
					address: student.address,
					admission_date: new Date(student.admission_date)
						.toString()
						.substr(0, 10)
				};
			});
			return res.status(200).json({
				data
			});
		}
	} catch (err) {
		res.status(404).json({
			error: err,
			message: "not found"
		});
	}
};

exports.FETCH_STUDENTS = async (req, res, next) => {
	try {
		const students = await Student.find({});
		if (students) {
			const data = students.map(student => {
				return {
					_id: student._id,
					gr_num: student.gr_num,
					name: student.name,
					father_name: student.father_name,
					gender: student.gender,
					age: student.age,
					class: student.class,
					section: student.section,
					address: student.address,
					admission_date: new Date(student.admission_date)
						.toString()
						.substr(0, 10)
				};
			});
			return res.status(200).json({
				data
			});
		}
	} catch (err) {
		res.status(404).json({
			error: err,
			message: "not found"
		});
	}
};
