import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests
const Addflowers = () => {
  const [flowersName, setflowersName] = useState("");
  const [flowersCost, setflowersCost] = useState("");
  const [flowersImage, setflowersImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(flowersImage);
    console.log("help");
    try {
      const formData = new FormData();

      formData.append("FlowerImage", flowersImage);

      await axios.post(
        `https://localhost:7017/api/addFlower/addflower?FName=${flowersName}&FlowerCost=${flowersCost}`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("flower added successfully:"); // Clear form fields after successful submission
      setflowersName("");
      setflowersCost("");
      setflowersImage(null);
    } catch (error) {
      console.error("Error adding venue:", error);
      alert("Failed to add venue. Please try again.");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Flowers</h1>
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <form onSubmit={handleFormSubmit} className="bg-white p-8">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="flowersName"
            >
              Flowers Name:
            </label>
            <input
              id="flowersName"
              type="text"
              value={flowersName}
              onChange={(e) => setflowersName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="flowersCost"
            >
              Flowers Cost:
            </label>
            <input
              id="flowersCost"
              type="text"
              value={flowersCost}
              onChange={(e) => setflowersCost(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="flowersImage"
            >
              Flowers Image:
            </label>
            <input
              id="flowersImage"
              type="file"
              value={flowersImage}
              onChange={(e) => setflowersImage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Button
              type="submit"
              color="blue"
              ripple="light"
              className="w-full sm:w-auto h-12 mb-2 sm:mb-0"
            >
              Add New Flowers
            </Button>
            <Button color="gray" ripple="light" className="w-full sm:w-auto">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addflowers;
