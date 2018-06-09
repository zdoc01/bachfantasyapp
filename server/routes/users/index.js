import express from 'express';

/**
 * @route /api/users
 * @return {express.Router} The router instance
 */
export default () => {
  const router = express.Router();

  /**
   * @GET /users
   *
   * @param  {[type]} req   [description]
   * @param  {[type]} res   [description]
   * @return {[type]}       [description]
   */
  router.get('/', (req, res) => {
    res.status(200).send({ users: ['Zach', 'Sarah'] });
  });

  return router;
};
