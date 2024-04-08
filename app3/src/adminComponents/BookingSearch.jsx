import React from 'react';

const BookingSearch = () => {
  return (
    <>
    <div className=' mt-[300px]'>
      <div className="bg-white p-6 rounded-lg shadow-md  md:m-10 lg:mx-auto lg:max-w-lg ">
        <h2 className="text-2xl font-bold mb-4">Booking Search</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="bookingNo" className="block text-gray-700 font-semibold mb-2">
              Booking Number
            </label>
            <input
              type="text"
              id="bookingNo"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="bookingDate" className="block text-gray-700 font-semibold mb-2">
              Booking full Date
            </label>
            <input
              type="date"
              id="bookingDate"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="bookingApproval" className="block text-gray-700 font-semibold mb-2">
              Booking Approval
            </label>
            <input
              type="text"
              id="bookingApproval"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="bookingApprovalDate" className="block text-gray-700 font-semibold mb-2">
              Approval Date
            </label>
            <input
              type="date"
              id="bookingApprovalDate"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
        <div className="mt-4 text-gray-500 text-center">
          <span>1 - 10 displayed</span> <span>185 in total</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingSearch;
