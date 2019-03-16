const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../../models/auth");

const SIGNUP = async (req, res, next) => {
	try {
		const users = await User.find();
		if (users.length >= 1) {
			res.status(409).json({
				email: req.body.email,
				message: "Admin Exist, Cannot at more than 1"
			});
		} else {
			const hash = await bcrypt.hash(req.body.password, 10);
			const user = new User({
				_id: mongoose.Types.ObjectId(),
				email: req.body.email,
				password: hash
			});

			const result = await user.save();
			if (result) {
				const token = jwt.sign(
					{
						email: result.email,
						password: result.password
					},
					process.env.TOKEN_KEY,
					{
						expiresIn: "1h"
					}
				);
				return res.status(201).json({
					message: "Admin Created",
					_id: result._id,
					email: result.email,
					token: token,
					tokenExpiration: 1
				});
			}
		}
	} catch (err) {
		res.status(500).json({
			error: err,
			message: err.message
		});
	}
};

module.exports = SIGNUP;
