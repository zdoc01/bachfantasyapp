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
        /* eslint-disable-next-line no-console */
        console.log(`User with username [ ${user.username} ] already exists.`);
        if (user.validatePassword(req.body.password)) {
          res.cookie('username', user.username);
          res.status(200).send(user.toJSON());
        } else {
          res.status(403).send({
            message:
              "The email address you provided already exists, but the password doesn't match. Please try again.",
          });
        }
      } else {
        const newUser = new User({
          username: req.body.email,
          password: req.body.password,
        });
        newUser.save();

        res.cookie('username', newUser.username);
        res.status(200).send(newUser.toJSON());
      }
    });
  });

  return router;
};
