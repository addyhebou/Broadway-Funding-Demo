const calculator = (capital, musicalRevenue, points, budget) => {
  console.log('Passed in investment amount: ', capital);
  console.log('Passed in revenue: ', musicalRevenue);
  console.log('Passed in points: ', points);
  const shareOfCapital = capital / budget;
  const shareOfProfit = shareOfCapital * 0.5;
  const baseRevenue = shareOfProfit * musicalRevenue;
  const bonus = musicalRevenue * shareOfProfit * points;
  return {
    Base: baseRevenue,
    Bonus: bonus,
    Total: baseRevenue + bonus,
  };
};

module.exports.calculator = calculator;
