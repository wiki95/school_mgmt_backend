const mongoose = require("mongoose");

const schema = mongoose.Schema;

const scheduleSchema = new schema({
	_id: schema.Types.ObjectId,
	class: { type: String, required: true },
	subjects: [
		{
			type: String,
			required: true
		}
	],
	day: { type: String, required: true },
	section: { type: String, required: true }
});

module.exports = mongoose.model("Schedule", scheduleSchema);
