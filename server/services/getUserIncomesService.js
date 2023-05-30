const Income = require('../models/income');
const { User } = require('../models/user');

module.exports = async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.decoded });
    res.json(incomes);
  } catch (error) {
    console.error('Error retrieving incomes:', error);
    res.status(500).json({ message: 'Failed to retrieve incomes' });
  }
};
