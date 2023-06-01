import React from 'react';
import axios from 'axios';
import { RoundChart } from '../atoms/RoundChart/RoundChart';
import { NetBalanceChart } from '../atoms/NetBalanceChart/NetBalanceChart';
import { TransactionContainer } from '../organisms/TransactionContainer/TransactionContainer';
import { NavigationBar } from '../organisms/NavigationBar/NavigationBar';

export const Home = () => {
  return (
    <div className="  h-screen bg-gray-950 px-6 ">
      {/* navbar */}
      <NavigationBar />

      <div className=" flex flex-col justify-between gap-5 pb-5  md:h-[calc(100%-7rem)]  md:flex-row">
        <div className=" flex w-full flex-col gap-5">
          <div className=" flex h-1/4 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Net Balance</div>
            <div className="flex h-full items-center items-center">
              <div id="netBalance" className=" bg-clip-text text-6xl font-bold text-violet-600">
                <span className=" text-xl font-bold text-violet-600">$</span>
                1249
              </div>
            </div>
          </div>
          <div className="  flex h-3/4 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="text-center text-xl font-semibold text-gray-400">Spendings</div>
            <div className="flex h-full items-center items-center">
              <RoundChart />
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
          <div className=" flex  h-2/6 flex-col items-center justify-start rounded-xl bg-gray-900 py-5">
            <div className="overflow-scroll text-center text-xl font-semibold text-gray-400">Transactions</div>
            <div className="h-full w-full overflow-scroll px-10">
              <div className="mt-5 flex w-full items-center gap-4">
                <TransactionContainer title="Pay day" date="24 March 2023" amount={21} isIncome />
                <TransactionContainer title="Pay day" date="24 March 2023" amount={21} isIncome />

                {/* <div className="text-6xl font-bold text-gray-800/40">{data.netBalance ? 'No Data' : '<p>sad</p>'}</div> */}
              </div>
              <div className="mt-5 flex w-full items-center gap-4">
                <TransactionContainer title="Pay day" date="24 March 2023" amount={21} isIncome />
                <TransactionContainer title="Pay day" date="24 March 2023" amount={21} isIncome />

                {/* <div className="text-6xl font-bold text-gray-800/40">{data.netBalance ? 'No Data' : '<p>sad</p>'}</div> */}
              </div>
              <div className="mt-5 flex w-full items-center gap-4">
                <TransactionContainer title="Pay day" date="24 March 2023" amount={21} isIncome />
                <TransactionContainer title="Pay day" date="24 March 2023" amount={21} isIncome />

                {/* <div className="text-6xl font-bold text-gray-800/40">{data.netBalance ? 'No Data' : '<p>sad</p>'}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
