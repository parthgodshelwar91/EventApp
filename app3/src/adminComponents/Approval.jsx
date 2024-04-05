import { useState } from "react";

const Approval = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const data = [
    {
      bookingNo: "123",
      bookingDate: "2023-04-01",
      bookingApproval: "Approved",
      bookingApprovalDate: "2023-04-03",
    },
    {
      bookingNo: "456",
      bookingDate: "2023-04-02",
      bookingApproval: "Pending",
      bookingApprovalDate: "",
    },
    {
      bookingNo: "789",
      bookingDate: "2023-04-03",
      bookingApproval: "Approved",
      bookingApprovalDate: "2023-04-05",
    },
    {
      bookingNo: "101",
      bookingDate: "2023-04-04",
      bookingApproval: "Rejected",
      bookingApprovalDate: "2023-04-06",
    },
    {
      bookingNo: "112",
      bookingDate: "2023-04-05",
      bookingApproval: "Approved",
      bookingApprovalDate: "2023-04-07",
    },
    {
      bookingNo: "113",
      bookingDate: "2023-04-06",
      bookingApproval: "Pending",
      bookingApprovalDate: "",
    },
    {
      bookingNo: "114",
      bookingDate: "2023-04-07",
      bookingApproval: "Approved",
      bookingApprovalDate: "2023-04-09",
    },
    {
      bookingNo: "115",
      bookingDate: "2023-04-08",
      bookingApproval: "Rejected",
      bookingApprovalDate: "2023-04-10",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto max-w-4xl mt-40">
      <h2 className="text-2xl font-bold mb-4 text-black">Booking Approval</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="px-4 py-2">Booking No.</th>
              <th className="px-4 py-2">Booking Date</th>
              <th className="px-4 py-2">Booking Approval</th>
              <th className="px-4 py-2">Booking Approval Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-4 py-2 border text-black">
                  {item.bookingNo}
                </td>
                <td className="px-4 py-2 border text-black">
                  {item.bookingDate}
                </td>
                <td className="px-4 py-2 border text-black">
                  {item.bookingApproval}
                </td>
                <td className="px-4 py-2 border text-black">
                  {item.bookingApprovalDate}
                </td>
                <td className="px-4 py-2 border text-black">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                    Update Status
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                    Show Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <nav className="flex items-center justify-between">
          <span className="text-black">
            {startIndex + 1} - {endIndex > data.length ? data.length : endIndex}{" "}
            of {data.length} entries
          </span>
          <div>
            <button
              className="bg-gray-200 px-2 py-1 rounded-l-md text-black"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`bg-${
                  page === currentPage
                    ? "blue-500 text-white"
                    : "gray-200 text-black"
                } px-2 py-1`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="bg-gray-200 px-2 py-1 rounded-r-md text-black"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Approval;