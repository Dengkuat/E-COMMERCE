import { Navbar } from "../Routes/Navbar"

export const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center items-center h-screen">
      <h1 className="p-5 text-5xl">E-Commerce Products</h1>
      </div>
    </>
  )
}
