import express from 'express';
import users from './users';
import signup from './signup';
import login from './login';

export default () => {
  const router = express.Router();

  router.use('/users', users());
  router.use('/signup', signup());
  router.use('/login', login());

  return router;
};
