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

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full md:w-[400px] flex md:mr-8">
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
          <div className="flex justify-end">
            <Link to="/bookFood">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                type="button"
                onClick={handleNextClick}
              >
                Next
              </button>
            </Link>
            <Link to="/booking">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        {djChecked && (
          <img
            src={soundImages.dj[0]}
            alt="DJ"
            className="h-32 w-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
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
    </div>
  );
}

export default BookEquipment;
