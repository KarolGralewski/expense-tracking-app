const router = require('express').Router();
const Expense = require('../models/expense');
const NetBalance = require('../models/netBalance');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    const { amount, category } = req.body;

    const expense = new Expense({
      amount: amount,
      category: category,
      date: new Date(),
      user: decoded,
    });

    const savedExpense = await expense.save();

    // Add new NetBalance for transaction
    const lastNetBalance = await NetBalance.findOne({ user: decoded }).sort({ date: -1 });
    let updatedNetBalance = amount;

    if (lastNetBalance) {
      updatedNetBalance = parseFloat(lastNetBalance.amount) + parseFloat(amount);
    }

    const netBalance = new NetBalance({
      user: decoded,
      amount: updatedNetBalance,
    });

    const savedNetBalance = await netBalance.save();

    const user = await User.findOne({ _id: decoded });

    console.log(user);
    user.netBalance.push(savedNetBalance);
    await netBalance.save();
    await user.save();

    res.status(201).json(savedExpense);
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

    const expenses = await Expense.find({ _id: decoded });
    res.json(expenses);
  } catch (error) {
    console.error('Error retrieving expenses:', error);
    res.status(500).json({ message: 'Failed to retrieve expenses' });
  }
});

module.exports = router;
