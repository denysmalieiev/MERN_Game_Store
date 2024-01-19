import {Link} from "react-router-dom"  
import {useAuth} from "../context/authContext" 
import {useNavigate} from "react-router-dom" ;
import {SearchBar} from "./search"
import cartImg from "../assets/cart-shopping-fast-svgrepo-com.svg"
export const Header = ()=>{ 
const navigate = useNavigate()
  const isLogedin = useAuth().isLogedin()
  const signIn = ()=>{
    navigate("/user/signin")
  }
  return(
    <>
    <div className=" relative sticky top-0 z-50 w-screen">
    <section className="flex flex-row items-center bg-white p-3 justify-between  shadow-sm z-10 w-[100%]">
    <Link to="/" className="font-bold text-purple-700 flex items-center"><span className="bg-purple-700 text-white font-extralight text-2xl w-fit h-fit px-1 rounded">S</span>games</Link> 
    <div className="hidden md:block">
      <SearchBar/> 
      </div>
       <div className=" flex flex-row justify-between items-center md:w-36 w-28"> 
    {!isLogedin?(<button className="bg-purple-600 text-xs font-bold rounded text-white p-2 ml-2 shadow-md" onClick={signIn}>Log in</button> ):(<div className="p-2 ml-2 text-white select-none">LogedIn</div>)}
    <Link to="/cart"><img src={cartImg} /></Link> 
    </div>
    </section> 
    <div className="md:hidden"> 
      <SearchBar/>
    </div> 
    </div>
    </>
    )
}