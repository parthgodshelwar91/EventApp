import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";

function AddLightings() {
  const [light, setLight] = useState('');

  const handlelight = (event) => {
    const { value } = event.target;
    setLight(value);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Lightings</h1>
      <div className='w-full max-w-lg rounded-lg overflow-hidden shadow-lg border-2 border-gray-200'>
        <div className='bg-white p-8'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Location:</label>
            <div className="flex items-center">
              <input id="inDoor" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handlelight} value="on" checked={light === "on"} />
              <label htmlFor="inDoor" className="ml-2 text-gray-700">Indoor</label>
            </div>
            <div className="flex items-center">
              <input id="outDoor" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handlelight} value="off" checked={light === "off"} />
              <label htmlFor="outDoor" className="ml-2 text-gray-700">Outdoor</label>
            </div>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="LightingsName">Lights Name:</label>
            <input id="LightingsName" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="LightingsCost">Lighting Cost:</label>
            <input id="LightingsCost" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="LightingsImage">Lighting Image:</label>
            <input id="LightingsImage" type="file" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' />
          </div>
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <Button color="blue" ripple="light" className='w-full sm:w-auto h-12 mb-2 sm:mb-0'>Add new Lighting</Button>
            <Button color="gray" ripple="light" className='w-full sm:w-auto'>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLightings;
