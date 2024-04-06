import React from 'react';
import { Button } from "@material-tailwind/react";

const Addvenue = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Venue</h1>
      <div className='w-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200'>
        <div className='bg-white p-8'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="venueName">Venue Name:</label>
            <input id="venueName" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="venueCost">Venue Cost:</label>
            <input id="venueCost" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="venueImage">Venue Image:</label>
            <input id="venueImage" type="file" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='flex justify-between'>
            <Button color="blue" ripple="light" className='w-2/5 h-12'>Add new venue</Button>
            <Button color="gray" ripple="light" className='w-2/5'>Cancel</Button>
            
          </div>
          <button className=' text-blue-500 hover:underline'>see all venues</button>
        </div>
      </div>
    </div>
  );
};

export default Addvenue;


