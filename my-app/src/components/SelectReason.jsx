import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectReason = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const navigate = useNavigate(); 

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  const handleNext = () => {
    if (selectedReason) {
      navigate('/business-idea'); 
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-tertiary">Select the Reason</h1>
      <div className="flex flex-col gap-5 bg-reason bg-cover bg-center bg-tertiary p-12 rounded-2xl sm:w-[360px] w-full">
      <h2 className="text-xl font-semibold mb-4 text-white divide-y divide-blue-200">WHY ?</h2>
        <div className="flex flex-col space-y-2">
          <label className='space-x-2 text-white '>
            <input 
              type="radio" 
              value="Passion-driven" 
              onChange={handleReasonChange} 
            />
            <span>Passion-Driven</span>
          </label>
          <label className='space-x-2 text-white '>
            <input 
              type="radio" 
              value="Financial-gain" 
              onChange={handleReasonChange} 
            />
             <span>Financial Gain</span>
            </label>
           
        </div>
    </div>
       <button 
          onClick={handleNext} 
          className="mt-4 bg-orange text-white py-2 px-10 rounded "
        >
          Submit
        </button>
    </div>
  );
};

export default SelectReason;
