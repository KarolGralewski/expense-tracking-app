const router = require('express').Router();
const verifyToken = require('./../middlewares/verifyToken');
const addUserExpenseService = require('../services/addUserExpenseService');
const getUserExpensesService = require('./../services/getUserExpensesService');

router.post('/', verifyToken, async (req, res) => {
  await addUserExpenseService(req, res);
});

router.get('/', verifyToken, async (req, res) => {
  await getUserExpensesService(req, res);
});

module.exports = router;
