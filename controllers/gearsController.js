const db = require('../models');

// Defining methods for the GigsController
module.exports = {
	findById: function(req, res) {
		db.Gear
			.find({ userid: req.params.userid })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findAll: function(req, res) {
		db.Gear
			.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	find: function(req, res) {
		db.Gear
			.findById({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		db.Gear.create(req.body).then((dbModel) => res.json(dbModel)).catch((err) => res.status(422).json(err));
	},
	update: function(req, res) {
		db.Gear
			.findOneAndUpdate({ userid: req.params.userid }, { $set: { gears: req.body } }, { new: true, upsert: true })
			.then(() => {
				db.Gear.findOne({ userid: req.params.userid }).then((gear) => {
					res.status(200).json(gear);
				});
			})
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Gear
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};
