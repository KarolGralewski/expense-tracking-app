const mongoose = require('mongoose');

const expenseCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

const expenseCategory = mongoose.model('expenseCategory', expenseCategorySchema);

module.exports = expenseCategory;
