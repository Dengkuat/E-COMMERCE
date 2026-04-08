import { useContext } from "react";
import { UserContext } from "../Routes/UsersLogin";

export const useUsers = () => {
  const context = useContext(UserContext)
  if(!context){
    throw new Error("useUsers must be inside UserProvider")
  }

  return context
}
