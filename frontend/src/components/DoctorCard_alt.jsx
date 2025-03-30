import React from "react";

function DoctorCard({ id, name, condition, location }) {
  return (
    <div className="border p-4 rounded mb-4 bg-white max-w-md">
      <h2 className="text-lg font-bold text-blue-700">{name}</h2>
      <p className="text-gray-700">Condition: {condition}</p>
      <p className="text-gray-700">Location: {location}</p>
      <p className="text-sm text-gray-700">ID: {id}</p>
    </div>
  );
}

export default DoctorCard;
