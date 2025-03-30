// seed.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('clinic_schedule', 'postgres', 'anthonyfromtw', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

// In your Server.jsx (or a models.js file)
const Appointment = sequelize.define('Appointment', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: DataTypes.STRING,
    time: DataTypes.STRING,
  });


  (async () => {
    try {
      await sequelize.authenticate();
      console.log('DB connected!');
      await sequelize.sync({ alter: true });
      console.log('Models synced!');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
  
  