const express = require('express');
const cors = require('cors');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');


app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let userAnswers = {};
// const allDoctors = [
//   { id:1, name:"Dr. Urgent", condition:"URGENT", location:"North California" },
//   { id:2, name:"Dr. Chill", condition:"NOT_URGENT", location:"San Francisco" },
//   // ...
// ];

const sequelize = new Sequelize('clinic_schedule', 'postgres', 'anthonyfromtw', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // optional, to disable SQL logging
});

const Doctor = sequelize.define('Doctor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purpose: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distance: DataTypes.FLOAT,
  rating: DataTypes.FLOAT,
  reviews: DataTypes.INTEGER,
  topRated: DataTypes.BOOLEAN,
  network: DataTypes.STRING,
  // For arrays/objects, use JSON or TEXT depending on your DB:
  profilePics: DataTypes.JSONB,
  availability: DataTypes.JSONB,
  timeSlots: DataTypes.JSONB
});

const Appointment = sequelize.define('Appointment', {
  userName: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  doctorId: DataTypes.INTEGER,
  date: DataTypes.STRING,
  time: DataTypes.STRING,
});


// Save partial answers
app.post('/api/answers', (req, res) => {
  const { question, answer } = req.body;
  userAnswers[question] = answer;
  console.log("Current answers:", userAnswers);
  res.json({ status:"ok" });
});

app.post('/api/doctors', async (req, res) => {
  const { question1, question2, question3 } = req.body;

  try {
    // 1) Fetch all doctors from DB
    const docs = await Doctor.findAll();

    // 2) Filter them in-memory (like your example):
    //    (Or you can do advanced DB queries to filter directly in SQL.)
    const filtered = docs.filter(doc => {
      // Condition & location check as an example
      if (doc.condition === question1 && doc.purpose === question2 && doc.location === question3) {
        return true;
      }
      return false;
    });

    // 3) Return filtered list
    res.json(filtered);
  } catch (error) {
    console.error("Error retrieving doctors:", error);
    res.status(500).json({ error: "DB error" });
  }
});

app.post('/api/bookAppointment', async (req, res) => {
  try {
    const { doctorId, date, time, userName, phoneNumber } = req.body;

    // 1) Create the appointment
    const newAppointment = await Appointment.create({
      userName,
      phoneNumber,
      doctorId,
      date,
      time
    });

    // 2) Update the doctor to remove that time slot from `timeSlots`
    //    We assume doc.timeSlots is an array of strings (like ["9:00am", "9:30am", ...])
    const doctor = await Doctor.findByPk(doctorId);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    let updatedSlots = [];
    if (Array.isArray(doctor.timeSlots)) {
      updatedSlots = doctor.timeSlots.filter(t => t !== time);
    }

    // Or if your timeSlots are separated by date, you'd remove the time from the correct date. 
    // For simplicity, let's assume it's a single array.
    doctor.timeSlots = updatedSlots;
    await doctor.save();

    return res.json({ message: 'Appointment booked', appointment: newAppointment });
  } catch (error) {
    console.error('Error booking appointment:', error);
    return res.status(500).json({ error: 'Failed to book appointment' });
  }
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});
