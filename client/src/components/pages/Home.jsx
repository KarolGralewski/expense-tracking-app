import React from 'react';
import { SpendingsChart } from '../atoms/SpendingsChart/SpendingsChart';
import { NetBalanceChart } from '../atoms/NetBalanceChart/NetBalanceChart';
import { NavigationBar } from '../organisms/NavigationBar/NavigationBar';
import { NetBalanceText } from '../atoms/NetBalanceText/NetBalanceText';
import { TransactionList } from '../organisms/TransactionList/TransactionList';

export const Home = () => {
  return (
    <div className="  h-screen bg-gray-950 px-6 ">
      <NavigationBar />

      <div className=" flex flex-col justify-between gap-5 pb-5  md:h-[calc(100%-7rem)]  md:flex-row">
        <div className=" flex w-full flex-col gap-5">
          <div className=" flex h-1/4 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Net Balance</div>
            <div className="flex h-full items-center items-center">
              <div className=" flex bg-clip-text text-6xl font-bold text-violet-600">
                <NetBalanceText />
              </div>
            </div>
          </div>
          <div className="  flex h-3/4 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Spendings</div>
            <div className="flex h-full items-center items-center">
              <SpendingsChart />
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-5 text-white">
          <div className=" flex h-4/6 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Cashflow</div>
            <div className="flex h-full items-center items-center">
              <NetBalanceChart />
            </div>
          </div>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};
