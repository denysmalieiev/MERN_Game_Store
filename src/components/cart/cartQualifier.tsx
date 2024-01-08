import {useState,useEffect} from "react"
type Props ={
  title:string
}
export const Qualifier = ({title}:Props)=>{ 
  const [count,setCount]=useState(1)
 const [countEl,setCountEl]=useState(1)
  useEffect(()=>{ 
    try{
localStorage.setItem(title,count.toString()) 
const local = localStorage.getItem(title) 
setCountEl(Number(local))
}catch(err){alert(err)}
  },[count])
  
  const increment = ()=>{
    setCount(count+1)
  }
  
const decrement = ()=>{
    setCount(count-1)
  }
 return(
    <div className="flex flex-row w-20 items-center">
    <button className="btn bg-purple-500 w-7 p-1" onClick={increment}>+</button>
    <div className="p-1">{countEl}</div>
    <button className="btn bg-purple-500 w-7 p-1" onClick={decrement}>-</button>
    </div>
   )
}