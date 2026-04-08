import { useFetchData } from "../Logic/useFetchData"
import { createContext, type ReactNode } from "react"

interface userInterface {
  id: number
  email: string
  password: string
  name: string
  avatar: string
}

interface UserContextInterface {
  users: userInterface[]
}

interface childrenInterface{
  children:ReactNode
}

export const UserContext = createContext<UserContextInterface | null>(null)

export const UserProvider = ({children}:childrenInterface) => {
  const { inputs } = useFetchData<userInterface>
    (`https://api.escuelajs.co/api/v1/users`)

    return (
      <UserContext.Provider value={{users:inputs}}>
        {children}
      </UserContext.Provider>
    )
  }
