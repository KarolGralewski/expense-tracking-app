const Expense = require('../models/expense');

module.exports = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.decoded });
    res.json(expenses);
  } catch (error) {
    console.error('Error retrieving expenses:', error);
    res.status(500).json({ message: 'Failed to retrieve expenses' });
  }
};
