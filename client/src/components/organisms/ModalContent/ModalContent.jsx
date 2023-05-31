import React from 'react';
import { useState } from 'react';
import { ExpenseCategorySelect } from '../../molecules/ExpenseCategorySelect/ExpenseCategorySelect';
import { TransactionTypeSelect } from '../../molecules/TransactionTypeSelect/TransactionTypeSelect';
import { TransactionAmountInput } from '../../molecules/TransactionAmountInput/TransactionAmountInput';
import { IncomeTitleInput } from '../../molecules/IncomeTitleInput/IncomeTitleInput';

export const ModalContent = () => {
  const [transactionType, setTransactionType] = useState('Income');

  const handleTransactionChange = (e) => {
    setTransactionType(e.target.value);
  };

  return (
    <>
      <h1 className="mb-6 text-xl font-semibold text-gray-300">Add data</h1>
      <TransactionTypeSelect onChange={handleTransactionChange} />
      {transactionType == 'Income' ? <IncomeTitleInput /> : <ExpenseCategorySelect />}
      <TransactionAmountInput />
    </>
  );
};
