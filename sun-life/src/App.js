import './App.css';
import InvestmentTips from './components/investmentTips'
import InvestmentGoals from './components/investmentGoals'
import Foooter from './components/foooter'


function App() {
  return (
    <div className="App">
      <div>
        <InvestmentTips />
        <InvestmentGoals />
        <Foooter />
      </div>
    </div>
  );
}

export default App;
