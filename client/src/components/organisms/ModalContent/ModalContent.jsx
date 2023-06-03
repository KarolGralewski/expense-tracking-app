import React, { useEffect, useState } from 'react';
import { ExpenseCategorySelect } from '../../molecules/ExpenseCategorySelect/ExpenseCategorySelect';
import { TransactionTypeSelect } from '../../molecules/TransactionTypeSelect/TransactionTypeSelect';
import { TransactionAmountInput } from '../../molecules/TransactionAmountInput/TransactionAmountInput';
import { IncomeTitleInput } from '../../molecules/IncomeTitleInput/IncomeTitleInput';
import { addTokenToRequestHeader } from '../../../helpers/addTokenToRequestHeader';
import axios from 'axios';

export const ModalContent = () => {
  const [isIncome, setIsIncome] = useState(true);
  const [incomeTitle, setIncomeTitle] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('Entertainment');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [titleEntered, setTitleEntered] = useState(false);
  const [amountEntered, setAmountEntered] = useState(false);

  useEffect(() => {
    const isExpenseEmpty = isIncome ? false : !amountEntered;
    const isIncomeEmpty = !isIncome ? false : !(titleEntered && amountEntered);
    setButtonDisabled(isExpenseEmpty || isIncomeEmpty);
  }, [isIncome, titleEntered, amountEntered]);

  const handleTransactionTypeChange = (e) => {
    setIsIncome(e.target.value === 'Income');
  };

  const handleIncomeTitleChange = (e) => {
    const title = e.target.value;
    setIncomeTitle(title);
    setTitleEntered(title !== '');
  };

  const handleExpenseCategoryChange = (e) => {
    const category = e.target.value;
    setExpenseCategory(category);
  };

  const handleTransactionAmountChange = (e) => {
    const amount = e.target.value;
    setTransactionAmount(amount);
    setAmountEntered(amount !== '');
  };

  const handleConfirm = async (e) => {
    const headers = addTokenToRequestHeader();

    console.log('Test', headers);

    const income = {
      title: incomeTitle,
      amount: transactionAmount,
      headers: { headers },
    };

    const expense = {
      category: expenseCategory,
      amount: transactionAmount,
      headers: { headers },
    };

    try {
      if (isIncome) {
        const response = await axios.post('http://localhost:8080/api/incomes', income, { headers });
        console.log(response.data);
      } else {
        const response = await axios.post('http://localhost:8080/api/expenses', expense, { headers });
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-6 text-xl font-semibold text-gray-300">Add new transaction</h1>
      <TransactionTypeSelect onChange={handleTransactionTypeChange} />
      {isIncome ? <IncomeTitleInput onChange={handleIncomeTitleChange} /> : <ExpenseCategorySelect onChange={handleExpenseCategoryChange} />}
      <TransactionAmountInput onChange={handleTransactionAmountChange} />
      <label htmlFor="my-modal-5" disabled={buttonDisabled} className="btn-outline btn mb-4 border-2 border-violet-500 text-gray-300 hover:border-violet-500 hover:bg-violet-500 hover:text-gray-50" onClick={handleConfirm}>
        Add Transaction
      </label>
    </div>
  );
};
