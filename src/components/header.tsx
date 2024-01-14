import {Link} from "react-router-dom" 
import {SearchBar} from "./search"
import cartImg from "../assets/cart-shopping-fast-svgrepo-com.svg"
export const Header = ()=>{
  
  return(
    <>
    <div className=" relative sticky top-0 z-50 w-screen">
    <section className="flex flex-row items-center bg-white p-3 justify-between  shadow-sm z-10 w-[100%]">
    <Link to="/" className="font-bold text-purple-500 flex items-center"><span className="bg-purple-500 text-white font-extralight text-2xl w-fit h-fit px-1 rounded">S</span>games</Link> 
       <div className="hidden md:block"> 
      <SearchBar/>
    </div>
    <Link to="/cart"><img src={cartImg} /></Link>
    </section> 
    <div className="md:hidden"> 
      <SearchBar/>
    </div> 
    </div>
    </>
    )
}