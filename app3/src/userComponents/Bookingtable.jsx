import React from 'react';

function Bookingtable({ bookings }) {
  return (
    <div className="flex justify-center ">
      <div className="overflow-x-auto border-gray-500 border-2 rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-500">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Booking No</th>
              <th className="px-4 py-2 border border-gray-300">Booking Date</th>
              <th className="px-4 py-2 border border-gray-300">Booking Approval</th>
              <th className="px-4 py-2 border border-gray-300">Booking Approval Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {bookings.map(booking => (
              <tr key={booking.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{booking.bookingNo}</td>
                <td className="px-4 py-2 border border-gray-300">{booking.bookingDate}</td>
                <td className="px-4 py-2 border border-gray-300">{booking.bookingApproval}</td>
                <td className="px-4 py-2 border border-gray-300">{booking.bookingApprovalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end px-4 py-2">
          <input
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default Bookingtable;