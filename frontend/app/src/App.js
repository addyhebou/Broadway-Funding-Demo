import './styles/App.scss';
import { useEffect, useContext } from 'react';
import { budget } from './constants/budget';
import Options from './components/Options';
import Results from './components/Results';
import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';
import Navbar from './components/Navbar';

function App() {
  const { userInputs } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Get your investment profit, perks, and benefits</h1>
          <h2>
            Our current budget is $
            {budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h2>
          <div className="content">
            <Options />
            <Results />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
