import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectBudget() {
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (budget) navigate('/select-state');
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-tertiary">Select Your Budget</h1>
     
      <div className="flex flex-col gap-5 bg-budget bg-cover bg-center bg-tertiary p-7 rounded-2xl sm:w-[360px] w-full">
        <label className="flex items-center space-x-2">
          <input type="radio" name="budget" value="50lakhs-1Crore" checked={budget === '50lakhs-1crore'} onChange={() => setBudget('50lakhs-1crore')} className="form-radio" />
          <span className='text-white'>50lakhs-1crore</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="budget" value="1Crore-1.5Crores" checked={budget === '1Crore-1.5Crores'} onChange={() => setBudget('1Crore-1.5Crores')} className="form-radio" />
          <span className='text-white'>1Crore-1.5Crores</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="budget" value="1.5Crores-2Crores" checked={budget === '1.5Crores-2Crores'} onChange={() => setBudget('1.5Crores-2Crores')} className="form-radio" />
          <span className='text-white'>1.5Crores-2Crores</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="budget" value="2Crores-3Crores" checked={budget === '2Crores-3Crores'} onChange={() => setBudget('2Crores-3Crores')} className="form-radio" />
          <span className='text-white'>2Crores-3Crores</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="budget" value="3Crores-4Crores" checked={budget === '3Crores-4Crores'} onChange={() => setBudget('3Crores-4Crores')} className="form-radio" />
          <span className='text-white'>3Crores-4Crores</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="budget" value="Above 5 Crores" checked={budget === 'Above 5 Crores'} onChange={() => setBudget('Above 5 Crores')} className="form-radio" />
          <span className='text-white'>Above 5 Crores</span>
        </label>
      </div>
      
      <button onClick={handleSubmit} className="mt-4 px-6 py-2 bg-orange text-white rounded hover:bg-tertiary">Next</button>
    </div>
  );
}

export default SelectBudget;
