import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Optional: clear user session
    localStorage.removeItem("token"); // example
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 lg:p-8 shadow-2xl font-bold text-center">
      <Link 
        to="/" 
        className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0"
      >
        BAG IT
      </Link>

      <button
        onClick={handleSignOut}
        className="text-lg sm:text-2xl lg:text-2xl border rounded-2xl py-1 px-4 font-semibold"
      >
        Sign Out
      </button>
    </nav>
  );
};