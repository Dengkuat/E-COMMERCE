import { Navbar } from "../Routes/Navbar"
import { useState, useEffect } from "react"
import shoppingCart from "../assets/realest.png"


// categories interface 
interface categoriesInterface {
  id: number;
  name: string;
  image: string;
}

export const Home = () => {

  const [categories, setCategories] = useState<categoriesInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch(`https://api.escuelajs.co/api/v1/categories`)
      if (!res.ok) throw new Error(`Failed to get the categories`)

      const data: categoriesInterface[] = await res.json()

      const cleanData = data.filter(cat =>
        cat.image &&
        cat.image.startsWith("http") &&
        !cat.image.includes("Set-Cookie")
      )

      setCategories(cleanData)

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <Navbar />

      {/* //categories and image  */}
      <div className="flex justify-center p-30 relative mb-60">
        <img
          src={shoppingCart}
          alt="shopping cart"
          className="absolute -top-20 -left-20 w-150 h-150 z-0 object-contain my-20 hidden lg:block"
        />

        <p className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-bold relative z-10">
          Categories
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-9">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="p-8 overflow-hidden shadow-xl hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-100 object-cover rounded-2xl"
              onError={(e: any) => {
                e.target.src = "https://via.placeholder.com/300x200?text=No+Image"
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