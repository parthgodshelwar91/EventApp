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
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Available Venues</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Venue Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {venues.map((venue, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{venue.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${venue.cost}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="h-20 w-auto"
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
