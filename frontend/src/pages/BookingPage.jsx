import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // The data we passed from DoctorCard (doctorId, date, time, doctorName, etc.)
  const { doctorId, date, time, doctorName, location: docLocation, rating } = location.state || {};

  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleConfirm = async () => {
    try {
      const response = await fetch('https://my-tailwind-project.onrender.com/api/bookAppointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctorId,
          date: date?.date,   // date may be an object with day/date
          time,
          userName,
          phoneNumber,
        })
      });
      const data = await response.json();

      if (response.ok) {
        alert('Appointment booked successfully!');
        // Maybe navigate back to the main Output page
        navigate('/output');
      } else {
        alert('Error booking appointment: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Error booking appointment: ' + err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col p-4">
      <h2 className="text-2xl text-blue-700 font-bold mb-4">Booking Confirmation</h2>

      {/* Display chosen doctor info */}
      <div className="bg-white p-4 text-blue-700 rounded shadow-md w-full max-w-md mb-4">
        <p><strong>Doctor:</strong> {doctorName}</p>
        <p><strong>Location:</strong> {docLocation}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Date:</strong> {date?.day} - {date?.date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>

      {/* Form for user name & phone */}
      <div className="bg-white text-blue-700 p-4 rounded shadow-md w-full max-w-md">
        <label className="block mb-2">
          Your Name:
          <input
            type="text"
            className="border w-full p-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        
        <label className="block mb-2">
          Cellphone Number:
          <input
            type="text"
            className="border w-full p-2"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
