import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios"; // Import Axios for HTTP requests

function AddLightings() {
  const [lightName, setLightName] = useState("");
  const [lightCost, setLightCost] = useState("");
  const [lightType, setLightType] = useState("indoor"); // Default value for light type

  const handleLightType = (event) => {
    const { value } = event.target;
    setLightType(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var lighttype1 = lightType === "indoor" ? 1 : 0;
      const formData = new FormData();
      formData.append("LightImage", e.target.elements.LightingsImage.files[0]); // Get the selected file

      const response = await axios.post(
        `https://localhost:7017/api/Light/addlight?LName=${lightName}&LightCost=${lightCost}&LightType=${lighttype1}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); // Log success message
      alert("Lighting added successfully!");
    } catch (error) {
      console.error("Error adding lighting:", error);
      alert("An error occurred while adding lighting.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Lightings</h1>
      <div className="w-full max-w-lg rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <div className="bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lights Name:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={lightName}
                onChange={(e) => setLightName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lighting Cost:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={lightCost}
                onChange={(e) => setLightCost(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lighting Image:
              </label>
              <input
                type="file"
                id="LightingsImage"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location:
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="inDoor"
                  className="form-radio h-5 w-5 text-blue-600"
                  value="indoor"
                  checked={lightType === "indoor"}
                  onChange={handleLightType}
                />
                <label htmlFor="inDoor" className="ml-2 text-gray-700">
                  Indoor
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="outDoor"
                  className="form-radio h-5 w-5 text-blue-600"
                  value="outdoor"
                  checked={lightType === "outdoor"}
                  onChange={handleLightType}
                />
                <label htmlFor="outDoor" className="ml-2 text-gray-700">
                  Outdoor
                </label>
              </div>
            </div>
            <Button
              type="submit"
              color="blue"
              ripple="light"
              className="w-full sm:w-auto h-12 mb-2 sm:mb-0"
            >
              Add new Lighting
            </Button>
            <Button color="gray" ripple="light" className="w-full sm:w-auto">
              Cancel
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLightings;
