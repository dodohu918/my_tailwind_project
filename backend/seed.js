// seed.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('clinic_schedule', 'postgres', 'anthonyfromtw', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
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

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced!");

    await Doctor.bulkCreate([
            {
              name: "Dr. URGENT Face - North California",
              condition: "URGENT",
              purpose: "Face",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Face + South California
            {
              name: "Dr. URGENT Face - South California",
              condition: "URGENT",
              purpose: "Face",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Face + San Francisco
            {
              name: "Dr. URGENT Face - San Francisco",
              condition: "URGENT",
              purpose: "Face",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // URGENT + Chest + North California
            // ================================
            {
              name: "Dr. URGENT Chest - North California",
              condition: "URGENT",
              purpose: "Chest",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Chest + South California
            {
              name: "Dr. URGENT Chest - South California",
              condition: "URGENT",
              purpose: "Chest",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Chest + San Francisco
            {
              name: "Dr. URGENT Chest - San Francisco",
              condition: "URGENT",
              purpose: "Chest",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // URGENT + Buttock + North California
            // ================================
            {
              name: "Dr. URGENT Buttock - North California",
              condition: "URGENT",
              purpose: "Buttock",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Buttock + South California
            {
              name: "Dr. URGENT Buttock - South California",
              condition: "URGENT",
              purpose: "Buttock",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Buttock + San Francisco
            {
              name: "Dr. URGENT Buttock - San Francisco",
              condition: "URGENT",
              purpose: "Buttock",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // URGENT + Abdomen + North California
            // ================================
            {
              name: "Dr. URGENT Abdomen - North California",
              condition: "URGENT",
              purpose: "Abdomen",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Abdomen + South California
            {
              name: "Dr. URGENT Abdomen - South California",
              condition: "URGENT",
              purpose: "Abdomen",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Abdomen + San Francisco
            {
              name: "Dr. URGENT Abdomen - San Francisco",
              condition: "URGENT",
              purpose: "Abdomen",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // URGENT + Limbs + North California
            // ================================
            {
              name: "Dr. URGENT Limbs - North California",
              condition: "URGENT",
              purpose: "Limbs",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Limbs + South California
            {
              name: "Dr. URGENT Limbs - South California",
              condition: "URGENT",
              purpose: "Limbs",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // URGENT + Limbs + San Francisco
            {
              name: "Dr. URGENT Limbs - San Francisco",
              condition: "URGENT",
              purpose: "Limbs",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
          
            // ================================
            // NOT_URGENT + Face + North California
            // ================================
            {
              name: "Dr. NOT_URGENT Face - North California",
              condition: "NOT_URGENT",
              purpose: "Face",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Face + South California
            {
              name: "Dr. NOT_URGENT Face - South California",
              condition: "NOT_URGENT",
              purpose: "Face",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Face + San Francisco
            {
              name: "Dr. NOT_URGENT Face - San Francisco",
              condition: "NOT_URGENT",
              purpose: "Face",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // NOT_URGENT + Chest + North California
            // ================================
            {
              name: "Dr. NOT_URGENT Chest - North California",
              condition: "NOT_URGENT",
              purpose: "Chest",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Chest + South California
            {
              name: "Dr. NOT_URGENT Chest - South California",
              condition: "NOT_URGENT",
              purpose: "Chest",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Chest + San Francisco
            {
              name: "Dr. NOT_URGENT Chest - San Francisco",
              condition: "NOT_URGENT",
              purpose: "Chest",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // NOT_URGENT + Buttock + North California
            // ================================
            {
              name: "Dr. NOT_URGENT Buttock - North California",
              condition: "NOT_URGENT",
              purpose: "Buttock",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Buttock + South California
            {
              name: "Dr. NOT_URGENT Buttock - South California",
              condition: "NOT_URGENT",
              purpose: "Buttock",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Buttock + San Francisco
            {
              name: "Dr. NOT_URGENT Buttock - San Francisco",
              condition: "NOT_URGENT",
              purpose: "Buttock",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // NOT_URGENT + Abdomen + North California
            // ================================
            {
              name: "Dr. NOT_URGENT Abdomen - North California",
              condition: "NOT_URGENT",
              purpose: "Abdomen",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Abdomen + South California
            {
              name: "Dr. NOT_URGENT Abdomen - South California",
              condition: "NOT_URGENT",
              purpose: "Abdomen",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Abdomen + San Francisco
            {
              name: "Dr. NOT_URGENT Abdomen - San Francisco",
              condition: "NOT_URGENT",
              purpose: "Abdomen",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
          
            // ================================
            // NOT_URGENT + Limbs + North California
            // ================================
            {
              name: "Dr. NOT_URGENT Limbs - North California",
              condition: "NOT_URGENT",
              purpose: "Limbs",
              location: "North California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Limbs + South California
            {
              name: "Dr. NOT_URGENT Limbs - South California",
              condition: "NOT_URGENT",
              purpose: "Limbs",
              location: "South California",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
            // NOT_URGENT + Limbs + San Francisco
            {
              name: "Dr. NOT_URGENT Limbs - San Francisco",
              condition: "NOT_URGENT",
              purpose: "Limbs",
              location: "San Francisco",
              distance: 10.0,
              rating: 4.5,
              reviews: 12,
              topRated: false,
              network: "Cigna",
              profilePics: [
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg"
              ],
              availability: [
                { day: "Mon", date: "Mar 24", appts: "6 appts", active: true },
                { day: "Tue", date: "Mar 25", appts: "7 appts" },
                { day: "Wed", date: "Mar 26", appts: "8 appts" }
              ],
              timeSlots: ["9:00 am", "10:00 am", "11:00 am"]
            },
    ]);

    console.log("Doctors inserted successfully!");
  } catch (err) {
    console.error("Error syncing DB:", err);
  } finally {
    sequelize.close();
  }
})();
