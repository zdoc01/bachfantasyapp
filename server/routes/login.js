import express from 'express';
import User from '../models/User';

export default () => {
  const router = express.Router();

  router.post('/', (req, res) => {
    User.findOne({ username: req.body.email }, (err, user) => {
      if (err) {
        console.error(err); /* eslint-disable-line no-console */
        res.status(500).send({ message: 'Internal server error' });
      }

      if (user) {
        if (user.validatePassword(req.body.password)) {
          /* eslint-disable-next-line no-console */
          console.log(`${user.username} authenticated successfully!`);
          res.cookie('username', req.body.email);
          res.status(200).send(user.toJSON());
        } else {
          res.status(403).send({
            message:
              'The username/password combination you provided is invalid. Please try again.',
          });
        }
      } else {
        res.status(404).send({
          message:
            'The username you provided does not exist. Please try again or create a new account.',
        });
      }
    });
  });

  return router;
};
