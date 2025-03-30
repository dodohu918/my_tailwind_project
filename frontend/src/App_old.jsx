import DoctorCard from './DoctorCard';

export default function App() {
  const commonAvailability = [
    { day: "Sun", date: "Mar 23", appts: "No appts", disabled: true },
    { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
    { day: "Tue", date: "Mar 25", appts: "7 appts" },
    { day: "Wed", date: "Mar 26", appts: "8 appts" },
    { day: "Thu", date: "Mar 27", appts: "8 appts" },
    { day: "Fri", date: "Mar 28", appts: "8 appts" },
    { day: "Sat", date: "Mar 29", appts: "8 appts" },
  ];

  const times = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm"];

  return (
    <div className="bg-gray-100 min-h-screen py-10 space-y-8">
      <DoctorCard
        name="Angela An DDS - N San Mateo"
        location="North Central"
        distance="15.2"
        rating="5.0"
        reviews="19"
        topRated={true}
        network="Cigna"
        profilePics={[
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/32.jpg",
        ]}
        availability={commonAvailability}
        timeSlots={times}
      />
      
      <DoctorCard
        name="Dr. Marcus Lee - Bay Dental"
        location="Downtown SF"
        distance="3.8"
        rating="4.9"
        reviews="32"
        topRated={false}
        network="Delta"
        profilePics={[
          "https://randomuser.me/api/portraits/men/11.jpg",
          "https://randomuser.me/api/portraits/women/67.jpg",
        ]}
        availability={commonAvailability}
        timeSlots={["10:00 am", "11:30 am", "1:00 pm"]}
      />
    </div>
  );
}
