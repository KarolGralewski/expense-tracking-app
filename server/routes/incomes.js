const router = require('express').Router();
const verifyTokenMiddleware = require('./../middlewares/verifyToken');
const addUserIncomeService = require('../services/addUserIncomeService');
const getUserIncomesService = require('./../services/getUserExpensesService');

router.post('/', verifyTokenMiddleware, async (req, res) => {
  await addUserIncomeService(req, res);
});

router.get('/', verifyTokenMiddleware, async (req, res) => {
  await getUserIncomesService(req, res);
});

module.exports = router;
