const { User } = require('../models/user');
const Expense = require('../models/expense');
const Income = require('../models/income');

module.exports = async (req, res) => {
  try {
    const userId = req.decoded;

    await Expense.deleteMany({ user: userId });
    await Income.deleteMany({ user: userId });

    const user = await User.findById(userId);
    user.netBalance = [];
    await user.save();

    res.status(200).send({ message: 'Data cleared successfully.' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
    console.log(error);
  }
};
