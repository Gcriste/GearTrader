const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gearchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		avatar: { type: String },
		userid: {
			type: String
		},
		date: {
			type: Date,
			default: Date.now
		},
		price: {
			type: String,
			required: true
		},
		make: {
			type: String,
			required: true
		},
		model: {
			type: String,
			required: true
		},
		condition: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		description: {
			type: String
		},
		year: {
			type: Number
		}
	},
	{ timestamps: {} }
);

const Gear = mongoose.model('Gear', gearchema);

module.exports = Gear;
