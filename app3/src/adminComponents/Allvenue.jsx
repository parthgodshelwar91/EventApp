import React, { useState } from 'react';
import '../App.css';

function DataTableWithSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { name: 'John Doe', bookingNo: 'B001', bookingDate: '2022-03-15', bookingApproved: true, approvedDate: '2022-03-20' },
    { name: 'Jane Smith', bookingNo: 'B002', bookingDate: '2022-03-20', bookingApproved: false, approvedDate: '2022-04-02' },
    { name: 'Alice Johnson', bookingNo: 'B003', bookingDate: '2022-04-01', bookingApproved: true, approvedDate: '2022-04-02' },
    { name: 'Michael Brown', bookingNo: 'B004', bookingDate: '2022-04-05', bookingApproved: true, approvedDate: '2022-04-06' },
    { name: 'Sarah Wilson', bookingNo: 'B005', bookingDate: '2022-04-10', bookingApproved: false, approvedDate: '2022-04-12' },
    { name: 'David Lee', bookingNo: 'B006', bookingDate: '2022-04-15', bookingApproved: true, approvedDate: '2022-04-16' },
    { name: 'Emily Martinez', bookingNo: 'B007', bookingDate: '2022-04-20', bookingApproved: false, approvedDate: '2022-04-21' },
    { name: 'James Anderson', bookingNo: 'B008', bookingDate: '2022-04-25', bookingApproved: true, approvedDate: '2022-04-26' },
    { name: 'Olivia Garcia', bookingNo: 'B009', bookingDate: '2022-05-01', bookingApproved: true, approvedDate: '2022-05-02' },
    { name: 'William Taylor', bookingNo: 'B010', bookingDate: '2022-05-05', bookingApproved: false, approvedDate: '2022-05-07' }
    
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-lg w-full max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="Search by booking number, name, booking date, booking approved, or approved date..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Booking No</th>
              <th className="px-4 py-2 text-left">Booking Date</th>
              <th className="px-4 py-2 text-left">Booking Approved</th>
              <th className="px-4 py-2 text-left">Approved Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.bookingNo}</td>
                <td className="border px-4 py-2">{item.bookingDate}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.bookingApproved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.bookingApproved ? 'Approved' : 'Not Approved'}
                  </span>
                </td>
                <td className="border px-4 py-2">{item.approvedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              indexOfLastItem >= filteredData.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredData.length}
          >
            Next
          </button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Print</button>
      </div>
    </div>
  );
}

export default DataTableWithSearch;
