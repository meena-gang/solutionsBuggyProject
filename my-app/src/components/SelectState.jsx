import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectState() {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (state) navigate('/select-reason');
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
        <h1 className="text-xl font-semibold mb-4 text-tertiary">Select your Location</h1>
        <div className="flex flex-col gap-5  bg-location bg-cover bg-center bg-tertiary p-14 rounded-2xl sm:w-[360px] w-full">
        <h2 className="text-xl font-semibold mb-4 text-white">Location</h2>
        <select onChange={(e) => setState(e.target.value)} value={state} className="w-full p-2 border border-gray-300 rounded">
            <option value="">Select your State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            {/* Add more states as needed */}
        </select>
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-orange text-white rounded hover:bg-orange">Want to Explore New Geographics >></button>
        </div>
    </div>
  );
}

export default SelectState;
