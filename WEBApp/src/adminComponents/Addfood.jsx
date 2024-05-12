import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

function Addfood() {
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectfoodtype, setSelectfoodtype] = useState("");
  const [selectedDishType, setSelectedDishType] = useState("");
  const [dishName, setDishName] = useState("");
  const [dishCost, setDishCost] = useState("");
  const [dishImage, setDishImage] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedDishType(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    setSelectedMealType(event.target.value);
  };

  const handlefoodTypeChange = (event) => {
    setSelectfoodtype(event.target.value);
  };

  const handleImageChange = (event) => {
    setDishImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var selectfoodtype1 = selectfoodtype === "veg" ? 1 : 0;
      var selectedMealType1 = selectedMealType === "lunch" ? 1 : 0;
      var selectedDishType1 = selectedDishType === "deluxe" ? 1 : 0;
      const formData = new FormData();

      formData.append("DishImage", dishImage);

      const response = await axios.post(
        `https://localhost:7017/api/AddFood/addFood?FoodType=${selectfoodtype1}&MealType=${selectedMealType1}&DishType=${selectedDishType1}&DishName=${dishName}&DishCost=${dishCost}
      `,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      alert("Food item added successfully!");
    } catch (error) {
      console.error("Error adding food item:", error);
      alert("An error occurred while adding food item.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Add Food Items</h1>
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <div className="bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Food Type:
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    id="isveg"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handlefoodTypeChange}
                    value="veg"
                    checked={selectfoodtype === "veg"}
                  />
                  <label htmlFor="isveg" className="ml-2 text-gray-700">
                    Veg
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="isnonveg"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handlefoodTypeChange}
                    value="nonveg"
                    checked={selectfoodtype === "nonveg"}
                  />
                  <label htmlFor="isnonveg" className="ml-2 text-gray-700">
                    Non-veg
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meal Type:
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    id="isLunch"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleMealTypeChange}
                    value="lunch"
                    checked={selectedMealType === "lunch"}
                  />
                  <label htmlFor="isLunch" className="ml-2 text-gray-700">
                    Lunch
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="isDinner"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={handleMealTypeChange}
                    value="dinner"
                    checked={selectedMealType === "dinner"}
                  />
                  <label htmlFor="isDinner" className="ml-2 text-gray-700">
                    Dinner
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="foodType"
              >
                Dish Type:
              </label>
              <select
                id="foodType"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleOptionChange}
              >
                <option value="">Select Option</option>
                <option value="deluxe">Deluxe</option>
                <option value="regular">Regular</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="foodName"
              >
                Dish Name:
              </label>
              <input
                id="foodName"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={(e) => setDishName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="foodCost"
              >
                Dish Cost:
              </label>
              <input
                id="foodCost"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={(e) => setDishCost(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="foodImage"
              >
                Food Image:
              </label>
              <input
                id="foodImage"
                type="file"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleImageChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between">
              <Button
                color="blue"
                ripple="light"
                className="w-full sm:w-auto h-12 mb-2 sm:mb-0"
                type="submit"
              >
                Add new food
              </Button>
              <Button color="gray" ripple="light" className="w-full sm:w-auto">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addfood;
