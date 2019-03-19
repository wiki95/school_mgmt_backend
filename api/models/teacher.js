const mongoose = require("mongoose");

const schema = mongoose.Schema;

const teacherSchema = new schema({
	_id: mongoose.Schema.Types.ObjectId,
	reg_num: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	father_name: { type: String, required: true },
	gender: { type: String, required: true },
	age: { type: String, required: true },
	subject: { type: String, required: true },
	class_teacher: { type: String, required: true },
	address: { type: String, required: true },
	salary: { type: String, required: true }
});

module.exports = mongoose.model("Teacher", teacherSchema);
