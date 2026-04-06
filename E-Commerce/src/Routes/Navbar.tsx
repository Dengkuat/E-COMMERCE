import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className='flex justify-between p-8 shadow-2xl px-15 font-bold text-center'>
      <Link to='/' className="text-4xl">E-Commerce</Link>
      <Link to='/login' className="text-2xl border  rounded-2xl py-1 px-4 font-semibold ">Login</Link>
    </nav>
  )
}
