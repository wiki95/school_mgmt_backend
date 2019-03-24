const Notice = require("../../models/notice");

const mongoose = require("mongoose");

const ADD_NOTICE = async (req, res, next) => {
	if (req.isAuth === true) {
		if (req.body.gr_num) {
			try {
				const notice = new Notice({
					_id: mongoose.Types.ObjectId(),
					gr_num: req.body.gr_num,
					message: req.body.message
				});
				const result = await notice.save();
				return res.status(201).json({
					message: "notice added",
					result: result
				});
			} catch (err) {
				return res.status(500).json({
					error: err.message
				});
			}
		} else if (req.body.section && req.body.class) {
			try {
				const notic = new Notice({
					_id: mongoose.Types.ObjectId(),
					class: req.body.class,
					section: req.body.section,
					message: req.body.message
				});
				const reslt = await notic.save();
				return res.status(201).json({
					message: "notice added",
					result: reslt
				});
			} catch (err) {
				return res.status(500).json({
					error: err.message
				});
			}
		} else {
			return res.status(500).json({
				message: "fields mssing"
			});
		}
	} else {
		res.status(500).json({
			message: "you are not authenticated!"
		});
	}
};

module.exports = ADD_NOTICE;
