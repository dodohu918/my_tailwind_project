import { useState, useEffect } from 'react';
import { useFormData } from '../context/FormContext';
import DoctorCard from '../components/DoctorCard'; // or wherever your DoctorCard is

const Output = () => {
  const { formData } = useFormData();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Example: fetch a list of doctors from the backend, passing user answers
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://my-tailwind-project.onrender.com/api/doctors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };    

    fetchDoctors();
  }, [formData]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Matching Doctors based on your answers
      </h1>

      <div className="flex flex-col items-center space-y-6">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default Output;
