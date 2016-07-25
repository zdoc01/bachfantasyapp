import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import User from '../models/User';

export default () => {
	const router = express.Router();

	router.post('/', (req, res) => {
		console.log('/login..', req.body);

		User.findOne({username: req.body.email}, (err, user) => {
			if (err) {
				console.error(err);
				res.status(500).send({message: 'Internal server error'});
			}

			if (user) {
				if (user.validatePassword(req.body.password)) {
					console.log(`${user.username} authenticated successfully!`);
					res.cookie('username', req.body.email);
					res.status(200).send(user.toJSON());
				} else {
					res.status(403).send({message: 'The username/password combination you provided is invalid. Please try again.'});
				}
			} else {
				res.status(404).send({message: 'The username you provided does not exist. Please try again or create a new account.'});
			}
		});
	});

	return router;
};