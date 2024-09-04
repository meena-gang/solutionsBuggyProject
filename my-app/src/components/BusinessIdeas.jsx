import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import {  useState } from 'react';

const BusinessIdeas = () => {
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterClick = () => {
      setShowFilters(!showFilters);
    };
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleETBClick = () => {
    console.log('etb')
    navigate('/easy-to-buy'); // Use navigate to route to the Easy to Buy page
  };

  const handleSBExpertClick = () => {
    navigate('/lets-connect'); // Use navigate to route to the Let's Connect page
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-tertiary">Business Ideas</h1>
      
      <div className="flex flex-col gap-5  bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full">
      <div className="flex space-x-2">
      <button
        onClick={handleFilterClick}
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-tertiary"
      >
        Filters
      </button>
      {showFilters && (
        <>
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-green-600">
            Budget
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-red-600">
            Location
          </button>
        </>
      )}
    </div>
        <div className="card">
          <div className="bg-idea bg-cover bg-center h-20"></div>
          <h3 className="text-md font-bold mb-2 text-white">Cold Pressed Juice Manufacturing</h3>
          <p className='text-white'>
            Boost your brand with our nutrient cold pressed juices,crafted using advanced technologies for maximum freshness and health benefits.
            Attract  health concious consumers with our high-quality juices.<br/><span className='text-orange'>Read more...</span>
          </p>
          <div className='flex justify-between'>
            <button 
                onClick={handleSBExpertClick} 
                className="mt-2 bg-tertiary border-2 border-orange text-orange py-1 px-8 rounded"
            >
                SB Expert
            </button>
            <button 
                onClick={handleETBClick} 
                className="mt-2 bg-orange text-white py-1 px-8 rounded"
            >
                ETB
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BusinessIdeas;
