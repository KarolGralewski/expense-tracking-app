const router = require('express').Router();
const addUserService = require('./../services/addUserService');

router.post('/', async (req, res) => {
  await addUserService(req, res);
});

module.exports = router;
