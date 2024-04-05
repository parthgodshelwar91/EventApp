import React from 'react'
import { Button } from "@material-tailwind/react";

function Addflowers() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Flowers</h1>
      <div className='w-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200'>
        <div className='bg-white p-8'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="FlowersName">Flowers Name:</label>
            <input id="flowersName" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="flowersCost">Flowers Cost:</label>
            <input id="flowersCost" type="text" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="flowersImage">Flowers Image:</label>
            <input id="flowersImage" type="file" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='flex justify-between'>
            <Button color="blue" ripple="light" className='w-2/5 h-12'>Add New flowers</Button>
            <Button color="gray" ripple="light" className='w-2/5'>Cancel</Button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Addflowers
