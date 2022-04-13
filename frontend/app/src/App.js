import './App.css';
import { useEffect, useContext } from 'react';
import { budget } from './constants/budget';
import Options from './components/Options';
import Results from './components/Results';
import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { userInputs } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="App">
        <h1>Get your investment profit, perks, and benefits</h1>
        <h2>
          Our current budget is $
          {budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </h2>
        <div>
          <Options />
          <Results />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
