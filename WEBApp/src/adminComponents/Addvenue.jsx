import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests

const Addvenue = () => {
  const [venueName, setVenueName] = useState("");
  const [venueCost, setVenueCost] = useState("");
  const [venueImage, setVenueImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(venueImage);
    console.log("help");
    try {
      const formData = new FormData();

      formData.append("VenueImage", venueImage);

      await axios.post(
        `https://localhost:7017/api/Venue/addVenue?VenueName=${venueName}&VenueCost=${venueCost}`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Venue added successfully:"); // Clear form fields after successful submission
      setVenueName("");
      setVenueCost("");
      setVenueImage(null);
    } catch (error) {
      console.error("Error adding venue:", error);
      alert("Failed to add venue. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Venue</h1>
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <form onSubmit={handleFormSubmit} className="bg-white p-8">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="venueName"
            >
              Venue Name:
            </label>
            <input
              id="venueName"
              type="text"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="venueCost"
            >
              Venue Cost:
            </label>
            <input
              id="venueCost"
              type="text"
              value={venueCost}
              onChange={(e) => setVenueCost(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="venueImage"
            >
              Venue Image:
            </label>
            <input
              id="venueImage"
              type="file"
              onChange={(e) => setVenueImage(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <Button
              type="submit"
              color="blue"
              ripple="light"
              className="w-full sm:w-auto h-12 mb-2 sm:mb-0"
            >
              Add new venue
            </Button>
            <Button
              type="button"
              color="gray"
              ripple="light"
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
          </div>
          <Link to="/allvenues" className="text-blue-500 hover:underline mt-4">
            See all venues
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Addvenue;
