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

  function handleButton() {
    if (!eventType || !venueType || !numberOfGuests || !bookingDate) {
      alert("Please fill in all fields.");
    } else {
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
    const isSmallDevice = window.innerWidth <= 640; 
    if (isSmallDevice) {
      return null; 
    }
    return images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        className="h-[300px] w-[300px] sm:h-[200px] sm:w-[200px] rounded-xl shadow-xl"
        alt={`Event Type: ${eventType}`}
      />
    ));
  };

  return (
    <div className='flex flex-col sm:flex-col md:flex-row justify-center'>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-[500px] mt-8 sm:mt-8 md:mt-[300px] md:mr-8">
        <h2 className="text-xl font-bold mb-4 text-center">Booking Form</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className='flex flex-wrap justify-center'>
            <Button color="gray" ripple="light" className='but1 w-full sm:w-full md:w-42 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl mb-4 sm:mb-4 md:mb-0' onClick={handleButton}>Check Availability</Button>
            
            <Button color="gray" ripple="light" className='but2 w-full sm:w-full md:w-42 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl hidden mb-4 sm:mb-4 md:mb-0'><Link to="/bookEquipment">Add Event</Link></Button>

            <Button color="gray" ripple="light" className='w-full sm:w-full md:w-2/5 h-12 hover:bg-white hover:text-black border-2 border-black shadow-xl'>Cancel</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 sm:mt-8 md:mt-[300px]">{renderImages()}</div>
    </div>
  );
}

export default Booking;