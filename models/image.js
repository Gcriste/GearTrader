const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagechema = new Schema(
	{
		image: {
			type: String
		},
		userid: {
			type: String
		},
		firstName: {
			type: String
		},
		lastName: {
			type: String
		},
		gearid: {
			type: String
		}
	},
	{ timestamps: {} }
);

const Image = mongoose.model('Image', imagechema);

module.exports = Image;
