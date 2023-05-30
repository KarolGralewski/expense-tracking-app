const router = require('express').Router();
const verifyTokenMiddleware = require('./../middlewares/verifyToken');
const addUserExpenseService = require('../services/addUserExpenseService');
const getUserExpensesService = require('./../services/getUserExpensesService');

router.post('/', verifyTokenMiddleware, async (req, res) => {
  await addUserExpenseService(req, res);
});

router.get('/', verifyTokenMiddleware, async (req, res) => {
  await getUserExpensesService(req, res);
});

module.exports = router;
