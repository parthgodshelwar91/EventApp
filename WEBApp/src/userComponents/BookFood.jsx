import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BookFood() {
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectFoodType, setSelectFoodType] = useState("");
  const [selectDishType, setSelectDishType] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState();

  const handleOptionChange = (event) => {
    setSelectDishType(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    setSelectedMealType(event.target.value);
  };

  const handleFoodTypeChange = (event) => {
    setSelectFoodType(event.target.value);
  };

  useEffect(() => {
    if (selectedMealType && selectFoodType && selectDishType) {
      axios
        .get(
          `https://localhost:7017/api/AddFood/allFoodDishes?FoodType=${selectFoodType}&MealType=${selectedMealType}&DishType=${selectDishType}`
        )
        .then((response) => {
          setFoodItems(response.data);
          console.log("Food dishes successfully fetched", response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the food dishes!", error);
        });
    }
  }, [selectedMealType, selectFoodType, selectDishType]);

  const handleFoodSelection = (event) => {
    setSelectedFoods(event.target.value);
  };

  const handleSubmit = () => {
    const userId = sessionStorage.getItem("userId");
    const bookingId = sessionStorage.getItem("bookingId");
    const bookingDetails = {
      foodType: selectFoodType,
      mealType: selectedMealType,
      dishType: selectDishType,
      dishName: selectedFoods, // sending the list of selected food items
      createdBy: userId,

      bookingID: bookingId, // replace with actual booking ID
    };

    axios
      .post("https://localhost:7017/api/AddFood/BookFood", bookingDetails)

      .then((response) => {
        console.log("Booking successful", response.data);
        // Handle post-booking logic here
      })
      .catch((error) => {
        console.error("There was an error booking the food!", error);
      });
  };

  const deluxeimage =
    "https://media-cdn.tripadvisor.com/media/photo-s/0e/9e/e1/af/photo0jpg.jpg";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Book Food Items</h1>
      <div className="w-full md:max-w-lg">
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Food Type:
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="flex items-center">
                <input
                  id="isveg"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={handleFoodTypeChange}
                  value="1"
                  checked={selectFoodType === "1"}
                />
                <label htmlFor="isveg" className="ml-2 text-gray-700">
                  Veg
                </label>
              </div>
              <div className="flex items-center sm:ml-4">
                <input
                  id="isnonveg"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={handleFoodTypeChange}
                  value="0"
                  checked={selectFoodType === "0"}
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
            <div className="flex flex-col sm:flex-row">
              <div className="flex items-center">
                <input
                  id="isLunch"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={handleMealTypeChange}
                  value="1"
                  checked={selectedMealType === "1"}
                />
                <label htmlFor="isLunch" className="ml-2 text-gray-700">
                  Lunch
                </label>
              </div>
              <div className="flex items-center sm:ml-4">
                <input
                  id="isDinner"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={handleMealTypeChange}
                  value="0"
                  checked={selectedMealType === "0"}
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
              id="DishType"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              onChange={handleOptionChange}
              value={selectDishType}
            >
              <option value="">Select Option</option>
              <option value="1">Deluxe</option>
              <option value="0">Regular</option>
            </select>
          </div>

          {foodItems.map((food) => (
            <div className="flex items-center mb-4" key={food.foodID}>
              <input
                id={`food-${food.foodID}`}
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                value={food.dishName}
                onChange={handleFoodSelection}
              />
              <label
                htmlFor={`food-${food.foodID}`}
                className="ml-2 text-gray-700"
              >
                {food.dishName}
              </label>
            </div>
          ))}

          <div className="flex justify-end flex-wrap sm:flex-nowrap">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2 sm:mb-0"
              type="button"
              onClick={handleSubmit}
            >
              Next
            </button>
            <Link to="/bookEquipment">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-2 sm:mb-0"
                type="button"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>

      {selectDishType === "0" && (
        <div className="mt-8">
          <img
            src={deluxeimage}
            className="h-48 w-64 rounded-md mx-auto sm:mx-0"
            alt="Deluxe"
          />
        </div>
      )}
    </div>
  );
}

export default BookFood;
