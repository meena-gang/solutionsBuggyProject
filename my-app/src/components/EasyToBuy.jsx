
const EasyToBuy = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-xl font-semibold mb-4 text-tertiary">Easy to Buy</h1>
      <div className="flex justify-center items-center flex-col gap-5 bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="m-* text-center w-60">
          <h3 className="text-md font-bold mb-2 text-white text-base">Webinar Summit</h3>
          <p className='text-white leading-5 text-sm'>
            Lorem ipsum dolor sit amet, consecutor adipscing elit
          </p>
          <hr className ='relative top-3' />
        </div>
        <div className="m-* text-center w-60">
          <h3 className="text-md font-bold mb-2 text-white text-base">Toolkit Description</h3>
          <p className='text-white leading-5 text-sm'>
            Lorem ipsum dolor sit amet, consecutor adipscing elit
          </p>
          <hr className ='relative top-3' />
        </div>
        <div className="m-* text-center w-60">
          <h3 className="text-md font-bold mb-2 text-white text-base">SB Expert Session Description</h3>
          <p className='text-white leading-5 text-sm'>
            Lorem ipsum dolor sit amet, consecutor adipscing elit
          </p> 
        </div>
        <p className='text-white-100 leading-3'>
            Select Slot
        </p>
        <div className='flex justify-between'>
            <button 
                className=" bg-white border-2 border-orange text-orange  px-6 rounded"
            >
                June 07,2024
            </button>
            <button 
                className=" bg-white border-2 border-orange text-orange  px-6 rounded ml-2"
            >
               June 09,2024
            </button>
        </div>
        <hr className="w-7/12"/>
        <p className='text-white-100 leading-3'>
            Download Idea Kit
        </p>
        <button 
          className=" bg-white border-2 border-orange text-orange py-2 px-9 rounded"
        >
          <input type="radio" className="mr-1 ml-2"></input>
          Select Industry rs.259/-
        </button>
        <button 
           
          className=" bg-white border-2 border-orange text-orange py-2 px-12 rounded ml-2"
        >
          <input type="radio" className="mr-1"></input>
          All Industries rs.475 /-
        </button>
        <button 
          className="mt-2 bg-orange text-white py-2 px-8 font-semibold rounded"
        >
          Rerserve Now!
        </button>
        

      </div>
    </div>
  );
};

export default EasyToBuy;
