import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookLights() {
  const [light, setLight] = useState('');

  const handleLight = (event) => {
    const { value } = event.target;
    setLight(value);
  };

  const lights = {
    indoor: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9b5_HKf-YvPY9aythBE6ojx03Qc172pjJOjU7izWHQ&s'
    ],
    outdoor: [
      'https://homehop.in/wp-content/uploads/2024/02/Solar-led-decorative-lights-1200x900.webp'
    ]
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Book Lighting</h1>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 mb-4 md:mb-0 md:mr-4'>
          <div className='bg-white p-8'>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Light Type:</label>
              <div className='flex flex-col sm:flex-row'>
                <div className="flex items-center">
                  <input
                    id="inDoor"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleLight}
                    value="on"
                    checked={light === "on"}
                  />
                  <label htmlFor="inDoor" className="ml-2 text-gray-700">Indoor</label>
                </div>
                <div className="flex items-center sm:ml-4">
                  <input
                    id="outDoor"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleLight}
                    value="off"
                    checked={light === "off"}
                  />
                  <label htmlFor="outDoor" className="ml-2 text-gray-700">Outdoor</label>
                </div>
              </div>
            </div>
            <div className={`mt-4 ${light === 'on' ? '' : 'hidden'}`}>
              <div className="flex items-center">
                <input
                  id="in"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="in" className="ml-2 text-gray-700">String Lights</label>
              </div>
            </div>
            <div className={`mt-4 ${light === 'off' ? '' : 'hidden'}`}>
              <div className="flex items-center">
                <input
                  id="out"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="out" className="ml-2 text-gray-700">Acqulina</label>
              </div>
            </div>
            <div className="flex justify-end flex-wrap sm:flex-nowrap">
              <Link to="/bookFlowers">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-2 sm:mb-0"
                  type="button"
                >
                  Next
                </button>
              </Link>
              <Link to="/bookFood">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-2 sm:mb-0"
                  type="button"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`mt-4 md:mt-0 md:ml-4 hidden md:block`}>
          {light === 'on' && (
            <img
              src={lights.indoor[0]}
              alt="Indoor Lights"
              className="h-48 w-64 object-cover rounded-md mx-auto sm:mx-0"
            />
          )}
          {light === 'off' && (
            <img
              src={lights.outdoor[0]}
              alt="Outdoor Lights"
              className="h-48 w-64 object-cover rounded-md mx-auto sm:mx-0"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BookLights;
