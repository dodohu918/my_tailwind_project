import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';

import Q1 from './pages/question_1';
import Q2 from './pages/question_2';
import Q3 from './pages/question_3';
import Output from './pages/Output';
import BookingPage from './pages/BookingPage';
import LandingPage from './pages/LandingPage';



function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/q1" element={<Q1 />} />
          <Route path="/q2" element={<Q2 />} />
          <Route path="/q3" element={<Q3 />} />
          <Route path="/results" element={<Output />} />
          <Route path="/book/:id" element={<BookingPage />} />
          </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
