import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  // Keep track of answers (and anything else you need).
  const [formData, setFormData] = useState({
    question1: null,
    question2: null,
    question3: null,
  });

  // Example function to store an answer & also call your backend
  const saveAnswer = async (questionKey, answerValue) => {
    setFormData(prev => ({ ...prev, [questionKey]: answerValue }));

    try {
      // Post partial answer to your backend
      await fetch('http://localhost:4000/api/answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionKey, answer: answerValue }),
      });
    } catch (err) {
      console.error('Error saving answer:', err);
    }
  };

  return (
    <FormContext.Provider value={{ formData, saveAnswer }}>
      {children}
    </FormContext.Provider>
  );
};
