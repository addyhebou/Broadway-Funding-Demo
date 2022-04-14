import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { budget } from '../constants/budget';
import { GlobalContext } from '../context/GlobalState';
import '../styles/RangeInput.scss';
import '../styles/Options.scss';

export default function Options() {
  const { userInputs } = useContext(GlobalContext);
  const { updateGlobalNumbers } = useContext(GlobalContext);

  const [shareOfCapital, setShareOfCapital] = useState(0);
  const [shareOfProfit, setShareOfProfit] = useState(0);
  const [investment, setInvestment] = useState(userInputs.investmentAmount);
  const [musicalRevenue, setMusicalRevenue] = useState(
    userInputs.musicalRevenue
  );
  const [points, setPoints] = useState(0.25);

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
    setShareOfCapital(Math.round((investment / budget) * 1000) / 1000);
    setShareOfProfit(shareOfCapital * 0.5);
  };
  const handleMusicalRevenueChange = (e) => {
    setMusicalRevenue(Math.pow(parseInt(e.target.value), 4) + budget);
  };

  const handlePointChange = (e) => {
    setPoints(
      e.target.value === 'basic'
        ? 0.25
        : e.target.value === 'premium'
        ? 0.33
        : 0.5
    );
  };
  useEffect(() => {
    updateGlobalNumbers('investmentAmount', investment);
    updateGlobalNumbers('musicalRevenue', musicalRevenue);
    updateGlobalNumbers('points', points);
    console.log(budget);
  }, [investment, musicalRevenue, points]);

  return (
    <div>
      <h2>Share of Capital (how much you’d invest)</h2>
      <h1>${investment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h1>
      <input type="range" onChange={handleInvestmentChange} max={budget} />
      <p>
        Your Share of Capital is {shareOfCapital} ( Your investment amount /
        budget) <br />= {investment} / {budget} <br />= {shareOfCapital}
      </p>
      <p>
        Your Share of Profit is {shareOfProfit} ( Your share of capital * 50%
        split)
        <br />= {shareOfCapital} * 0.5 <br />= {shareOfProfit}
      </p>
      <h2>Musical Total Revenue</h2>
      <p>
        Slide this amount to adjust possibly calculated revenues from the
        musical
      </p>
      <h1>
        ${musicalRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h1>
      <input type="range" onChange={handleMusicalRevenueChange} />
      <div className="layout">
        <div>
          <h2>Investment Package</h2>
          <p>
            Note: Different packages require different minimum investment
            amounts
          </p>
          <form>
            <div>
              <input
                type="radio"
                id="basic"
                name="drone"
                value="basic"
                onClick={handlePointChange}
              />
              <label for="basic">Basic Investor</label>
            </div>
            <div>
              <input
                type="radio"
                id="premium"
                name="drone"
                value="premium"
                onClick={handlePointChange}
              />
              <label for="basic">Premium Investor</label>
            </div>
            <div>
              <input
                type="radio"
                id="deluxe"
                name="drone"
                value="deluxe"
                onClick={handlePointChange}
              />
              <label for="basic">Deluxe Investor</label>
            </div>
          </form>
        </div>
        <div className="points">
          <strong>Your Point Deal</strong>
          <h1>
            1 for {Math.round(1 / points)} = {points}
          </h1>
          <p>
            For every {Math.round(1 / points)} shares, you receive an additional
            share
          </p>
        </div>
      </div>
    </div>
  );
}
