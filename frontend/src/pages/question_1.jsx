import { useFormData } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Q1 = () => {
  const { saveAnswer } = useFormData();
  const navigate = useNavigate();

  const handleClick = async (answer) => {
    // Save to local state + backend
    await saveAnswer("question1", answer);

    // Then go to next page
    navigate("/q2");
  };

  return (
    <div className="h-screen w-full bg-[#f5f2ea] flex flex-col items-center justify-center">
      <h1 className="text-6xl text-black font-bold mb-2">13%</h1>
      <p className="text-xl text-black mb-6">
        1. Do you have an emergency?
      </p>

      <div className="flex space-x-4">
        <button
          className="bg-black text-white ml-[400px] px-4 py-2"
          onClick={() => handleClick("URGENT")}
        >
          YES, I HAVE AN URGENT ISSUE
        </button>

        <button
          className="bg-black text-white mr-[400px] px-4 py-2"
          onClick={() => handleClick("NOT_URGENT")}
        >
          NO, I JUST NEED A NEW DENTIST
        </button>
      </div>
    </div>
  );
};

export default Q1;
