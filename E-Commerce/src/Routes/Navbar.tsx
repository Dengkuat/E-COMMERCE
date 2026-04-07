import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 lg:p-8 shadow-2xl font-bold text-center">
  <Link 
    to="/" 
    className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0"
  >
    BAG IT
  </Link>

  <Link 
    to="/login" 
    className="text-lg sm:text-2xl lg:text-2xl border rounded-2xl py-1 px-4 font-semibold"
  >
    Sign Out
  </Link>
</nav>
  )
}
