import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
function Booking() {
  const [eventType, setEventType] = useState('');
  const [venueType, setVenueType] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const eventImages = {
    Wedding: [
      'https://i.pinimg.com/564x/b1/2d/21/b12d2125b6c2dc4f265623163545b15a.jpg',
    ],
    Birthday: [
      'https://i.pinimg.com/564x/83/0d/4b/830d4bc97ff7c08266b89180c178881f.jpg',
    ],
    Conference: [
      'https://i.pinimg.com/564x/5b/0a/37/5b0a37cc3243dec0dd41238ddab29d9e.jpg',
    ],
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleVenueTypeChange = (event) => {
    setVenueType(event.target.value);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value);
  };

  /* const handleSubmit = () => {
    if (!eventType || !venueType || !numberOfGuests || !bookingDate) {
      alert("Please fill in all fields.");
    } else {
      // Perform action (e.g., submit form)
      console.log("Form submitted successfully!");
    }
  }; */
  function handleButton() {
    if (!eventType || !venueType || !numberOfGuests || !bookingDate) {
      alert("Please fill in all fields.");
    }else{
      const but1 = document.querySelector('.but1');
    if (but1) {
      but1.style.display = 'none';
    }
  
    
    const but2 = document.querySelector('.but2');
    if (but2) {
      but2.style.display = 'inline-block';
    }
    }
    
  }
  const renderImages = () => {
    const images = eventType ? eventImages[eventType] : [];
    return images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        className="h-[300px] w-[300px] rounded-xl shadow-xl"
        alt={`Event Type: ${eventType}`}
      />
    ));
  };

  return (
    <>
      <div className='flex'>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md w-[500px] ml-[400px] mt-[300px]">
          <h2 className="text-xl font-bold mb-4">Booking Form</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <select id="eventType" name="eventType" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300" value={eventType} onChange={handleEventTypeChange}>
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
            <div>
              <label htmlFor="venueType" className="block text-sm font-medium text-gray-700 mb-1">Venue Type</label>
              <select id="venueType" name="venueType" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300" value={venueType} onChange={handleVenueTypeChange}>
                <option value="">Select Venue Type</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div>
              <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
              <input type="number" id="numberOfGuests" name="numberOfGuests" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300" value={numberOfGuests} onChange={handleNumberOfGuestsChange} />
            </div>
            <div>
              <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-1">Booking Date</label>
              <input type="date" id="bookingDate" name="bookingDate" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300" value={bookingDate} onChange={handleBookingDateChange} />
            </div>
            <div className='flex justify-around w-[300px]'>
              <Button color="gray" ripple="light" className=' but1 w-42 h-12 mr-12 hover:bg-white hover:text-black border-2 border-black shadow-xl' /* onClick={handleSubmit} */ onClick={handleButton} >Check Avaialability</Button>
              
              <Button color="gray" ripple="light" className=' but2 w-42 h-12 mr-12 hover:bg-white hover:text-black border-2 border-black shadow-xl hidden'><Link to="/bookEquipment">add event</Link></Button>

              <Button color="gray" ripple="light" className='w-2/5 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl'>Cancel</Button>
            </div>
          </div>
        </div>
        <div className="flex ml-[80px] mt-[300px]">{renderImages()}</div>
      </div>
    </>
  );
}

export default Booking;
