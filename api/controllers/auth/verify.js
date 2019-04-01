const jwt = require("jsonwebtoken");

const VERIFY = (req, res, next) => {
	const authHeader = req.get("Authorization");
	if (!authHeader) {
		res.status(500).json({
			message: "no header"
		});
	}
	const token = authHeader.split(" ")[1];
	if (!token || token === "") {
		res.status(500).json({
			message: "no token"
		});
	}
	let decodedToken;
	try {
		decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
		if (!decodedToken) {
			res.status(500).json({
				message: "token is invalid"
			});
		} else {
			return res.status(200).json({
				message: "verified"
			});
		}
	} catch (err) {
		res.status(500).json({
			error: err
		});
	}
};

module.exports = VERIFY;
