type Props ={
  title:string
}
export const Qualifier = ({title}:Props)=>{ 
  
  const increment = ()=>{
    alert(title)
  }
  
const decrement = ()=>{
    alert(title)
  }
 return(
    <div className="flex flex-row w-20 items-center">
    <button className="btn bg-purple-500 w-7 p-1" onClick={increment}>+</button>
    <div className="p-1">0</div>
    <button className="btn bg-purple-500 w-7 p-1" onClick={decrement}>-</button>
    </div>
   )
}