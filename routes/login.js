import express from 'express';

export default () => {
	const router = express.Router();

	router.post('/', (req, res) => {
		console.log('/login..', req.body);
		res.cookie('username', req.body.email);
		res.status(200).send();
		// res.status(404).send({message: 'The username you provided does not exist. Please try again or create a new account.'});
		// res.status(403).send({message: 'The username/password combination you provided is invalid.'});
	});

	return router;
};