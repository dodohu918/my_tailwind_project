import { useFormData } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Q2 = () => {
  const { saveAnswer } = useFormData();
  const navigate = useNavigate();

  const handleClick = async (answer) => {
    await saveAnswer("question2", answer);
    navigate("/q3");
  };

  return (
    <div className="h-screen w-full bg-[#f5f2ea] flex flex-col items-center justify-center">
      <h1 className="text-6xl text-black font-bold mb-2">27%</h1>
      <p className="text-xl text-black mb-3">
        2. What is your purpose this time?
      </p>

      <div className="space-y-2">
        <button
          className="bg-black text-white text-xl mx-60 w-[600px] h-[50px] rounded-lg"
          onClick={() => handleClick("Face")}
        >
          1. Face
        </button>
        <button
          className="bg-black text-white text-xl mx-60 w-[600px] h-[50px] rounded-lg"
          onClick={() => handleClick("Chest")}
        >
          2. Chest
        </button>
        <button
          className="bg-black text-white text-xl mx-60 w-[600px] h-[50px] rounded-lg"
          onClick={() => handleClick("Buttock")}
        >
          3. Buttock
        </button>
        <button
          className="bg-black text-white text-xl mx-60 w-[600px] h-[50px] rounded-lg"
          onClick={() => handleClick("Abdomen")}
        >
          4. Abdomen
        </button>
        <button
          className="bg-black text-white text-xl mx-60 w-[600px] h-[50px] rounded-lg"
          onClick={() => handleClick("Limbs")}
        >
          5. Limbs
        </button>
      </div>
    </div>
  );
};

export default Q2;
