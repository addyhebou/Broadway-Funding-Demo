import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { budget } from '../constants/budget';
import { GlobalContext } from '../context/GlobalState';
import { calculator } from '../services/calculator';
import '../styles/Result.scss';

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
    setBonus(final.Bonus);
  });

  const addCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  let shareOfProfit = (userInputs.investmentAmount / budget) * 0.5;
  shareOfProfit = Math.round(shareOfProfit * 1000) / 1000;
  return (
    <div className="resultBox">
      <p>Your total revenue will be</p>
      <h1>${addCommas(Math.round((totalRevenue * 1000) / 1000))}</h1>
      <div className="additionalData">
        <div>
          <strong>Base Profit</strong>
          <p>Total revenue x Share of Profit</p>
          <p>
            ${addCommas(Math.round(userInputs.musicalRevenue))} x{' '}
            {shareOfProfit}
          </p>
          <strong>${addCommas(Math.round(baseProfit))}</strong>
        </div>
        <div>
          <strong>Bonus Profit</strong>
          <p>Total revenue x Share of Profit x Point Deal</p>
          <p>
            ${addCommas(Math.round(userInputs.musicalRevenue))} x{' '}
            {shareOfProfit} x {userInputs.points}
          </p>
          <strong>${addCommas(Math.round(bonus))}</strong>
        </div>
      </div>
    </div>
  );
}
