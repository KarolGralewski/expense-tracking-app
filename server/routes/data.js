const router = require('express').Router();
const updateUserEmailService = require('../services/updateUserEmailService');
const verifyTokenMiddleware = require('./../middlewares/verifyToken');
const { User } = require('../models/user');
const Expense = require('../models/expense');
const Income = require('../models/income');

const getUserDataService = require('./../services/getUserDataService');
const deleteUserTransactions = require('../services/deleteUserTransactions');

router.get('/', verifyTokenMiddleware, async (req, res) => {
  getUserDataService(req, res);
});

router.post('/updateEmail', verifyTokenMiddleware, async (req, res) => {
  updateUserEmailService(req, res);
});

router.get('/clearData', verifyTokenMiddleware, async (req, res) => {
  deleteUserTransactions(req, res);
});

module.exports = router;
