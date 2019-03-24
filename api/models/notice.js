const mongoose = require("mongoose");

const schema = mongoose.Schema;

const noticeSchema = new schema({
	_id: mongoose.Schema.Types.ObjectId,
	gr_num: { type: String },
	class: { type: String },
	section: { type: String },
	message: { type: String, required: true },
	date: { type: Date, default: () => Date.now() }
});

module.exports = mongoose.model("Notice", noticeSchema);
