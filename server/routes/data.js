const router = require('express').Router();
const updateUserEmailService = require('../services/updateUserEmailService');
const verifyToken = require('./../middlewares/verifyToken');
const getUserDataService = require('./../services/getUserDataService');
const deleteUserTransactions = require('../services/deleteUserTransactions');

router.get('/', verifyToken, async (req, res) => {
  getUserDataService(req, res);
});

router.post('/updateEmail', verifyToken, async (req, res) => {
  updateUserEmailService(req, res);
});

router.get('/clearData', verifyToken, async (req, res) => {
  deleteUserTransactions(req, res);
});

module.exports = router;
