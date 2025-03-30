import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const DoctorCard = ({
  id,
  name = "Unknown Doctor",
  location = "Unknown Location",
  distance = 0,
  rating = 0,
  reviews = 0,
  topRated = false,
  network = "N/A",
  profilePics = [],
  availability = [],
  timeSlots = [],
}) => {
  // Find the first active day, or just pick the first day in the array
  const navigate = useNavigate();
  const defaultDay = availability.find((d) => d.active) || availability[0] || null;
  const [selectedDate, setSelectedDate] = useState(defaultDay);
  const handleTimeClick = (time) => {
    // Navigate to a booking page (we'll create it soon)
    navigate(`/book/${id}`, {
      state: {
        doctorId: id,
        date: selectedDate,
        time,
        doctorName: name,
        location,
        rating
      }
    });
  };


  return (
    <div className="bg-white rounded-xl shadow-md border p-6 mb-8 w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">{name}</h2>
          <p className="text-gray-700 flex items-center gap-1">
            <span>📍</span> {location} · {distance}mi
          </p>

          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-yellow-500 font-bold">⭐ {rating}</span>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
            {topRated && (
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                👥 Top-rated Service
              </span>
            )}
          </div>

          <p className="text-sm text-green-700 mt-1">🛡️ In-network · {network}</p>
        </div>

        {/* Profile pics */}
        {profilePics.length > 0 ? (
          <div className="flex -space-x-3">
            {profilePics.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt={`user-${index}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-400">No profile pics</div>
        )}
      </div>

      {/* Calendar */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-700">
        <span className="text-gray-400 cursor-not-allowed">← Prev availability</span>
        <div className="flex space-x-2 overflow-x-auto">
          {availability.length > 0 ? (
            availability.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDate(day)}
                className={`border rounded-md p-2 text-center w-20 transition-all duration-150
                  ${day.disabled ? "text-gray-400 bg-gray-100 cursor-not-allowed" : ""}
                  ${
                    selectedDate?.day === day.day
                      ? "bg-green-600 text-white"
                      : "border-green-600"
                  }
                `}
                disabled={day.disabled}
              >
                <div className="font-medium">{day.day}</div>
                <div className="text-sm">{day.date}</div>
                <div className="text-xs">{day.appts}</div>
              </button>
            ))
          ) : (
            <span className="text-gray-400">No availability</span>
          )}
        </div>
        <span className="text-blue-700 font-medium cursor-pointer">Next availability →</span>
      </div>

      {/* Time Slots */}
      {selectedDate && timeSlots.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-blue-700 font-medium mb-2">
            Request a time on {selectedDate.day}, {selectedDate.date}
          </p>
          <div className="flex flex-wrap gap-3">
            {timeSlots.map((time, i) => (
              <button
                key={i}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 bg-slate-600 text-white p-4 rounded-lg flex justify-between items-center">
        <p className="text-sm">
          🔺 <strong>14</strong> people with {network} booked in the past month
        </p>
        <div className="flex items-center gap-2">
          <button className="bg-white text-slate-700 px-3 py-1 rounded font-semibold">
            View Profile
          </button>
          <button className="text-white text-lg">🤍</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
