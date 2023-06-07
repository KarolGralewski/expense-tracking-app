const router = require('express').Router();
const verifyToken = require('./../middlewares/verifyToken');
const addUserIncomeService = require('../services/addUserIncomeService');
const getUserIncomesService = require('./../services/getUserIncomesService');

router.post('/', verifyToken, async (req, res) => {
  await addUserIncomeService(req, res);
});

router.get('/', verifyToken, async (req, res) => {
  await getUserIncomesService(req, res);
});

module.exports = router;
