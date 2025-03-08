import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickOnCreateBtn = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray text-white">
      <h1 className="text-5xl font-bold mb-6 animate-pulse">
        Welcome to <span className="text-red-500">DevConnect</span>
      </h1>
      <button
        className="border rounded-xl bg-red-500 text-lg text-white px-6 py-3 transform transition duration-300 hover:scale-105 shadow-xl"
        onClick={handleClickOnCreateBtn}
      >
        Create an Account
      </button>
    </div>
  );
};

export default HomePage;
