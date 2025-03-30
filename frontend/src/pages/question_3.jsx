import { useFormData } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Q3 = () => {
  const { saveAnswer } = useFormData();
  const navigate = useNavigate();

  const handleClick = async (answer) => {
    await saveAnswer("question3", answer);
    navigate("/results");
  };

  return (
    <div className="h-screen w-full bg-[#f5f2ea] flex flex-col items-center justify-center">
      <h1 className="text-6xl text-black font-bold mb-2">40%</h1>
      <p className="text-xl text-black mb-6">
        3. Which position is closest to you?
      </p>

      <div className="flex items-center justify-center space-x-10">
        <button
          className="bg-black text-white text-xl ml-[400px] px-8 py-5 rounded-lg min-w-[140px]"
          onClick={() => handleClick("North California")}
        >
          North California
        </button>
        <button
          className="bg-black text-white text-xl px-8 py-5 rounded-lg min-w-[140px]"
          onClick={() => handleClick("South California")}
        >
          South California
        </button>
        <button
          className="bg-black text-white text-xl mr-[400px] px-8 py-5 rounded-lg min-w-[140px]"
          onClick={() => handleClick("San Francisco")}
        >
          San Francisco
        </button>
      </div>
    </div>
  );
};

export default Q3;
