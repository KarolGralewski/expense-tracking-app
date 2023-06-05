const router = require('express').Router();
const deleteUserService = require('../services/deleteUserService');
const verifyTokenMiddleware = require('./../middlewares/verifyToken');
const addUserService = require('./../services/addUserService');

router.post('/', async (req, res) => {
  await addUserService(req, res);
});

router.delete('/delete', verifyTokenMiddleware, async (req, res) => {
  await deleteUserService(req, res);
});

module.exports = router;
