import React from 'react'
import BookingTable from './Bookingtable';
function Status() {
    const bookings = [
        { id: 1, bookingNo: 'B001', bookingDate: '2022-04-01', bookingApproval: 'Approved', bookingApprovalDate: '2022-04-05' },
        { id: 2, bookingNo: 'B002', bookingDate: '2022-04-03', bookingApproval: 'Pending', bookingApprovalDate: '-' },
        { id: 3, bookingNo: 'B003', bookingDate: '2022-04-05', bookingApproval: 'Rejected', bookingApprovalDate: '-' }
      ];
  return (
    <div>
      <BookingTable bookings={bookings} />
    </div>
  )
}

export default Status
