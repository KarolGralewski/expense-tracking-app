const router = require('express').Router();
const verifyTokenMiddleware = require('./../middlewares/verifyToken');

const getUserDataService = require('./../services/getUserDataService');

router.get('/', verifyTokenMiddleware, async (req, res) => {
  getUserDataService(req, res);
});

module.exports = router;
