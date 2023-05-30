const Income = require('../models/income');
const { User } = require('../models/user');
const NetBalance = require('../models/netBalance');

module.exports = async (req, res) => {
  try {
    const { amount, title } = req.body;

    const income = new Income({
      amount: amount,
      title: title,
      date: new Date(),
      user: req.decoded,
    });

    const savedIncome = await income.save();

    const lastNetBalance = await NetBalance.findOne({ user: req.decoded }).sort({ date: -1 });
    let updatedNetBalance = amount;

    if (lastNetBalance) {
      updatedNetBalance = parseFloat(lastNetBalance.amount) + parseFloat(amount);
    }

    const netBalance = new NetBalance({
      user: req.decoded,
      amount: updatedNetBalance,
    });

    const savedNetBalance = await netBalance.save();

    const user = await User.findOne({ _id: req.decoded });

    user.netBalance.push(savedNetBalance);
    await netBalance.save();
    await user.save();

    res.status(201).json(savedIncome);
  } catch (error) {
    console.error('Error adding income:', error);
    res.status(500).json({ message: 'Failed to add income' });
  }
};
