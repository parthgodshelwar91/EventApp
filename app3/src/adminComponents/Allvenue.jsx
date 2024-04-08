import React from "react";

const AllVenues = () => {
  const venues = [
    {
      name: "Venue A",
      cost: 100,
      image: "https://example.com/venue-a.jpg",
    },
    {
      name: "Venue B",
      cost: 200,
      image: "https://example.com/venue-b.jpg",
    },
    {
      name: "Venue C",
      cost: 150,
      image: "https://example.com/venue-c.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-8 mt-[250px]">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Available Venues
      </h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Venue Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cost
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {venues.map((venue, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors duration-300">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {venue.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  ${venue.cost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="h-20 w-auto rounded-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllVenues;