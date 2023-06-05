import React, { useEffect, useState, useMemo } from 'react';
import { Transaction } from '../Transaction/Transaction';
import { addTokenToRequestHeader } from '../../../helpers/addTokenToRequestHeader';
import axios from 'axios';

let endpoints = ['http://localhost:8080/api/expenses', 'http://localhost:8080/api/incomes'];

export const TransactionList = () => {
  const [incomesData, setIncomesData] = useState([]);
  const [expensesData, setExpensesData] = useState([]);

  useEffect(() => {
    const headers = addTokenToRequestHeader();

    const fetchData = async () => {
      try {
        const dataPromises = endpoints.map(async (endpoint) => {
          const response = await axios.get(endpoint, { headers });
          return response.data;
        });

        const responseData = await Promise.all(dataPromises);
        setExpensesData(responseData[0]);
        setIncomesData(responseData[1]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const mergedData = useMemo(() => {
    let transformedExpenses = expensesData.map((expense) => {
      return {
        amount: -expense.amount,
        title: expense.category,
        date: expense.date,
      };
    });

    let transformedIncomes = incomesData.map((income) => {
      return {
        amount: income.amount,
        title: income.title,
        date: income.date,
      };
    });

    const merged = [...transformedIncomes, ...transformedExpenses];
    return merged.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [incomesData, expensesData]);

  if (incomesData.length === 0 && expensesData.length === 0) {
    return (
      <div className="flex h-2/6 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
        <div className="overflow-scroll text-center text-xl font-semibold text-gray-400">Transactions</div>
        <div className="flex h-full w-full items-center justify-center overflow-scroll px-10">
          <div className="text-6xl font-bold text-violet-800/20">No data</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-2/6 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
      <div className="overflow-scroll text-center text-xl font-semibold text-gray-400">Transactions</div>
      <div className="h-full w-full overflow-scroll px-10">
        {mergedData.map((transaction, index) => (
          <div key={index} className="mt-4 flex w-full items-center gap-4">
            <Transaction title={transaction.title} date={transaction.date} amount={transaction.amount} isIncome={transaction.amount >= 0} />
          </div>
        ))}
      </div>
    </div>
  );
};
