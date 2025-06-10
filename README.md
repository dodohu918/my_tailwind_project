# PlastiCare Appointment Platform

This repository hosts an appointment management platform tailored for plastic surgery clinics. It integrates a **React + Vite + Tailwind CSS** front‑end with a **Node.js/Express** back‑end powered by **Sequelize** and **PostgreSQL**.

The goal is to streamline how patients find suitable surgeons and book available time slots.

## Repository structure

```
my_tailwind_project/
├── backend/   # Express server and database seeds
└── frontend/  # React client built with Vite
```

### `backend/`

| File | Purpose |
|------|---------|
| `server.js` | Main Express server. Defines API endpoints for storing questionnaire answers (`/api/answers`), retrieving filtered doctors (`/api/doctors`) and booking appointments (`/api/bookAppointment`). Uses Sequelize models for `Doctor` and `Appointment`. |
| `seed.js` | Seeds the database with example doctor records (name, specialty, location, availability, etc.). Run once to populate the `Doctor` table. |
| `seed_patient.js` | Utility script that sets up the `Appointment` model and syncs the schema. Useful when testing appointment records. |
| `package.json` | Lists backend dependencies (`express`, `cors`, `sequelize`, `pg`, `dotenv`). Start the server with `npm start`. |

### `frontend/`

| Path | What it contains |
|------|------------------|
| `src/` | Main React application source. Entry point is `main.jsx` which renders `App.jsx`. |
| `src/context/FormContext.jsx` | React context for storing answers to the questionnaire and posting them to the backend. |
| `src/pages/` | Individual screens:<br>• `LandingPage.jsx` – marketing landing page.<br>• `question_1.jsx` – ask if the issue is urgent.<br>• `question_2.jsx` – ask the purpose (Face/Chest/etc.).<br>• `question_3.jsx` – choose the nearest location.<br>• `Output.jsx` – lists matching doctors.<br>• `BookingPage.jsx` – finalize appointment booking. |
| `src/components/DoctorCard.jsx` | Stylized card used in `Output.jsx` to display doctor information and select times. |
| `index.html` | HTML template used by Vite. |
| `vite.config.js` | Vite configuration enabling the React and Tailwind plugins. |
| `package.json` | Front‑end dependencies and scripts (`vite`, `tailwindcss`, `react-router-dom`, etc.). Start with `npm run dev`. |

For additional Tailwind or ESLint settings, see `src/index.css`, `eslint.config.js`, and other configuration files inside this directory.

## Getting started

1. **Install dependencies**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. **Configure the database**
   Create a PostgreSQL database and set the `DATABASE_URL` in `backend/.env`.
3. **Seed data** (optional)
   ```bash
   node seed.js
   ```
4. **Run the servers**
   ```bash
   # Terminal 1
   cd backend
   npm start

   # Terminal 2
   cd frontend
   npm run dev
   ```
5. Visit `http://localhost:5173` (or the port provided by Vite) to use the app.

## About

PlastiCare helps patients quickly answer a few questions and view matching surgeons based on urgency, procedure type, and location. Available time slots are displayed so users can book directly through the interface.

Feel free to adapt the components and styles to match your clinic's branding!
