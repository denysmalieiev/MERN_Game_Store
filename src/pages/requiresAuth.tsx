import {useAuth} from "../context/authContext" 
import {Navigate} from "react-router-dom"
type Childern = {
  children: React.ReactNode
} 

export const Authentication = ({children}:Childern)=>{
  const auth = useAuth() 
  if(auth.isLogedin()){
    return <Navigate to="/user/signin" replace/>
  } 
  return children
}