const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const gravatar = require('gravatar');

// Defining methods for the UserController
module.exports = {
	findAll: function(req, res) {
		db.User
			.findOne({ _id: req.user.id })
			.then((user) => {
				if (user) {
					res.status(200).json(user);
				}
			})
			.catch((err) => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.User
			.findOne({ id: req.user.id })
			.then((user) => {
				if (user) {
					res.status(200).json(user);
				}
			})
			.catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		const { email, password, firstName, lastName } = req.body;
		db.User.findOne({ email }).then((user) => {
			if (user) {
				return res.status(400).json({ email: 'This email already exists.' });
			} else {
				const avatar = gravatar.url(email, {
					s: '200',
					r: 'pg',
					d: 'mm'
				});

				const newUser = {
					firstName,
					lastName,
					email,
					password,
					avatar
				};

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;

						db.User
							.create(newUser)
							.then((user) => {
								res.status(200).json({
									message: 'User account successfully created.',
									userCreated: true
								});
							})
							.catch((err) => console.log(err));
					});
				});
			}
		});
	},

	update: function(req, res) {
		console.log(req.user);
		db.User
			.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
			.then(() => {
				db.User.findOne({ _id: req.params.id }).then((user) => {
					res.status(200).json({
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email,
						avatar: user.avatar,
						message: 'user account successfully updated',
						userUpdated: true
					});
				});
			})
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.User
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	login: function(req, res) {
		const { email, password } = req.body;
		db.User.findOne({ email: email }).then((user) => {
			if (!user) {
				return res.status(404).json({ user: 'Email not found' });
			}

			bcrypt.compare(password, user.password).then((isMatch) => {
				if (isMatch) {
					db.User
						.findById(user._id)
						.then((user) => {
							const payload = {
								id: user._id,
								email: user.email,
								firstName: user.firstName,
								lastName: user.lastName,
								avatar: user.avatar
							};
							jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 * 12 }, (err, token) => {
								res.json({
									...payload,
									success: true,
									token: `Bearer ${token}`
								});
							});
						})
						.catch((err) => console.log(error));
				} else {
					return res.status(400).json({
						password: 'Incorrect password'
					});
				}
			});
		});
	},

	test: function(req, res) {
		res.json({
			success: true,
			msg: 'testing endpoing works'
		});
	}
};
