const nodemailer = require("nodemailer");
const User = require("../../models/auth");

const FORGOT = async (req, res, next) => {
	const email = req.body.email;

	try {
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: "andaparatha73@gmail.com", // generated ethereal user
				pass: `${process.env.PASSWORD}` // generated ethereal password
			},
			tls: {
				rejectUnauthorized: false
			}
		});
		const user = await User.findOne({ email: email });
		if (user) {
			const helperOptions = {
				from: '"Waqar Saeed" <andaparatha73@gmail.com>',
				to: email,
				subject: "School management Password forgot",
				text: `your password is `
			};
			try {
				const info = await transporter.sendMail(helperOptions);

				if (info) {
					return res.status(200).json({
						info: info
					});
				}
			} catch (err) {
				throw new Error(err);
			}
		} else {
			return res.status(404).json({
				message: "no user found"
			});
		}
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = FORGOT;
