import express from 'express';
import users from './users';

export default () => {
	const router = express.Router();

	router.use('/users', users());

	return router;
};