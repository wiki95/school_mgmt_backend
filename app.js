require("dotenv").config();
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const auth = require("./api/routes/auth");
const student = require("./api/routes/student");
const isAuth = require("./api/middleware/is-auth");

const app = express();
app.use(bodyParser.json());

const corsOptions = {
	origin: "*",
	methods: ["POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
//app.use(isAuth);

app.use(isAuth);
/////////////----------available routes---------//////////////
app.use("/auth", auth);
app.use("/student", student);

////////////--------------Error if no routes found -----------///////////////
app.use((req, res, next) => {
	const error = new Error("Not found!");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log("connected to database"))
	.catch(e => console.log("Database not connected", e));

app.listen(process.env.PORT);
