import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectBudget from './components/SelectBudget';
import SelectState from './components/SelectState';
import SelectReason from './components/SelectReason';
import BusinessIdeas from './components/BusinessIdeas';
import EasyToBuy from './components/EasyToBuy';
import LetsConnect from './components/LetsConnect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectBudget />} />
        <Route path="/select-state" element={<SelectState />} />
        <Route path="/select-reason" element={<SelectReason />} />
        <Route path="/business-idea" element={<BusinessIdeas />} />
        <Route path="/easy-to-buy" element={<EasyToBuy />} />
        <Route path="/lets-connect" element={<LetsConnect />} />
      </Routes>
    </Router>
  );
}

export default App;
