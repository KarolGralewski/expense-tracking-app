import React from 'react';
import { useState } from 'react';
import { ExpenseCategorySelect } from '../../molecules/ExpenseCategorySelect/ExpenseCategorySelect';
import { TransactionTypeSelect } from '../../molecules/TransactionTypeSelect/TransactionTypeSelect';
import { TransactionAmountInput } from '../../molecules/TransactionAmountInput/TransactionAmountInput';
import { IncomeTitleInput } from '../../molecules/IncomeTitleInput/IncomeTitleInput';

export const ModalContent = () => {
  const [transactionType, setTransactionType] = useState('Income');
  const [incomeTitle, setIncomeTitle] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('Entertainment');
  const [transactionAmount, setTransactionAmount] = useState();

  const handleTransactionChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleIncomeTitleChange = (e) => {
    setIncomeTitle(e.target.value);
  };

  const handleExpenseCategoryChange = (e) => {
    setExpenseCategory(e.target.value);
  };

  const handleTransactionAmountChange = (e) => {
    setTransactionAmount(e.target.value);
  };

  const handleConfirm = (e) => {
    console.log(transactionType, incomeTitle, expenseCategory, transactionAmount);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-6 text-2xl font-semibold text-gray-300">Add data</h1>
      <TransactionTypeSelect onChange={handleTransactionChange} />
      {transactionType == 'Income' ? <IncomeTitleInput onChange={handleIncomeTitleChange} /> : <ExpenseCategorySelect onChange={handleExpenseCategoryChange} />}
      <TransactionAmountInput onChange={handleTransactionAmountChange} />
      <label for="my-modal-5" className=" btn-outline btn mb-4 border border-purple-500 text-gray-300 hover:border-purple-500 hover:bg-purple-500 hover:text-gray-50" onClick={handleConfirm}>
        Add Transaction
      </label>
    </div>
  );
};
