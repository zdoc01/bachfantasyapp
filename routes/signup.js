import express from 'express';

export default () => {
	const router = express.Router();

	router.post('/', (req, res) => {
		console.log('/signup..', req.body);
		res.status(200).send();
	});

	return router;
};