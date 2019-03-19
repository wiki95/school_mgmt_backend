const Teacher = require("../../models/teacher");

const UPDATE_TEACHER = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			const updated = await Teacher.updateOne({ _id: req.body._id }, req.body);
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

module.exports = UPDATE_TEACHER;
