const Expense = require('../models/expense');
const NetBalance = require('../models/netBalance');
const { User } = require('../models/user');

module.exports = async (req, res) => {
  try {
    const { amount, category } = req.body;

    const expense = new Expense({
      amount: amount,
      category: category,
      date: new Date(),
      user: req.decoded,
    });

    const savedExpense = await expense.save();

    // Add new NetBalance for transaction
    const lastNetBalance = await NetBalance.findOne({ user: req.decoded }).sort({ date: -1 });
    let updatedNetBalance = amount;

    if (lastNetBalance) {
      updatedNetBalance = parseFloat(lastNetBalance.amount) - parseFloat(amount);
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

    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ message: 'Failed to add expense' });
  }
};
