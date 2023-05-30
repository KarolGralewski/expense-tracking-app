const router = require('express').Router();
const verifyTokenMiddleware = require('./../middlewares/verifyToken');
const addUserExpensesService = require('../services/addUserExpensesService');
const getUserExpensesService = require('./../services/getUserExpensesService');

router.post('/', verifyTokenMiddleware, async (req, res) => {
  await addUserExpensesService(req, res);
});

router.get('/', verifyTokenMiddleware, async (req, res) => {
  await getUserExpensesService(req, res);
});

module.exports = router;
