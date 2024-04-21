import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookEquipment() {
  const [djChecked, setDjChecked] = useState(false);
  const [speakersChecked, setSpeakersChecked] = useState(false);

  const handleNextClick = () => {
    if (!djChecked && !speakersChecked) {
      alert('Please select at least one equipment.');
    } else {
      console.log('Selected equipments:', djChecked, speakersChecked);
    }
  };

  const soundImages = {
    dj: [
      'https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?cs=srgb&dl=pexels-isabella-mendes-860707.jpg&fm=jpg',
    ],
    speakers: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
    ],
  };

  const renderImages = () => {
    const isSmallDevice = window.innerWidth <= 640; 
    if (isSmallDevice) {
      return null; 
    }
    return (
      <div className="flex flex-col sm:flex-row items-center">
        {djChecked && (
          <img
            src={soundImages.dj[0]}
            alt="DJ"
            className="h-32 w-48 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
          />
        )}
        {speakersChecked && (
          <img
            src={soundImages.speakers[0]}
            alt="Speakers"
            className="h-32 w-48 object-cover rounded-md"
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full sm:w-[400px] mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Book Equipment</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={djChecked}
              onChange={(e) => setDjChecked(e.target.checked)}
            />
            <label className="text-gray-700">DJ</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={speakersChecked}
              onChange={(e) => setSpeakersChecked(e.target.checked)}
            />
            <label className="text-gray-700">Speakers and Mic</label>
          </div>
          <div className="flex flex-col sm:flex-row justify-end">
            <Link to="/bookFood">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4"
                type="button"
                onClick={handleNextClick}
              >
                Next
              </button>
            </Link>
            <Link to="/booking">
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
  );
}

export default BookEquipment;
