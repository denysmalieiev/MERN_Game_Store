import {createContext,useContext,useState} from "react" 

type Childern = {
  children: React.ReactNode
} 

type Context ={
  isLogedin: ()=>boolean,
  login:()=>void,
  logout:()=>void,
} 

const Authcontext = createContext<Context>({}as Context) 

export const AuthProvider = ({children}:Childern)=>{
  const [logedIn,setLogedin]=useState(true) 
  const login = ()=>{
    setLogedin(true)
  } 
const logout = ()=>{
    setLogedin(false)
  }
const isLogedin = ()=>{
    return logedIn
  } 
  return(
    <Authcontext.Provider value={{login,logout,isLogedin}}>
    {children}
    </Authcontext.Provider>
    )
} 

export const useAuth = ()=>useContext(Authcontext)