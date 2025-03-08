import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const user = useSelector((store) => store.user);

  return (
    <footer className="footer p-4 fixed bottom-0 w-full flex justify-center shadow-md">
      {user && (
        <Link
          to="/feed"
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          🔥 Go to Feed
        </Link>
      )}
    </footer>
  );
};

export default Footer;
