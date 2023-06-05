import React, { useEffect, useState, useRef } from 'react';
import { addTokenToRequestHeader } from '../../../helpers/addTokenToRequestHeader';
import { animateNumberIncrease } from '../../../helpers/animateNumberIncrease';
import axios from 'axios';

export const NetBalanceText = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [netBalance, setNetBalance] = useState(null);

  const netBalanceElementRef = useRef(null);

  useEffect(() => {
    const headers = addTokenToRequestHeader();

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.netBalance && data.netBalance.length > 0) {
      const lastNetBalance = data.netBalance[data.netBalance.length - 1].amount;
      setNetBalance(lastNetBalance);
    }
  }, [data]);

  useEffect(() => {
    if (netBalanceElementRef.current && netBalance !== null) {
      animateNumberIncrease(netBalanceElementRef.current, 0, netBalance, 1800);
    }
  }, [netBalance]);

  if (isLoading) {
    return (
      <div className="text-6xl font-bold text-gray-800/40">
        <span className="loading-spinner loading text-primary"></span>
        Loading data...
      </div>
    );
  }

  if (data.netBalance.length === 0) {
    return <div className="text-6xl font-bold text-violet-800/20">No data</div>;
  } else {
    return (
      <>
        <span className="mt-7 text-xl font-bold text-violet-700">$</span>

        <div ref={netBalanceElementRef} id="netBalance">
          {netBalance}
        </div>
      </>
    );
  }
};
