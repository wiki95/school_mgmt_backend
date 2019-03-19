const Student = require("../../models/student");

const FETCH_STUDENTS = async (req, res, next) => {
	try {
		const students = await Student.find({});
		if (students) {
			const data = students.map((student, index) => {
				return {
					sr_num: index + 1,
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

module.exports = FETCH_STUDENTS;
