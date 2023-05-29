const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'expenseCategory', required: true },
  date: { type: Date, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
