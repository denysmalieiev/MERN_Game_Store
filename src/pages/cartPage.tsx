import {Header} from "../components/header" 
import {useState,useEffect} from "react"
 import {ApiData} from "../redux/getGamesSlice" 
 import {Cart_card} from "../components/cart/cartCard"
 
 
 
 const CartPage = ()=>{ 
  const [data,setData] = useState<Array<ApiData>>([]) 
const storedCart = localStorage.getItem('cart'); 
  useEffect(()=>{
    try{
if(storedCart){
  setData(JSON.parse(storedCart))
}else {setData([])} 
}catch(err){alert(err)}
  },[storedCart])
 
  return(
    <section className="w-screen bg-gray-100">
    <Header/>
    <div className="font-bold text-sm text-gray-400 p-2">CART SUMMARY</div>
    <div className="flex flex-row justify-between p-2 bg-white shadowEl shadow-[rgba(0, 0, 0, .2)] ">
    <div className="font-bold text-sm text-[rgba(0, 0, 0, .2)]">subtotal</div>
    <div className="font-bold ml-2">$1000</div>
    </div>
    <div className="font-bold text-sm text-gray-400 p-2">CART({data.length})</div>
   
   <section>
   <Cart_card data={data}/>
   </section>
   
    <div className="w-screen flex items-center justify-center">
    <button className=" bg-purple-500 w-64 p-3 mt-3 rounded text-white font-bold ">check out</button>
    </div>
    </section>
    )
}

export default CartPage