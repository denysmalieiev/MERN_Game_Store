import {Header} from "../components/header" 
import {useState,useEffect} from "react"
 import {Count} from "../components/reusable/gameCard" 
 import {Cart_card} from "../components/cart/cartCard"
 
 
 
 const CartPage = ()=>{ 
  const [data,setData] = useState<Count[]>([]) 
const storedCart = localStorage.getItem('cart'); 

  useEffect(()=>{
    try{
if(storedCart){
  setData(JSON.parse(storedCart)) 
}else {setData([])} 
}catch(err){alert(err)} 

  },[storedCart])
 
  return(
    <> 
     <Header/>
    <section className="w-screen bg-gray-100 pb-32 md:flex md:flex-row-reverse ">
   
    <div className="md:w-2/5 md:bg-white md:rounded md:p-2 md:h-fit md:my-4 md:mx-2 md:items-center">
    <div className="font-bold text-sm text-gray-400 p-2">CART SUMMARY</div>
    <div className="flex flex-row justify-between p-2 bg-gray-100 shadowEl shadow-[rgba(0, 0, 0, .2)] ">
    <div className="font-bold text-sm text-[rgba(0, 0, 0, .2)]">subtotal</div>
    <div className="font-bold ml-2">$1000</div>
    </div>
    <div className="font-bold text-sm text-gray-400 p-2">CART({data.length})</div> 
    <button className=" md:bg-purple-500 md:w-[100%] md:p-3 md:m-2 md:rounded md:text-white md:font-bold hidden  md:block ">check out (USD 20000)</button>
   </div> 
   
   <section className="md:w-3/5">
   <Cart_card data={data} setData={setData}/> 
   </section>
   
    <div className="w-screen flex items-center justify-center md:hidden">
    <button className=" bg-purple-500 w-64 p-3 mt-3 rounded text-white font-bold md:hidden ">check out</button>
    </div>
    </section> 
    </>
    )
}

export default CartPage