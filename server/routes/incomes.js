const router = require('express').Router();
const Income = require('../models/income');
const { User } = require('../models/user');
const NetBalance = require('../models/netBalance');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    const { amount, title } = req.body;

    const income = new Income({
      amount: amount,
      title: title,
      date: new Date(),
      user: decoded,
    });

    const savedIncome = await income.save();

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

    res.status(201).json(savedIncome);
  } catch (error) {
    console.error('Error adding income:', error);
    res.status(500).json({ message: 'Failed to add income' });
  }
});

router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    const incomes = await Income.find({ user: decoded });
    res.json(incomes);
  } catch (error) {
    console.error('Error retrieving incomes:', error);
    res.status(500).json({ message: 'Failed to retrieve incomes' });
  }
});

module.exports = router;
