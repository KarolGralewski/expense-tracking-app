const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

async function getUserData(userId) {
  try {
    const user = await User.findOne({ _id: userId });
    return user;
  } catch (error) {
    console.log('Error fetching user data: ', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  try {
    const userData = await getUserData(req.decoded);
    res.json(userData);
  } catch (error) {
    console.log('Error fetching user data: ', error);
    return res.status(500).json({ message: 'Error fetching user data' });
  }
};
