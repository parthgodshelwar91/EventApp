import React from 'react';

function Bookingtable({ bookings }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-500 ml-[400px] mt-[300px] ">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Booking No</th>
            <th className="border border-gray-500 px-4 py-2">Booking Date</th>
            <th className="border border-gray-500 px-4 py-2">Booking Approval</th>
            <th className="border border-gray-500 px-4 py-2">Booking Approval Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td className="border border-gray-500 px-4 py-2">{booking.bookingNo}</td>
              <td className="border border-gray-500 px-4 py-2">{booking.bookingDate}</td>
              <td className="border border-gray-500 px-4 py-2">{booking.bookingApproval}</td>
              <td className="border border-gray-500 px-4 py-2">{booking.bookingApprovalDate}</td>
            </tr>
          ))}
          <input className='border-2 m-4 border-gray rounded-lg' placeholder='search'/>
        </tbody>
      </table>
    </div>
  );
}

export default Bookingtable;
