import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="p-4">
        {/* <h1 id='product-h1' className="ml-4 text-4xl font-bold text-blue-600 text-center">Home Page</h1> */}
        <div className='flex flex-wrap justify-center space-x-56 mt-[200px] '>
        <Link to="/booking"><div className="product-card w-56 h-80 p-4 m-4 border border-gray-500 rounded-lg text-center relative overflow-hidden transition-transform hover:scale-110  shadow-xl cursor-pointer ">
            <img src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Product Image" className="w-full h-full object-cover rounded-lg" />
            <div className="product-info absolute h-full top-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4 transition-opacity opacity-0 hover:opacity-100">
              <h3 className='text-center mt-[40%] text-2xl font-bold'>Booking page</h3>
            </div>
          </div></Link>

          <Link to="status"><div className="product-card w-56 h-80 p-4 m-4 border border-gray-500 rounded-lg text-center relative overflow-hidden transition-transform hover:scale-110 shadow-xl cursor-pointer">
            <img src="https://cdn1.vectorstock.com/i/1000x1000/15/05/online-shopping-logistic-calendar-checklist-vector-24291505.jpg" alt="Product Image" className="w-full h-full object-cover rounded-lg" />
            <div className="product-info absolute h-full top-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4 transition-opacity opacity-0 hover:opacity-100">
              <h3 className='text-center mt-[40%] text-2xl font-bold'>Booking Status</h3>
            </div>
          </div></Link>
        </div>
      </div>
    </>
  )
}

export default Home;
