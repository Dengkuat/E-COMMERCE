import { Navbar } from "../Routes/Navbar"
import shoppingCart from "../assets/realest.png"
import { useFetchData } from "../Logic/useFetchData"
import { useState } from "react"

interface categoriesInterface {
  id: number;
  name: string;
  image: string;
}

export const Home = () => {
  const [search, setSearch] = useState<string>('')
  const { inputs, loading, error } = useFetchData<categoriesInterface>(`https://api.escuelajs.co/api/v1/categories`)

  if (loading) return <p>calm down, Loading...</p>
  if (error) return <p>{error}</p>


  const handleUserSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredCategories = inputs.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
      <Navbar />
      
      <div className="flex flex-col items-center justify-center p-8 relative mb-16 lg:mb-60 ">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold relative z-10 text-center">
          Categories
        </p>
        <img
          src={shoppingCart}
          alt="shopping cart"
          className="w-100 h-100 mt-4 lg:mt-0 lg:w-150 lg:h-150 lg:absolute lg:-top-20 lg:-left-20 lg:z-0 object-contain"
        />

        <div className="absolute mt-150 w-fit">
          <input
            type="text"
            placeholder="Search avilable categories"
            className="border rounded-2xl py-4 px-15 md:px-80 text-center text-2xl outline-none ring-1  focus:ring-2 focus:border-transparent transition duration-300 focus:ring-blue-600"
            value={search}
            onChange={handleUserSearch}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-9">
        {filteredCategories
          .map((cat) => (
            <div
              key={cat.id}
              className="p-8 overflow-hidden shadow-xl hover:shadow-lg transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-100 object-cover rounded-2xl"
              />

              <div className="p-2 flex justify-center">
                <p className="text-2xl font-semibold">{cat.name}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}