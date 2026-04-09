import { useParams } from "react-router-dom"
import { useFetchData } from "../Logic/useFetchData"

interface ProductInter {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string
}


export const Products = () => {
  const { ProductId } = useParams()

  const { inputs, loading, error } = useFetchData<ProductInter>(
    `https://api.escuelajs.co/api/v1/products/${ProductId}`
  )

  if (loading) return <p>calm down, Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <div className="shadow-xl rounded-2xl flex justify-between flex-row h-screen items-center">
        <img
          src={inputs.images[0]}
          alt={inputs.title}
          className="w-full h-100 object-cover rounded-2xl"
        />

        <div className="p-2 flex justify-center flex-col items-center text-2xl font-semibold">
          <p>{inputs.title}</p>
          <p>{inputs.price} RWF</p>
          <p>{inputs.description}</p>
        </div>
      </div>
    </div>
  )
}
