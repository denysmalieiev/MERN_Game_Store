import {Header2} from "../components/header2"
import {Qualifier} from "../components/qualifier"
import {useState,useEffect} from "react"

export const Cart = ()=>{
  const [count,setCount] = useState(0)
   const [cartEl,setCartEl] = useState(JSON.parse(localStorage.getItem('cart')) || [])
   const [total,setTotal]= useState(0)
   const [quantity,setQuantity]= useState(0)
   
   useEffect(() => {
  let newTotal = 0;
  let newQuantity = 0;

  cartEl.forEach(item => {
    const cost = parseFloat(item.cost.replace('$', ''))*item.count;
    const roundedCost = Math.floor(cost);
    newTotal += roundedCost;
    newQuantity += 1;
  });
  setTotal(newTotal);
  setQuantity(newQuantity);
}, [cartEl]);

  return(
    <section class="w-screen h-screen bg-gray-200">
    <Header2/>
    <div class="font-bold text-sm text-gray-400 p-2">CART SUMMARY</div>
    <div class="flex flex-row justify-between p-2 bg-white shadowEl shadow-[rgba(0, 0, 0, .2)] ">
    <div class="font-bold text-sm text-[rgba(0, 0, 0, .2)]">subtotal</div>
    <div class="font-bold ml-2">${total}</div>
    </div>
    <div class="font-bold text-sm text-gray-400 p-2">CART({quantity})</div>
   
    {cartEl.map(game=>{
    
      return(
 <section key={game._id} class="p-1 bg-white shadowEl shadow-[rgba(0, 0, 0, .2) m-2 rounded">
    <div class="flex flex-row ">
    <img src={game.img} class="w-36 rounded"/>
    <div class="ml-2">
    <div class="text-sm ">{game.title}</div>
    <div class="font-bold">{game.cost}</div>
    </div>
    </div>
    
    <div class="flex flex-row justify-between pt-1">
    <button class="btn text-xs p-1" onClick={()=>{
    const valueToRemove = game.title
const newArray  = cartEl.filter(item => item.title !== valueToRemove);
localStorage.setItem('cart',JSON.stringify(newArray));
setCartEl(newArray)
    }}>remove</button>
   <Qualifier cart={cartEl}  id={game._id} count={game.count} setCart={setCartEl}/>
    </div>
    </section>
      )
    })}
    <div class="w-screen flex items-center justify-center">
    <button class="btn w-64 p-3 mt-3 ">check out</button>
    </div>
    </section>
    )
}