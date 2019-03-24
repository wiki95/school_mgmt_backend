const Notice = require("../../models/notice");

const GET_NOTICE = async (req, res, next) => {
	if (req.isAuth === true) {
		if (req.body.gr_num) {
			try {
				const notice = await Notice.find({ gr_num: req.body.gr_num });
				if (notice.length !== 0) {
					let array = [];
					notice.map(not => {
						array.push({
							_id: not._id,
							message: not.message,
							date: not.date
						});
					});
					return res.status(200).json(array);
				} else {
					return res.status(404).json({
						message: "no mesage found"
					});
				}
			} catch (err) {
				return res.status(500).json({
					error: err.message
				});
			}
		} else if (req.body.section && req.body.class) {
			try {
				const notices = await Notice.find({
					class: req.body.class,
					section: req.body.section
				});
				if (notices.length !== 0) {
					let arrays = [];
					notices.map(val => {
						arrays.push({
							_id: val._id,
							message: val.message,
							date: val.date
						});
					});
					return res.status(200).json(arrays);
				} else {
					return res.status(404).json({
						message: "no mesage found"
					});
				}
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

module.exports = GET_NOTICE;
