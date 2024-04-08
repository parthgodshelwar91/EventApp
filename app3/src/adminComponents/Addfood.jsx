import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";

function Addfood() {
  const [selectedMealType, setSelectedMealType] = useState('');
  const [selectfoodtype, setSelectfoodtype] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    const { value } = event.target;
    setSelectedMealType(value);
  };

  const handlefoodTypeChange = (event) => {
    const { value } = event.target;
    setSelectfoodtype(value);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Food Items</h1>
      <div className='w-full max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200'>
        <div className='bg-white p-8'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Food Type:</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input id="isveg" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handlefoodTypeChange} value="veg" checked={selectfoodtype === "veg"} />
                <label htmlFor="isveg" className="ml-2 text-gray-700">Veg</label>
              </div>
              <div className="flex items-center">
                <input id="isnonveg" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handlefoodTypeChange} value="nonveg" checked={selectfoodtype === "nonveg"} />
                <label htmlFor="isnonveg" className="ml-2 text-gray-700">Non-veg</label>
              </div>
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Meal Type:</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input id="isLunch" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleMealTypeChange} value="lunch" checked={selectedMealType === "lunch"} />
                <label htmlFor="isLunch" className="ml-2 text-gray-700">Lunch</label>
              </div>
              <div className="flex items-center">
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

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="foodName">Dish Name:</label>
            <input id="foodName" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="foodCost">Dish Cost:</label>
            <input id="foodCost" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="foodImage">Food Image:</label>
            <input id="foodImage" type="file" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' />
          </div>

          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <Button color="blue" ripple="light" className='w-full sm:w-auto h-12 mb-2 sm:mb-0'>Add new food</Button>
            <Button color="gray" ripple="light" className='w-full sm:w-auto'>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addfood;
