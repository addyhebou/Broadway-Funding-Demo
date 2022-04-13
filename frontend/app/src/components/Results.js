import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { budget } from '../constants/budget';
import { GlobalContext } from '../context/GlobalState';
import { calculator } from '../services/calculator';

export default function Results() {
  const { userInputs } = useContext(GlobalContext);
  const { updateGlobalNumbers } = useContext(GlobalContext);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [baseProfit, setBaseProfit] = useState(0);
  const [bonus, setBonus] = useState(0);

  useEffect(() => {
    const final = calculator(
      userInputs.investmentAmount,
      userInputs.musicalRevenue,
      userInputs.points,
      budget
    );
    setTotalRevenue(final.Total);
    setBaseProfit(final.Base);
    setBonus(final.bonus);
  });

  return (
    <div>
      <p>Your total revenue will be</p>
      <h1>
        $
        {Math.round((totalRevenue * 1000) / 1000)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h1>
    </div>
  );
}
