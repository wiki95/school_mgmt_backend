const Notice = require("../../models/notice");

const mongoose = require("mongoose");

const DELETE_NOTICE = async (req, res, next) => {
	if (req.isAuth === true) {
		try {
			await Notice.deleteOne({ _id: req.params.id });
			return res.status(200).json({
				message: "record deleted"
			});
		} catch (err) {
			res.status(500).json({
				message: err.message
			});
		}
	} else {
		res.status(500).json({
			message: "you are not authenticated!"
		});
	}
};

module.exports = DELETE_NOTICE;
