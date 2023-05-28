const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const loggedInUserId = req.User.email;

    const user = await User.findById(loggedInUserId);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
