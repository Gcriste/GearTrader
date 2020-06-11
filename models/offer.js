const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	offerPrice: { type: Number, required: true },
	phoneNumber: { type: String, required: true },
	email: { type: String, required: true },
	userid: { type: String },
	avatar: { type: String },
	gearid: { type: String },
	date: {
		type: Date,
		default: Date.now
	}
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
