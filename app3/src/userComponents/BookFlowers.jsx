import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookFlowers() {
  const [flower, setFlower] = useState('');

  const handleFlower = (event) => {
    const { value } = event.target;
    setFlower(value);
  };

  const flowers = {
    orchid: [
      'https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg'
    ],
    rose: [
      'https://media.istockphoto.com/id/582297490/photo/bouquet-of-red-roses-on-a-black-background-top-view.jpg?s=612x612&w=0&k=20&c=tMUCpNKZQAa2hOsOGWKRjDgNuwBER1r3dYROUTyjouY='
    ]
  };

  const renderImage = () => {
    if (!flower) return null;
    const isSmallDevice = window.innerWidth <= 640; 
    if (isSmallDevice) return null;
    return (
      <div className="mt-4 md:mt-0">
        {flower === 'on' && (
          <img
            src={flowers.orchid[0]}
            alt="Orchid"
            className="h-48 w-64 object-cover rounded-md sm:h-64 sm:w-96"
          />
        )}
        {flower === 'off' && (
          <img
            src={flowers.rose[0]}
            alt="Rose"
            className="h-48 w-64 object-cover rounded-md sm:h-64 sm:w-96"
          />
        )}
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Book Flowers</h1>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 mb-4 md:mb-0 md:mr-4'>
          <div className='bg-white p-8'>
            <div className='mb-6'>
              <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between'>
                <div className="flex items-center">
                  <input
                    id="orchids"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleFlower}
                    value="on"
                    checked={flower === "on"}
                  />
                  <label htmlFor="orchids" className="ml-2 text-gray-700">Orchids</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="redflower"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleFlower}
                    value="off"
                    checked={flower === "off"}
                  />
                  <label htmlFor="redflower" className="ml-2 text-gray-700">Red Wedding Flower</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end">
              <Link to="/status">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4" type="button">
                  Next
                </button>
              </Link>
              <Link to="/bookLights">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
        {renderImage()}
      </div>
    </div>
  );
}

export default BookFlowers;
