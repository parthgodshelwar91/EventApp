import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4 pt-[200px]">
      <div className='flex flex-wrap justify-center space-x-4 md:space-x-8 lg:space-x-16 mt-12 md:mt-24'>
        <Link to="/booking">
          <div className="product-card w-56 md:w-72 h-80 md:h-96 p-4 m-4 border border-gray-500 rounded-lg text-center relative overflow-hidden transition-transform hover:scale-110 shadow-xl cursor-pointer">
            <img src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Product Image" className="w-full h-full object-cover rounded-lg" />
            <div className="product-info absolute inset-0 bg-black bg-opacity-50 text-white py-2 px-4 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className='text-center text-2xl font-bold'>Booking page</h3>
            </div>
          </div>
        </Link>

        <Link to="/status">
          <div className="product-card w-56 md:w-72 h-80 md:h-96 p-4 m-4 border border-gray-500 rounded-lg text-center relative overflow-hidden transition-transform hover:scale-110 shadow-xl cursor-pointer">
            <img src="https://cdn1.vectorstock.com/i/1000x1000/15/05/online-shopping-logistic-calendar-checklist-vector-24291505.jpg" alt="Product Image" className="w-full h-full object-cover rounded-lg" />
            <div className="product-info absolute inset-0 bg-black bg-opacity-50 text-white py-2 px-4 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className='text-center text-2xl font-bold'>Booking Status</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
