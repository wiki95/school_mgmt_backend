const mongoose = require("mongoose");

const schema = mongoose.Schema;

const studentSchema = new schema({
	_id: mongoose.Schema.Types.ObjectId,
	gr_num: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	father_name: { type: String, required: true },
	gender: { type: String, required: true },
	age: { type: String, required: true },
	class: { type: String, required: true },
	section: { type: String, required: true },
	address: { type: String, required: true },
	admission_date: { type: Date, required: true },
	nic: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

module.exports = mongoose.model("Student", studentSchema);
