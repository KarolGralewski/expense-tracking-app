const router = require('express').Router();
const Expense = require('../models/expense');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

// async function addExpense(userId, amount) {
//   const user = await User.findOne({ _id: userId });
//   user.netBalance -= amount;
//   await user.save();
// }

router.post('/', async (req, res) => {
  try {
    const { amount, category } = req.body;
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    const expense = new Expense({
      amount: amount,
      category: category,
      date: new Date(),
      user: decoded,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);

    // addExpense(decoded, amount);
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ message: 'Failed to add expense' });
  }
});

router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    const expenses = await Expense.find({ user: decoded });
    res.json(expenses);
  } catch (error) {
    console.error('Error retrieving expenses:', error);
    res.status(500).json({ message: 'Failed to retrieve expenses' });
  }
});

module.exports = router;
