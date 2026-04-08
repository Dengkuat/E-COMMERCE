import { useState, useEffect } from "react"

export const useFetchData = <T,>(url:String) => {
  const [inputs, setInputs] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Failed to fetch from URL`)

      const data:T[] = await res.json();
      setInputs(data);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [url])

  return {inputs, loading, error}
}
