const db = require('../models');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

// Defining methods for the GigsController
module.exports = {
	findById: function(req, res) {
		db.Image
			.find({ userid: req.params.userid })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findAll: function(req, res) {
		db.Image
			.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	find: function(req, res) {
		db.Image
			.findById({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		const url = req.protocol + '://' + req.get('host');
		const image = new Image({
			_id: new mongoose.Types.ObjectId(),
			name: req.body.name,
			image: url + '/public/' + req.file.filename
		});
		db.Image.create(image);
		image
			.save()
			.then((result) => {
				res.status(201).json({
					message: 'User registered successfully!',
					imageCreated: {
						_id: result._id,
						image: result.image
					}
				});
			})
			.catch((err) => {
				console.log(err),
					res.status(500).json({
						error: err
					});
			});
	},
	update: function(req, res) {
		db.Image
			.findOneAndUpdate(
				{ userid: req.params.userid },
				{ $set: { images: req.body } },
				{ new: true, upsert: true }
			)
			.then(() => {
				db.Image.findOne({ userid: req.params.userid }).then((gear) => {
					res.status(200).json(gear);
				});
			})
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Image
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};
