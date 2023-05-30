const router = require('express').Router();
const authenticationService = require('./../services/authenticationService');

router.post('/', async (req, res) => {
  await authenticationService(req, res);
});

module.exports = router;
