const router = require('express').Router();
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }

    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    const userId = decoded.userId;

    console.log(userId);

    const userData = await getUserData(userId);

    res.json(userData);
  } catch (error) {
    console.log('Error fetching user data: ', error);
    return res.status(500).json({ message: 'Error fetching user data' });
  }
});

async function getUserData(userId) {
  try {
    const user = await User.findOne({ _id: userId });
    return user;
  } catch (error) {
    console.log('Error fetching user data: ', error);
    throw error;
  }
}

module.exports = router;
