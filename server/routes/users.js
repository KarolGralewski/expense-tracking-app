const router = require('express').Router();
const deleteUserService = require('../services/deleteUserService');
const verifyToken = require('./../middlewares/verifyToken');
const addUserService = require('./../services/addUserService');

router.post('/', async (req, res) => {
  await addUserService(req, res);
});

router.delete('/delete', verifyToken, async (req, res) => {
  await deleteUserService(req, res);
});

module.exports = router;
