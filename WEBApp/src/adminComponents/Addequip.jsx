import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";

const Addequip = () => {
  const [EquipmentName, setEquipmentName] = useState("");
  const [EquipmentCost, setEquipmentCost] = useState("");
  const [EquipmentImage, setEquipmentImage] = useState(null);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(EquipmentImage);
    console.log("help");
    try {
      const formData = new FormData();

      formData.append("EquipmentImage", EquipmentImage);

      await axios.post(
        // `https://localhost:7017/api/Equipment/addEquipment?EName=${EquipmentName}&EquipmentCost=${EquipmentCost}`
        `https://localhost:7017/api/Equipment/addEquipment?EName=${EquipmentName}&EquipmentCost=${EquipmentCost}`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Equipment added successfully:"); // Clear form fields after successful submission
      setEquipmentName("");
      setEquipmentCost("");
      setEquipmentImage(null);
    } catch (error) {
      console.error("Error adding venue:", error);
      alert("Failed to add venue. Please try again.");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Equipment</h1>
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <form onSubmit={handleFormSubmit} className="bg-white p-8">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="EquipmentName"
            >
              Equipment Name:
            </label>
            <input
              id="EquipmentName"
              type="text"
              value={EquipmentName}
              onChange={(e) => setEquipmentName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="EquipmentCost"
            >
              Equipment Cost:
            </label>
            <input
              id="EquipmentCost"
              type="text"
              value={EquipmentCost}
              onChange={(e) => setEquipmentCost(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="EquipmentImage"
            >
              Equipment Image:
            </label>
            <input
              id="EquipmentImage"
              type="file"
              value={EquipmentImage}
              onChange={(e) => setEquipmentImage(e.target.value)}
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
              Add New Equipment
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

export default Addequip;
