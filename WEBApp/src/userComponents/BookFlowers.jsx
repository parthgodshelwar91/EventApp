import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BookFlowers() {
  const [selectedFlowerIds, setSelectedFlowerIds] = useState([]);
  const [flowersData, setFlowersData] = useState([]);

  const handleFlowerChange = (event) => {
    const { value } = event.target;
    setSelectedFlowerIds((prevSelectedFlowerIds) => {
      if (prevSelectedFlowerIds.includes(value)) {
        return prevSelectedFlowerIds.filter((flowerId) => flowerId !== value);
      } else {
        return [...prevSelectedFlowerIds, value];
      }
    });
  };

  const handleSubmit = () => {
    const userId = sessionStorage.getItem("userId");
    const bookingId = sessionStorage.getItem("bookingId");
    const flowerID = selectedFlowerIds.join(","); // Convert array to comma-separated string
    console.log("UserId: " + userId);
    console.log("BookingId: " + bookingId);
    console.log("FlowerID: " + flowerID);
    axios
      .post(
        `https://localhost:7017/api/addFlower/BookFlower?FlowerID=${flowerID}&CreatedBy=${userId}&BookingID=${bookingId}`
      )
      .then((response) => {
        console.log("Booking flowers successfully inserted", response);
        // Handle success (e.g., show a success message or navigate to another page)
      })
      .catch((error) => {
        console.error(
          "There was an error inserting the booking flowers!",
          error
        );
        // Handle error (e.g., show an error message)
      });
  };

  useEffect(() => {
    // Fetch flowers from API
    axios
      .get("https://localhost:7017/api/addFlower/allFlowers")
      .then((response) => {
        setFlowersData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the flowers!", error);
      });
  }, []);

  const flowers = {
    1: ["https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg"],
    2: [
      "https://media.istockphoto.com/id/582297490/photo/bouquet-of-red-roses-on-a-black-background-top-view.jpg?s=612x612&w=0&k=20&c=tMUCpNKZQAa2hOsOGWKRjDgNuwBER1r3dYROUTyjouY=",
    ],
  };

  const renderImages = () => {
    if (selectedFlowerIds.length === 0) return null;
    const isSmallDevice = window.innerWidth <= 640;
    if (isSmallDevice) return null;

    return (
      <div className="mt-4 md:mt-0">
        {selectedFlowerIds.map((flowerId) => {
          const imageUrl = flowers[flowerId];
          if (!imageUrl) return null;
          return (
            <img
              key={flowerId}
              src={imageUrl[0]}
              alt={flowerId}
              className="h-48 w-64 object-cover rounded-md sm:h-64 sm:w-96"
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Book Flowers</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 mb-4 md:mb-0 md:mr-4">
          <div className="bg-white p-8">
            <div className="mb-6">
              {flowersData.map((flower) => (
                <div key={flower.flowerId} className="flex items-center mb-2">
                  <input
                    id={flower.flowerId}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleFlowerChange}
                    value={flower.flowerId}
                    checked={selectedFlowerIds.includes(
                      flower.flowerId.toString()
                    )}
                  />
                  <label
                    htmlFor={flower.flowerId}
                    className="ml-2 text-gray-700"
                  >
                    {flower.fName}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-end">
              <Link to="/Status">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4"
                  type="button"
                  onClick={handleSubmit}
                >
                  Next
                </button>
              </Link>
              <Link to="/bookLights">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
        {renderImages()}
      </div>
    </div>
  );
}

export default BookFlowers;
