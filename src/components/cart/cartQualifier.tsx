import  {Count} from "../reusable/gameCard"  
import {useEffect,useState} from "react"
type Props = {
  data:Count,
  cart: Count[],
  setData:any,
  del:(title:string)=>void
}
export const Qualifier = ({data,cart,setData,del}:Props)=>{  
  
  const [count,setCount] = useState(data.count)
  
  useEffect(()=>{ 
const updatedCart = cart.map(item => {
      if (item.title === data.title) {
        return { ...item, count, };
      }
      
      return item;
    }); 
    setData(updatedCart)
   localStorage.setItem('cart',JSON.stringify(updatedCart)) 
  },[count])
  
  const increment = ()=>{
    setCount(count+1)
    }
  
const decrement = ()=>{
    setCount(count-1)  
if(count===1){
      del(data.title)
    }
  }
 return(
    <div className="flex flex-row w-20 items-center">
    <button className="btn bg-purple-500 md:w-10 w-7  p-1 md:p-2" onClick={increment}>+</button>
    <div className="p-1">{count}</div>
    <button className="btn bg-purple-500 md:w-10 w-7  p-1 md:p-2" onClick={decrement}>-</button>
    </div>
   )
}