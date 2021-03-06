const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		avatar: { type: String },
		date: {
			type: Date,
			default: Date.now
		}
	},
	{ timestamps: {} }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
