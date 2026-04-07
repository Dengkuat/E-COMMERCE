import { Navbar } from "../Routes/Navbar"
import { useState, useEffect } from "react"

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="border rounded-lg overflow-hidden shadow-xl hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-70 object-cover"
              onError={(e: any) => {
                e.target.src = "https://via.placeholder.com/300x200?text=No+Image"
              }}
            />

            <div className="p-2">
              <p>{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}