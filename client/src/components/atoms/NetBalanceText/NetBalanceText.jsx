import React, { useEffect, useState } from 'react';
import { addTokenToRequestHeader } from '../../helpers/addTokenToRequestHeader';
import { animateNumberIncrease } from '../../helpers/animateNumberIncrease';
import axios from 'axios';

export const NetBalanceText = () => {
  const [data, setData] = useState(null);
  const [netBalance, setNetBalance] = useState(null);

  useEffect(() => {
    const headers = addTokenToRequestHeader();

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/data', { headers });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // const intervalId = setInterval(fetchData, 50);

    // return () => {
    //   clearInterval(intervalId); // Clean up the interval when the component is unmounted
    // };
  }, []);

  useEffect(() => {
    if (data && data.netBalance && data.netBalance.length > 0) {
      const lastNetBalance = data.netBalance[data.netBalance.length - 1].amount;
      setNetBalance(lastNetBalance);
    }
  }, [data]);

  if (data === null) {
    return <div className="text-6xl font-bold text-gray-800/40">No data</div>;
  }

  const netBalanceElement = document.getElementById('netBalance');
  animateNumberIncrease(netBalanceElement, 0, netBalance, 1550);

  return <div id="netBalance">{netBalance}</div>;
};
