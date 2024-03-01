import {Navigate} from "react-router-dom"
type Childern = {
  children: React.ReactNode
} 

export const Authentication = ({children}:Childern)=>{
const localUser = localStorage.getItem("account") 
  if(!localUser){
    return <Navigate to="/user/signin" replace/>
  } 
  return children
}