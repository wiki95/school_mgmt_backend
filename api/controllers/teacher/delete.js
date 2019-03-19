const Teacher = require("../../models/teacher");

const DELETE_TEACHER = async (req, res, next) => {
	const idsArray = req.body;
	if (req.isAuth === true) {
		try {
			await Teacher.deleteMany({ _id: { $in: idsArray } });
			return res.status(200).json({
				message: "Record Deleted"
			});
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

module.exports = DELETE_TEACHER;
