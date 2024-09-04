import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, 
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Form Submitted:', formData);
  };

  const submitHandler = () => {
    navigate('/easy-to-buy')
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-tertiary">Let's Connect</h1>
      <div className="flex flex-col gap-5 bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80 mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number:</label>
            <input 
              type="tel" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button 
            type="submit" 
            onClick={submitHandler}
            className="w-full bg-orange text-white py-2 px-8 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LetsConnect;
