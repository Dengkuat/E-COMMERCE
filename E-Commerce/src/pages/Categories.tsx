import { useParams } from "react-router-dom"
import { useFetchData } from "../Logic/useFetchData"

interface ProductsInterface {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export const Categories = () => {
  const { id } = useParams()

const { inputs, loading, error } = useFetchData<ProductsInterface>(
  `https://api.escuelajs.co/api/v1/categories/${id}/products`
)

  if (loading) return <p>calm down, Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-9">
        {inputs.map((products) => (
          <div key={products.id}
          className="p-8 overflow-hidden shadow-xl hover:shadow-lg transition"
          >
            <img
              src={products.images[0]}
              alt={products.images[0]}
              className="w-full h-100 object-cover rounded-2xl"
            />
            
            <div className="p-2 flex justify-center flex-col items-center text-2xl font-semibold">
            <p>{products.title}</p>
            <p>{products.price} RWF</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
