const mongoose = require('mongoose');

const netBalanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const NetBalance = mongoose.model('NetBalance', netBalanceSchema); // Changed model name to 'NetBalance'

module.exports = NetBalance;
