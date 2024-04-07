import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function BookFlowers() {
    const [flower,setFlower] = useState('');
  const handleflower = (event) => {
    const { value } = event.target; 
    setFlower(value); 
  };
  
  const flowers={
    orchid:[
        'https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg'
    ],
    rose:[
        'https://media.istockphoto.com/id/582297490/photo/bouquet-of-red-roses-on-a-black-background-top-view.jpg?s=612x612&w=0&k=20&c=tMUCpNKZQAa2hOsOGWKRjDgNuwBER1r3dYROUTyjouY='
    ]
  }
  return (
    <> <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className="text-3xl font-bold mb-8 text-blue-600">Book Flowers</h1>
    <div className='flex'>
    <div className='w-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200'>
      <div className='bg-white p-8'>
      <div className='mb-6'>

          <div className='flex justify-around flex-col space-y-4'>
          <div className="flex items-center">
            <input id="orchids" type="checkbox" className=" but1 form-checkbox h-5 w-5 text-blue-600" onChange={handleflower} value="on" checked={flower === "on"} />
            <label htmlFor="orchids" className="ml-2 text-gray-700">Orchids</label>
          </div>
          <div className="flex items-center">
            <input id="redflower" type="checkbox" className="but2 form-checkbox h-5 w-5 text-blue-600" onChange={handleflower} value="off" checked={flower === "off"} />
            <label htmlFor="redflower" className="ml-2 text-gray-700">red wedding flower</label>
          </div>
          </div>
          
          <div className="flex justify-end">
          <Link to="/status"><button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            type="button"
            /*     */
          >
            Next
          </button></Link>
          <Link to="/bookLights"><button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded "
            type="button"
          >
            Cancel
          </button></Link>
          
        </div>
          </div>
          </div>
      </div>
      <div className="ml-4">
            {flower === 'on' && (
              <img
                src={flowers.orchid[0]}
                alt="Orchid"
                className="h-48 w-64 object-cover rounded-md"
              />
            )}
            {flower === 'off' && (
              <img
                src={flowers.rose[0]}
                alt="Rose"
                className="h-48 w-64 object-cover rounded-md"
              />
            )}
          </div>
      </div>
  </div>

    </>
  )
}

export default BookFlowers
