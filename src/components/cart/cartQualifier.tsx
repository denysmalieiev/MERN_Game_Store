import  {Count} from "../reusable/gameCard"  

type Props = {
  data:Count
}
export const Qualifier = ({data}:Props)=>{ 
  const increment = ()=>{
    
  }
  
const decrement = ()=>{
    
  }
 return(
    <div className="flex flex-row w-20 items-center">
    <button className="btn bg-purple-500 w-7 p-1" onClick={increment}>+</button>
    <div className="p-1">{data.count}</div>
    <button className="btn bg-purple-500 w-7 p-1" onClick={decrement}>-</button>
    </div>
   )
}