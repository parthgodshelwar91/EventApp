import React from 'react';
import { Link } from 'react-router-dom';

function Homedata() {
  return (
    <div className='flex justify-center flex-wrap mt-28 '>
      <div className='w-full sm:w-1/4 mt-6 m-8'>
        <p className='text-lg font-semibold mb-2'>To add venue:</p>
        <button className='bg-black text-white hover:bg-white hover:text-black border border-black h-10 w-full sm:w-40 rounded-md text-lg font-bold'>
          <Link to="/addvenue">Click here!</Link>
        </button>
      </div>
      <div className='w-full sm:w-1/4 mt-6 m-8'>
        <p className='text-lg font-semibold mb-2'>To add Equipments:</p>
        <button className='bg-black text-white hover:bg-white hover:text-black border border-black h-10 w-full sm:w-40 rounded-md text-lg font-bold'>
          <Link to="/addequip">Click here!</Link>
        </button>
      </div>
      <div className='w-full sm:w-1/4 mt-6 m-8'>
        <p className='text-lg font-semibold mb-2'>To add Food items:</p>
        <button className='bg-black text-white hover:bg-white hover:text-black border border-black h-10 w-full sm:w-40 rounded-md text-lg font-bold'>
          <Link to="/addfood">Click here!</Link>
        </button>
      </div>
      <div className='w-full sm:w-1/4 mt-6 m-8'>
        <p className='text-lg font-semibold mb-2'>To add Lightings:</p>
        <button className='bg-black text-white hover:bg-white hover:text-black border border-black h-10 w-full sm:w-40 rounded-md text-lg font-bold'>
          <Link to="/addlights">Click here!</Link>
        </button>
      </div>
      <div className='w-full sm:w-1/4 mt-6 m-8'>
        <p className='text-lg font-semibold mb-2'>To add Flowers:</p>
        <button className='bg-black text-white hover:bg-white hover:text-black border border-black h-10 w-full sm:w-40 rounded-md text-lg font-bold'>
          <Link to="/addflowers">Click here!</Link>
        </button>
      </div>
      <div className='w-full sm:w-1/4 mt-6 m-8'>
        <p className='text-lg font-semibold mb-2'>To add:</p>
        <button className='bg-black text-white hover:bg-white hover:text-black border border-black h-10 w-full sm:w-40 rounded-md text-lg font-bold'>
          <Link>Click here!</Link>
        </button>
      </div>
    </div>
  );
}

export default Homedata;
