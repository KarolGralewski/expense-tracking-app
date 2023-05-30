const router = require('express').Router();
const Income = require('../models/income');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

// async function addIncome(userId, amount) {
//   const user = await User.findOne({ _id: userId });
//   user.netBalance += amount;
//   await user.save();
// }

router.post('/', async (req, res) => {
  try {
    const { amount } = req.body;

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    const income = new Income({
      amount: amount,
      date: new Date(),
      user: decoded,
    });

    const savedIncome = await income.save();
    res.status(201).json(savedIncome);

    // addIncome(decoded, amount);
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
