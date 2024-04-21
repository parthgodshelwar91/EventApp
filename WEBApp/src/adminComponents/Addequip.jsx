import React from 'react'
import { Button } from "@material-tailwind/react";

function Addequip() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Equipment</h1>
      <div className='w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg overflow-hidden shadow-lg border-2 border-gray-200'>
        <div className='bg-white p-8'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="EquipmentName">Equipment Name:</label>
            <input id="EquipmentName" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="EquipmentCost">Equipment Cost:</label>
            <input id="EquipmentCost" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="EquipmentImage">Equipment Image:</label>
            <input id="EquipmentImage" type="file" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='flex flex-col sm:flex-row'>
            <Button color="blue" ripple="light" className='w-full sm:w-auto h-12 mb-2 sm:mb-0'>Add New Equipment</Button>
            <Button color="gray" ripple="light" className='w-full sm:w-auto'>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addequip;
