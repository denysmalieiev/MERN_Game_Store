
export const Qualifier = ({cart,id,count,setCart})=>{
 return(
    <div class="flex flex-row w-20 items-center">
    <button class="btn w-7 p-1" onClick={()=>{
    const updatedCart = cart.map(item => {
      if (item._id === id) {
        return { ...item, count: item.count + 1 };
      }
      
      return item;
    });
   localStorage.setItem('cart',JSON.stringify(updatedCart))
   setCart(updatedCart)
    }}>+</button>
    <div class="">{count}</div>
    <button class="btn w-7 p-1" onClick={()=>{
    const updatedCart = cart.map(item => {
      if (item._id === id) {
        return { ...item, count: item.count -1 };
      }
      return item;
    });
const newArray  = updatedCart.filter(item => item.count > 0);
   localStorage.setItem('cart',JSON.stringify(newArray))
   setCart(newArray)
    }}>-</button>
    </div>
   )
}