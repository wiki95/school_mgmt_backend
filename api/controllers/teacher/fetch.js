const Teacher = require("../../models/teacher");

const FETCH_TEACHERS = async (req, res, next) => {
	try {
		const teachers = await Teacher.find({});
		if (teachers) {
			const data = teachers.map((teacher, index) => {
				return {
					sr_num: index + 1,
					_id: teacher._id,
					reg_num: teacher.reg_num,
					name: teacher.name,
					father_name: teacher.father_name,
					gender: teacher.gender,
					age: teacher.age,
					subject: teacher.subject,
					class_teacher: teacher.class_teacher,
					address: teacher.address,
					salary: teacher.salary
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

module.exports = FETCH_TEACHERS;
