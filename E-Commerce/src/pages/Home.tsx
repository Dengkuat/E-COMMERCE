import { Navbar } from "../Routes/Navbar"
import shoppingCart from "../assets/realest.png"
import { useFetchData } from "../Logic/useFetchData"

interface categoriesInterface {
  id: number;
  name: string;
  image: string;
}

export const Home = () => {
  const { inputs, loading, error } = useFetchData<categoriesInterface>(`https://api.escuelajs.co/api/v1/categories`)

  if (loading) return <p>calm down, Loading...</p>
  if (error) return <p>{error}</p>
  console.log(inputs)

  return (
    <>
      <Navbar />


      <div className="flex flex-col items-center justify-center p-8 relative mb-16 lg:mb-60">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold relative z-10 text-center">
          Categories
        </p>

        <img
          src={shoppingCart}
          alt="shopping cart"
          className="w-100 h-100 mt-4 lg:mt-0 lg:w-150 lg:h-150 lg:absolute lg:-top-20 lg:-left-20 lg:z-0 object-contain"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-9">
        {inputs
          ?.filter((cat) => cat.image) // remove empty/null images first
          .map((cat) => (
            <div
              key={cat.id}
              className="p-8 overflow-hidden shadow-xl hover:shadow-lg transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-100 object-cover rounded-2xl"
                onError={(e) => {
                  // remove the whole card if image fails
                  e.currentTarget.closest("div")?.remove();
                }}
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