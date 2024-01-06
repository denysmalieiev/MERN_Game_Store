import {Link} from "react-router-dom"
import cartImg from "../assets/cart-shopping-fast-svgrepo-com.svg"
export const Header = ()=>{
  
  return(
    <>
    <section className="flex flex-row items-center bg-white p-3 justify-between  sticky top-0 shadow-sm z-10 w-screen">
    <Link to="/" className="font-bold text-purple-500 flex items-center"><span className="bg-purple-500 text-white font-extralight text-2xl w-fit h-fit px-1 rounded">S</span>games</Link>
    <Link to="/cart"><img src={cartImg} /></Link>
    </section>
    </>
    )
}