import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookFood() {
  const [selectedMealType, setSelectedMealType] = useState('');
  const [selectfoodtype, setSelectfoodtype] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    setSelectedMealType(event.target.value);
  };

  const handlefoodTypeChange = (event) => {
    setSelectfoodtype(event.target.value);
  };

  const deluxeimage = "https://media-cdn.tripadvisor.com/media/photo-s/0e/9e/e1/af/photo0jpg.jpg";

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Book Food Items</h1>
      <div className='w-full md:max-w-lg'>
        <div className='bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Meal Type:</label>
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center">
                <input id="isveg" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handlefoodTypeChange} value="veg" checked={selectfoodtype === "veg"} />
                <label htmlFor="isveg" className="ml-2 text-gray-700">Veg</label>
              </div>
              <div className="flex items-center md:ml-4">
                <input id="isnonveg" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handlefoodTypeChange} value="nonveg" checked={selectfoodtype === "nonveg"} />
                <label htmlFor="isnonveg" className="ml-2 text-gray-700">Non-veg</label>
              </div>
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Meal Type:</label>
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center">
                <input id="isLunch" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleMealTypeChange} value="lunch" checked={selectedMealType === "lunch"} />
                <label htmlFor="isLunch" className="ml-2 text-gray-700">Lunch</label>
              </div>
              <div className="flex items-center md:ml-4">
                <input id="isDinner" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleMealTypeChange} value="dinner" checked={selectedMealType === "dinner"} />
                <label htmlFor="isDinner" className="ml-2 text-gray-700">Dinner</label>
              </div>
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="foodType">Dish Type:</label>
            <select id="foodType" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' onChange={handleOptionChange}>
              <option value="">Select Option</option>
              <option value="deluxe">Deluxe</option>
              <option value="regular">Regular</option>
            </select>
          </div>

          <div className="flex items-center mb-4">
            <input id="thali" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <label htmlFor="thali" className="ml-2 text-gray-700">Punjabi Thali</label>
          </div>

          <div className="flex justify-end">
            <Link to="/bookLights">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                type="button"
              >
                Next
              </button>
            </Link>
            <Link to="/bookEquipment">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                type="button"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>

      {selectedOption === "deluxe" && (
        <div className='mt-8'>
          <img
            src={deluxeimage}
            className="h-48 w-64 rounded-md"
            alt="Deluxe"
          />
        </div>
      )}
    </div>
  );
}

export default BookFood;
