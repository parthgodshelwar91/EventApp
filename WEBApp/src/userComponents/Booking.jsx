import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";

function Booking() {
  var [eventType, setEventType] = useState("");
  var [venueId1, setVenueId1] = useState("");
  var [EventId1, setEventId1] = useState("");

  var [venueType, setVenueType] = useState("");
  var [eventOptions, setEventOptions] = useState([]);
  const [venueOptions, setVenueOptions] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false); // Track availability

  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  useEffect(() => {
    // Fetch event data from backend when component mounts
    axios
      .get("https://localhost:7017/api/Events/allEvents")
      .then((response) => {
        setEventOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });

    axios
      .get("https://localhost:7017/api/GetAllVenues/allVenues")
      .then((response) => {
        setVenueOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching venue data:", error);
      });
  }, []);

  const eventImages = {
    Wedding: [
      "https://i.pinimg.com/564x/b1/2d/21/b12d2125b6c2dc4f265623163545b15a.jpg",
    ],
    Birthday: [
      "https://i.pinimg.com/564x/83/0d/4b/830d4bc97ff7c08266b89180c178881f.jpg",
    ],
    Conference: [
      "https://i.pinimg.com/564x/5b/0a/37/5b0a37cc3243dec0dd41238ddab29d9e.jpg",
    ],
  };

  const handleEventTypeChange = (event) => {
    debugger;
    var e = event.target.id;
    e = document.getElementById(e);
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    //var selectedOption = e.options[ddl_EventType.selectedIndex];

    setEventType();
    setEventId1(value);
    console.log(eventType + "kli");
  };

  const handleVenueTypeChange = (event) => {
    var e = event.target.id;
    e = document.getElementById(e);
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    setVenueType(text);
    setVenueId1(value);
    console.log("Venue Type" + venueType);
    console.log("Venue ID" + venueId1);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value);
  };

  function handleButton() {
    if (!eventType || !venueType || !numberOfGuests || !bookingDate) {
      alert("Please fill in all fields.");
    } else {
      const but1 = document.querySelector(".but1");
      if (but1) {
        {
          handleCheckAvailability();
        }
        but1.style.display = "none";
      }
      // debugger;
      // console.log(isAvailable + "hhhhhhhhhhhhhh");
      // const but2 = document.querySelector("#Btn_BookEvent");
      // if (isAvailable) {
      //   but2.style.display = isAvailable ? "inline-block" : "none";
      // }
    }
  }

  // const renderImages = () => {
  //   const images = eventType ? eventImages[eventType] : [];
  //   const isSmallDevice = window.innerWidth <= 640;
  //   if (isSmallDevice) {
  //     return null;
  //   }
  //   return images.map((imageUrl, index) => (
  //     <img
  //       key={index}
  //       src={imageUrl}
  //       className="h-[300px] w-[300px] sm:h-[200px] sm:w-[200px] rounded-xl shadow-xl"
  //       alt={`Event Type: ${eventType}`}
  //     />
  //   ));
  // };
  const renderEventOptions = () => {
    return eventOptions.map((event) => (
      <option key={event.eventID} value={event.EventID}>
        {event.eventType}
      </option>
    ));
  };

  const renderVenueOptions = () => {
    return venueOptions.map((venue) => (
      <option key={venue.venueId} value={venue.venueId}>
        {venue.vName}
      </option>
    ));
  };
  const checkBookingAvailability = async (bookingDate, venueId) => {
    try {
      const response = await axios.get(
        `https://localhost:7017/api/Booking/checkAvailability?bookingDate=${bookingDate}&venueId=${venueId}`,
        {}
      );
      const rowCount = response.data;

      console.log("Number ", rowCount);
      const but2 = document.querySelector("#Btn_BookEvent");
      if (rowCount === "Available") {
        but2.style.display = "inline-block";
        setIsAvailable(true);
      } else {
        but2.style.display = "none";
      }

      if (isAvailable) {
      }

      return rowCount;
    } catch (error) {
      setIsAvailable(false);
      console.error("Error checking availability:", error);
      throw new Error("Failed to check booking availability.");
    }
  };
  var venueId;
  var EventID;
  const handleCheckAvailability = async () => {
    setEventType("example");
    console.log(eventType);
    venueId = venueOptions.find((venue) => venue.vName === venueType)?.venueId;
    if (!venueId) {
      console.error("Venue not found.");
      return;
    }

    try {
      //axios call
      const rowCount = await checkBookingAvailability(bookingDate, venueId);

      // Handle the result based on the rowCount
    } catch (error) {
      console.error("Error:", error.message);

      // Set availability to false on error
    }
  };

  const BookEvent = async () => {
    var UserID = sessionStorage.getItem("userId");
    console.log(EventId1 + " :Event Id ");
    try {
      const response =
        await axios.post()`https://localhost:7017/api/Booking/Bookevent?BookingDate=${bookingDate}&VenueID=${venueId1}&EventTypeID=${EventId1}&GuestCount=${numberOfGuests}&UserID=${UserID}`;

      // Handle successful response (e.g., show success message, redirect user)
      console.log("Booking added successfully:", response.data);

      // Assuming you want to navigate to another page after successful booking
      // Replace '/bookEquipment' with the appropriate route
      window.location.href = "/bookEquipment";
    } catch (error) {
      console.error("Error adding booking:", error);

      // Handle error (e.g., show error message to user)
      alert("Failed to add booking. Please try again.");
    }
  };
  return (
    <div className="flex flex-col sm:flex-col md:flex-row justify-center">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-[500px] mt-8 sm:mt-8 md:mt-[300px] md:mr-8">
        <h2 className="text-xl font-bold mb-4 text-center">Booking Form</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="eventType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
              value={eventType}
              onChange={handleEventTypeChange}
            >
              <option value="">Select Event Type</option>
              {renderEventOptions()}
            </select>
          </div>
          <div>
            <label
              htmlFor="venueType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Venue Type
            </label>
            <select
              id="venueType"
              name="venueType"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
              value={venueType}
              onChange={handleVenueTypeChange}
            >
              <option value="">Select Venue Type</option>
              {renderVenueOptions()}
            </select>
          </div>
          <div>
            <label
              htmlFor="numberOfGuests"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
              value={numberOfGuests}
              onChange={handleNumberOfGuestsChange}
            />
          </div>
          <div>
            <label
              htmlFor="bookingDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Booking Date
            </label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
              value={bookingDate}
              onChange={handleBookingDateChange}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <Button
              color="gray"
              ripple="light"
              className="but1 w-full sm:w-full md:w-42 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl mb-4 sm:mb-4 md:mb-0"
              onClick={handleButton}
            >
              Check Availability
            </Button>

            <Button
              color="gray"
              ripple="light"
              id="Btn_BookEvent"
              className="but2 w-full sm:w-full md:w-42 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl hidden mb-4 sm:mb-4 md:mb-0"
              onClick={BookEvent}
            >
              <Link to="/bookEquipment">Add Event</Link>
            </Button>

            <Button
              color="gray"
              ripple="light"
              className="w-full sm:w-full md:w-2/5 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 sm:mt-8 md:mt-[300px]">
        {/* {renderImages()} */}
      </div>
    </div>
  );
}

export default Booking;
