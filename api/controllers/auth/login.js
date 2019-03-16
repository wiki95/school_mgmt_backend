const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/auth");

const LOGIN = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			const isEqual = await bcrypt.compare(req.body.password, user.password);
			if (isEqual) {
				const token = jwt.sign(
					{ userId: user.id, email: user.email },
					process.env.TOKEN_KEY,
					{
						expiresIn: "1h"
					}
				);
				return res.status(200).json({
					_id: user.id,
					email: user.email,
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

module.exports = LOGIN;
