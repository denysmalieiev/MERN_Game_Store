import {createContext,useContext,useState} from "react" 

type Childern = {
  children: React.ReactNode
} 

type Context ={
  isLogedin: ()=>boolean,
  login:()=>void,
  logout:()=>void,
  setpay:(cost:number)=>void,
  totalPay:number
} 

const Authcontext = createContext<Context>({}as Context) 

export const AuthProvider = ({children}:Childern)=>{ 
  const [totalPay,setTotalPay] = useState(0) 
  const [logedIn,setLogedin]=useState(false) 
  const login = ()=>{
    setLogedin(true)
  } 
const logout = ()=>{
    setLogedin(false)
  }
const isLogedin = ()=>{
    return logedIn
  } 
  const setpay = (cost:number)=>{setTotalPay(cost)}
  return(
    <Authcontext.Provider value={{login,logout,isLogedin,setpay,totalPay}}>
    {children}
    </Authcontext.Provider>
    )
} 

export const useAuth = ()=>useContext(Authcontext)